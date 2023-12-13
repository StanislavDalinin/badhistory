import {
  Make,
  Model,
  ResumableProcessMirror as ResumableProcessMirrorEntity,
  ResumableProcessType,
} from "@prisma/client";

import { Injectable } from "@nestjs/common";

import { createBidCarsSearchResultResumableScraperProcessCreationParams } from "./bid-cars-search-result.scraper";
import { ResumableProcessService } from "../../../server-process/resumable-process/resumable-process-service.interface";
import {
  breakLoopReturnableToken,
  loopStep,
  ResumableStepUnion,
  step,
} from "../../../server-process/resumable-process/ResumableProcess";
import { ResumableProcessCreationParams } from "../../../server-process/resumable-process/resumable-process.types";
import { createBidCarsSearchOdometerFallbackResumableScraperProcessCreationParams } from "./bid-cars-search-odometer-fallback.scraper";

export interface BidCarsSearchModelResumableScraperProcessMirror
  extends ResumableProcessMirrorEntity {
  type: typeof ResumableProcessType.bidCarsSearchModelScraper;
  props: {
    makeName: Make["name"];
    modelName: Model["name"];
    yearRange: {
      from?: number;
      targetFrom: number;
      targetUntil: number;
      until?: number;
    };
    odometerFallbackRange: {
      from: number;
      targetFrom: number;
      targetUntil: number;
      until: number;
    };
  };
  state: {
    progress: number;
    year: {
      previous?: number;
      from: number;
      delta: number;
    };
  };
  result: null;
}

export const createBidCarsSearchModalResumableScraperProcessCreationParams = ({
  key,
  makeName,
  modelName,
  yearRange,
  odometerFallbackRange,
}: BidCarsSearchModelResumableScraperProcessMirror["props"] & {
  key: string;
}): ResumableProcessCreationParams<BidCarsSearchModelResumableScraperProcessMirror> => ({
  type: ResumableProcessType.bidCarsSearchModelScraper,
  key,
  props: {
    makeName,
    modelName,
    yearRange,
    odometerFallbackRange,
  },
  initialState: {
    progress: 0,
    year:
      yearRange.from === undefined
        ? {
            from: yearRange.targetFrom,
            delta: yearRange.targetUntil - yearRange.targetFrom,
          }
        : {
            from: yearRange.from,
            delta: yearRange.targetFrom - yearRange.from,
          },
  },
});

@Injectable()
export class BidCarsSearchModelResumableScraperProcessService
  implements
    ResumableProcessService<BidCarsSearchModelResumableScraperProcessMirror>
{
  initializeResumableSteps({
    props,
  }: Pick<
    BidCarsSearchModelResumableScraperProcessMirror,
    "id" | "props"
  >): ResumableStepUnion<BidCarsSearchModelResumableScraperProcessMirror>[] {
    const { makeName, modelName, yearRange, odometerFallbackRange } = props;

    const yearRangeUntil = yearRange.until;

    const steps: ResumableStepUnion<BidCarsSearchModelResumableScraperProcessMirror>[] =
      [
        loopStep(async ({ state, fork }) => {
          const { year } = state;

          const yearUntil = year.from + year.delta;

          const result = await fork(
            createBidCarsSearchResultResumableScraperProcessCreationParams({
              key: `${year.from}-${yearUntil}`,
              makeName,
              modelName,
              yearFrom: year.from === yearRange.from ? undefined : year.from,
              yearTo: yearUntil - 1,
            }),
          );

          if (!result) {
            const nextRawDelta = year.delta / 2;

            if (nextRawDelta < 1) {
              await fork(
                createBidCarsSearchOdometerFallbackResumableScraperProcessCreationParams(
                  {
                    key: `${year.from}-${yearUntil}`,
                    makeName,
                    modelName,
                    yearFrom: year.from,
                    yearUntil,
                    odometerRange: odometerFallbackRange,
                  },
                ),
              );

              year.from = yearUntil;

              return;
            }

            year.delta = Math.floor(nextRawDelta);

            return;
          }

          if (yearUntil >= yearRange.targetUntil) {
            return breakLoopReturnableToken;
          }

          year.from = yearUntil;

          if (
            yearRangeUntil === undefined &&
            year.from + year.delta > yearRange.targetUntil
          ) {
            year.delta = yearRange.targetUntil - year.from;
          }
        }),
      ];

    if (yearRangeUntil !== undefined) {
      steps.push(
        step(({ state }) => {
          const { year } = state;

          const yearUntil = year.from + year.delta;

          year.previous = yearUntil;
          year.from = yearRangeUntil;
          year.delta = yearUntil - yearRangeUntil;
        }),
        loopStep(async ({ state, fork }) => {
          const { year } = state;

          const rawYearUntil = year.from + year.delta;

          const yearUntil =
            rawYearUntil < year.previous! ? year.previous! : rawYearUntil;

          const result = await fork(
            createBidCarsSearchResultResumableScraperProcessCreationParams({
              key: makeName,
              modelName,
              yearFrom: yearUntil,
              yearTo: year.from === yearRange.until ? undefined : year.from - 1,
            }),
          );

          if (!result) {
            const nextRawDelta = year.delta / 2;

            if (nextRawDelta < 1) {
              await fork(
                createBidCarsSearchOdometerFallbackResumableScraperProcessCreationParams(
                  {
                    key: `${year.from}-${yearUntil}`,
                    makeName,
                    modelName,
                    yearFrom: year.from,
                    yearUntil: yearUntil,
                    odometerRange: odometerFallbackRange,
                  },
                ),
              );

              year.from = yearUntil;

              return;
            }

            year.delta = Math.floor(nextRawDelta);

            return;
          }

          if (yearUntil === year.previous) {
            return breakLoopReturnableToken;
          }

          year.from = yearUntil;
        }),
      );
    }

    return steps;
  }
}
