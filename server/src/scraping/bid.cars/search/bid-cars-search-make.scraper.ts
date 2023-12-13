import {
  Make,
  Model,
  ResumableProcessMirror as ResumableProcessMirrorEntity,
  ResumableProcessType,
} from "@prisma/client";
import { PrismaService } from "../../../prisma.service";

import { Injectable } from "@nestjs/common";
import { createBidCarsSearchModalResumableScraperProcessCreationParams } from "./bid-cars-search-model.scraper";
import {
  breakLoopReturnableToken,
  loopStep,
  ResumableStepUnion,
  step,
} from "../../../server-process/resumable-process/ResumableProcess";
import { ResumableProcessService } from "../../../server-process/resumable-process/resumable-process-service.interface";
import { ResumableProcessCreationParams } from "../../../server-process/resumable-process/resumable-process.types";

export interface BidCarsSearchMakeResumableScraperProcessMirror
  extends ResumableProcessMirrorEntity {
  type: typeof ResumableProcessType.bidCarsSearchMakeScraper;
  props: {
    makeName: Make["name"];
    startYear?: number;
    untilYear?: number;
  };
  state: {
    progress: number;
    modelNames?: Model["name"][];
    index: number;
  };
  result: null;
}

export const createBidCarsSearchMakeResumableScraperProcessCreationParams = ({
  key,
  ...props
}: BidCarsSearchMakeResumableScraperProcessMirror["props"] & {
  key: string;
}): ResumableProcessCreationParams<BidCarsSearchMakeResumableScraperProcessMirror> => ({
  type: ResumableProcessType.bidCarsSearchMakeScraper,
  key,
  props,
  initialState: {
    progress: 0,
    index: 0,
  },
});

@Injectable()
export class BidCarsSearchMakeResumableScraperProcessService
  implements
    ResumableProcessService<BidCarsSearchMakeResumableScraperProcessMirror>
{
  constructor(private readonly prisma: PrismaService) {}

  initializeResumableSteps({
    props,
  }: Pick<
    BidCarsSearchMakeResumableScraperProcessMirror,
    "id" | "props"
  >): ResumableStepUnion<BidCarsSearchMakeResumableScraperProcessMirror>[] {
    const { makeName, startYear = 1900, untilYear = 2025 } = props;

    return [
      step(async ({ state }) => {
        const models = await this.prisma.model.findMany({
          where: {
            make: {
              name: makeName,
            },
          },
          select: {
            name: true,
          },
        });

        state.modelNames = models.map(({ name }) => name);
      }),
      loopStep(async ({ state, fork }) => {
        const { modelNames, index } = state;

        const modelName = modelNames![index];

        await fork(
          createBidCarsSearchModalResumableScraperProcessCreationParams({
            key: modelName,
            makeName,
            modelName,
            yearRange: {
              from: 1900,
              targetFrom: 1980,
              targetUntil: 2025,
              until: 2026,
            },
            odometerFallbackRange: {
              from: 0,
              targetFrom: 10000,
              targetUntil: 60000,
              until: 250000,
            },
          }),
        );

        if (index === modelNames!.length) {
          return breakLoopReturnableToken;
        }

        state.index += 1;
      }),
    ];
  }
}
