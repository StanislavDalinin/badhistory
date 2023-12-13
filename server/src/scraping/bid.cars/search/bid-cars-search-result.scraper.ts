import {
  Make,
  Model,
  ResumableProcessMirror,
  ResumableProcessType,
} from "@prisma/client";

import { Injectable } from "@nestjs/common";

import SearchResponseItemSaveService from "./search-response-item-save.service";
import { createBidCarsSearchResultPageResumableScraperProcessCreationParams } from "./bid-cars-search-result-page-resumable-scraper-process.service";
import {
  createResolveProcessReturnableToken,
  loopStep,
  ResumableStepUnion,
  step,
} from "../../../server-process/resumable-process/ResumableProcess";
import { ResumableProcessService } from "../../../server-process/resumable-process/resumable-process-service.interface";
import { ResumableProcessCreationParams } from "../../../server-process/resumable-process/resumable-process.types";
import { SearchResponseItemCheckService } from "./search-response-item-check.service";

export interface BidCarsSearchResultResumableScraperProcessMirror
  extends ResumableProcessMirror {
  type: typeof ResumableProcessType.bidCarsSearchResultScraper;
  props: {
    makeName?: Make["name"];
    modelName?: Model["name"];
    yearFrom?: number;
    yearTo?: number;
    odometerFrom?: number;
    odometerTo?: number;
  };
  state: {
    progress: number;
    url?: string;
    pageIsLast?: boolean;
    pageNumber: number;
  };
  result: boolean;
}

export const createBidCarsSearchResultResumableScraperProcessCreationParams = ({
  key,
  ...props
}: BidCarsSearchResultResumableScraperProcessMirror["props"] & {
  key: string;
}): ResumableProcessCreationParams<BidCarsSearchResultResumableScraperProcessMirror> => ({
  type: ResumableProcessType.bidCarsSearchResultScraper,
  key,
  props,
  initialState: {
    progress: 0,
    pageNumber: 1,
  },
});

const lastAvailablePageNumber = 50;

@Injectable()
export class BidCarsSearchResultResumableScraperProcessService
  implements
    ResumableProcessService<BidCarsSearchResultResumableScraperProcessMirror>
{
  constructor(
    private readonly searchResponseItemSaveService: SearchResponseItemSaveService,
    private readonly searchResponseItemCheckService: SearchResponseItemCheckService,
  ) {}

  initializeResumableSteps({
    props,
  }: Pick<
    BidCarsSearchResultResumableScraperProcessMirror,
    "id" | "props"
  >): ResumableStepUnion<BidCarsSearchResultResumableScraperProcessMirror>[] {
    const { makeName, modelName, yearFrom, yearTo, odometerFrom, odometerTo } =
      props;

    return [
      step(async ({ fork }) => {
        const { pageIsLast: fullResultIsAvailable, searchItems } = await fork(
          createBidCarsSearchResultPageResumableScraperProcessCreationParams({
            key: lastAvailablePageNumber.toString(),
            makeName,
            modelName,
            yearFrom,
            yearTo,
            odometerFrom,
            odometerTo,
            page: lastAvailablePageNumber,
          }),
        );

        if (!fullResultIsAvailable) {
          const { lotData } = searchItems.at(-1)!;

          const exist =
            await this.searchResponseItemCheckService.check(lotData);

          if (!exist) {
            return createResolveProcessReturnableToken(false);
          }
        }

        for (const searchItem of searchItems) {
          const exist = await this.searchResponseItemCheckService.check(
            searchItem.lotData,
          );

          if (exist) {
            return;
          }

          await this.searchResponseItemSaveService.save(searchItem);
        }
      }),
      loopStep(async ({ state, fork }) => {
        const { pageNumber } = state;

        const { pageIsLast, searchItems } = await fork(
          createBidCarsSearchResultPageResumableScraperProcessCreationParams({
            key: pageNumber.toString(),
            makeName,
            modelName,
            yearFrom,
            yearTo,
            odometerFrom,
            odometerTo,
            page: pageNumber,
          }),
        );

        for (const searchItem of searchItems) {
          const exist = await this.searchResponseItemCheckService.check(
            searchItem.lotData,
          );

          if (exist) {
            return createResolveProcessReturnableToken(true);
          }

          await this.searchResponseItemSaveService.save(searchItem);
        }

        if (pageIsLast || pageNumber === lastAvailablePageNumber - 1) {
          return createResolveProcessReturnableToken(true);
        }

        state.pageNumber++;
      }),
    ];
  }
}
