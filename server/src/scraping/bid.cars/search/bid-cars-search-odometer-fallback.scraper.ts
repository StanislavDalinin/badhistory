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

export interface BidCarsSearchOdometerFallbackResumableScraperProcessMirror
  extends ResumableProcessMirrorEntity {
  type: typeof ResumableProcessType.bidCarsSearchOdometerFallbackScraper;
  props: {
    makeName: Make["name"];
    modelName: Model["name"];
    yearFrom: number;
    yearUntil: number;
    odometerRange: {
      from: number;
      targetFrom: number;
      targetUntil: number;
      until: number;
    };
  };
  state: {
    progress: number;
    odometer: {
      previous?: number;
      from: number;
      delta: number;
    };
  };
  result: null;
}

export const createBidCarsSearchOdometerFallbackResumableScraperProcessCreationParams =
  ({
    key,
    makeName,
    modelName,
    yearFrom,
    yearUntil,
    odometerRange,
  }: BidCarsSearchOdometerFallbackResumableScraperProcessMirror["props"] & {
    key: string;
  }): ResumableProcessCreationParams<BidCarsSearchOdometerFallbackResumableScraperProcessMirror> => ({
    type: ResumableProcessType.bidCarsSearchOdometerFallbackScraper,
    key,
    props: {
      makeName,
      modelName,
      yearFrom,
      yearUntil,
      odometerRange,
    },
    initialState: {
      progress: 0,
      odometer: {
        from: odometerRange.from,
        delta: odometerRange.targetFrom - odometerRange.from,
      },
    },
  });

@Injectable()
export class BidCarsSearchOdometerFallbackResumableScraperProcessService
  implements
    ResumableProcessService<BidCarsSearchOdometerFallbackResumableScraperProcessMirror>
{
  initializeResumableSteps({
    props,
  }: Pick<
    BidCarsSearchOdometerFallbackResumableScraperProcessMirror,
    "id" | "props"
  >): ResumableStepUnion<BidCarsSearchOdometerFallbackResumableScraperProcessMirror>[] {
    const { makeName, modelName, yearFrom, yearUntil, odometerRange } = props;

    return [
      loopStep(async ({ state, fork }) => {
        const { odometer } = state;

        const odometerUntil = odometer.from + odometer.delta;

        const odometerFrom =
          odometer.from === odometerRange.from ? undefined : odometer.from;
        const odometerTo = odometerUntil - 1;

        const result = await fork(
          createBidCarsSearchResultResumableScraperProcessCreationParams({
            key: `${odometerFrom}-${odometerTo}`,
            makeName,
            modelName,
            yearFrom: yearFrom,
            yearTo: yearUntil - 1,
            odometerFrom,
            odometerTo,
          }),
        );

        if (!result) {
          const nextRawDelta = odometer.delta / 2;

          if (nextRawDelta < 1) {
            throw new Error("Delta is less than 1");
          }

          odometer.delta = Math.floor(nextRawDelta);

          return;
        }

        if (odometerUntil >= odometerRange.targetUntil) {
          return breakLoopReturnableToken;
        }

        odometer.from = odometerUntil;
      }),
      step(({ state }) => {
        const { odometer } = state;

        const odometerUntil = odometer.from + odometer.delta;

        odometer.previous = odometerUntil;
        odometer.from = odometerRange.until;
        odometer.delta = odometerUntil - odometerRange.until;
      }),
      loopStep(async ({ state, fork }) => {
        const { odometer } = state;

        const rawOdometerUntil = odometer.from + odometer.delta;

        const odometerUntil =
          rawOdometerUntil < odometer.previous!
            ? odometer.previous!
            : rawOdometerUntil;

        const odometerTo =
          odometer.from === odometerRange.until ? undefined : odometer.from - 1;

        const result = await fork(
          createBidCarsSearchResultResumableScraperProcessCreationParams({
            key: `${odometerUntil}-${odometerTo}`,
            makeName,
            modelName,
            yearFrom: yearFrom,
            yearTo: yearUntil - 1,
            odometerFrom: odometerUntil,
            odometerTo,
          }),
        );

        if (!result) {
          const nextRawDelta = odometer.delta / 2;

          if (nextRawDelta > -1) {
            throw new Error("Delta is less than 1");
          }

          odometer.delta = Math.floor(nextRawDelta);

          return;
        }

        if (odometerUntil === odometer.previous) {
          return breakLoopReturnableToken;
        }

        odometer.from = odometerUntil;
      }),
    ];
  }
}
