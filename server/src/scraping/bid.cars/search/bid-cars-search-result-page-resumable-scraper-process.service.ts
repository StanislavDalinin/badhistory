import { Injectable } from "@nestjs/common";
import ContentLoadService from "../../content-load/content-load.interface";
import {
  Make,
  Model,
  VehicleType,
  ResumableProcessMirror,
  ResumableProcessType,
} from "@prisma/client";
import { getBidCarsSearchResultPageUrl } from "./search.utils";
import { RawSearchResponsePage, SearchResponseItem } from "./search.types";
import { searchResponseSchema } from "./search.schemas";
import { ErrorObject } from "ajv";
import {
  createRawToSearchItemMapper,
  createRawToSearchResponsePageMapper,
  createTagParser,
} from "./search.mappers";
import { PrismaService } from "../../../prisma.service";
import { ResumableProcessService } from "../../../server-process/resumable-process/resumable-process-service.interface";
import { AjvService } from "../../ajv/ajv.service";
import {
  createResolveProcessReturnableToken,
  ResumableStepUnion,
  step,
} from "../../../server-process/resumable-process/ResumableProcess";
import { ResumableProcessCreationParams } from "../../../server-process/resumable-process/resumable-process.types";

const exteriorColors = [
  "Black",
  "White",
  "Silver",
  "Gray",
  "Blue",
  "Red",
  "Green",
  "Gold",
];

export type Logger = {
  info: (message: string) => void;
  error: (error: ErrorObject[]) => void;
};

type ResumableProcess<Props extends {}, State extends {}> = {
  props: Props;
  state: State;
  currentStep: number;
  signal: AbortSignal;
  logger: Logger;
};

export interface BidCarsSearchResultPageResumableScraperProcessMirror
  extends Omit<ResumableProcessMirror, "result"> {
  type: typeof ResumableProcessType.bidCarsSearchResultPageScraper;
  props: {
    makeName?: Make["name"];
    modelName?: Model["name"];
    vehicleTypeName?: VehicleType["name"];
    yearFrom?: number;
    yearTo?: number;
    exteriorColor?: string;
    odometerFrom?: number;
    odometerTo?: number;
    page?: number;
  };
  state: { url?: string; searchResponse?: string };
  result: {
    pageIsLast: boolean;
    searchItems: SearchResponseItem[];
  };
}

//
// interface NotReadyBidCarsSearchResultPageResumableScraperProcessMirror
//   extends BaseBidCarsSearchResultPageResumableScraperProcessMirror {
//   status: Exclude<Status, typeof Status.succeeded>;
//   result: null;
// }
//
// interface ReadyBidCarsSearchResultPageResumableScraperProcessMirror
//   extends BaseBidCarsSearchResultPageResumableScraperProcessMirror {
//   status: typeof Status.succeeded;
//   result: {
//     pageIsLast: boolean;
//     searchItems: any[];
//   };
// }
//
// export type BidCarsSearchResultPageResumableScraperProcessMirror =
//   | ReadyBidCarsSearchResultPageResumableScraperProcessMirror
//   | NotReadyBidCarsSearchResultPageResumableScraperProcessMirror;

export const createBidCarsSearchResultPageResumableScraperProcessCreationParams =
  ({
    key,
    ...props
  }: BidCarsSearchResultPageResumableScraperProcessMirror["props"] & {
    key: string;
  }): ResumableProcessCreationParams<BidCarsSearchResultPageResumableScraperProcessMirror> => ({
    type: ResumableProcessType.bidCarsSearchResultPageScraper,
    key,
    props,
    initialState: {},
  });

@Injectable()
export class BidCarsSearchResultPageResumableScraperProcessService
  implements
    ResumableProcessService<BidCarsSearchResultPageResumableScraperProcessMirror>
{
  constructor(
    private readonly ajv: AjvService,
    private readonly prismaService: PrismaService,
    private readonly contentLoadService: ContentLoadService,
  ) {}

  initializeResumableSteps = ({
    props,
    logger,
    signal,
  }: Pick<
    BidCarsSearchResultPageResumableScraperProcessMirror,
    "id" | "props"
  > & {
    logger: Logger;
    signal: AbortSignal;
  }): ResumableStepUnion<BidCarsSearchResultPageResumableScraperProcessMirror>[] => {
    const {
      makeName,
      modelName,
      vehicleTypeName,
      yearFrom,
      yearTo,
      odometerFrom,
      odometerTo,
      exteriorColor,
      page,
    } = props;

    return [
      step(({ state }) => {
        state.url = getBidCarsSearchResultPageUrl({
          make: makeName,
          model: modelName,
          type: vehicleTypeName,
          yearFrom,
          yearTo,
          odometerFrom,
          odometerTo,
          exteriorColor,
          page,
        });
      }),
      step(async ({ state }) => {
        state.searchResponse = await this.contentLoadService.load(state.url!, {
          signal,
        });
      }),
      step(async ({ state }) => {
        const rawSearchResponsePage: RawSearchResponsePage = JSON.parse(
          state.searchResponse!,
        );

        const validateSearchResponse = this.ajv.compile(searchResponseSchema);

        if (!validateSearchResponse(rawSearchResponsePage)) {
          logger.error(validateSearchResponse.errors!);
        }

        const makes = await this.prismaService.make.findMany({
          select: {
            name: true,
            models: {
              select: {
                name: true,
              },
            },
          },
        });

        const modelNamesByMakeName = Object.fromEntries(
          makes.map((make) => [
            make.name.toLowerCase(),
            make.models.map((model) => model.name.toLowerCase()),
          ]),
        );

        const parseTag = createTagParser(modelNamesByMakeName);

        const mapRawToSearchItem = createRawToSearchItemMapper(parseTag);

        const mapRawSearchResponsePage =
          createRawToSearchResponsePageMapper(mapRawToSearchItem);

        const {
          from,
          to,
          perPage,
          data: searchItems,
        } = mapRawSearchResponsePage(rawSearchResponsePage);

        const pageIsLast =
          (from === null && to === null) ||
          (from !== null && to !== null && to - from < perPage);

        return createResolveProcessReturnableToken({
          pageIsLast,
          searchItems,
        });
      }),
    ];
  };
}
