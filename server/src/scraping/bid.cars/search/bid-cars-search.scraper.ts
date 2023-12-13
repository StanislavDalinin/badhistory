import {
  Make,
  ResumableProcessMirror as ResumableProcessMirrorEntity,
  ResumableProcessType,
} from "@prisma/client";
import { PrismaService } from "../../../prisma.service";

import { Injectable } from "@nestjs/common";

import { createBidCarsSearchMakeResumableScraperProcessCreationParams } from "./bid-cars-search-make.scraper";
import { ResumableProcessService } from "../../../server-process/resumable-process/resumable-process-service.interface";
import {
  breakLoopReturnableToken,
  loopStep,
  ResumableStepUnion,
  step,
} from "../../../server-process/resumable-process/ResumableProcess";

export interface BidCarsSearchResumableScraperProcessMirror
  extends ResumableProcessMirrorEntity {
  type: typeof ResumableProcessType.bidCarsSearchScraper;
  props: {};
  state: {
    progress: number;
    makeNames?: Make["name"][];
    index: number;
  };
  result: null;
}

@Injectable()
export class BidCarsSearchResumableScraperProcessService
  implements
    ResumableProcessService<BidCarsSearchResumableScraperProcessMirror>
{
  constructor(private readonly prisma: PrismaService) {}

  initializeResumableSteps({}: Pick<
    BidCarsSearchResumableScraperProcessMirror,
    "id" | "props"
  >): ResumableStepUnion<BidCarsSearchResumableScraperProcessMirror>[] {
    return [
      step(async ({ state }) => {
        const makes = await this.prisma.make.findMany({
          select: {
            name: true,
          },
        });

        state.makeNames = makes.map(({ name }) => name);
      }),
      loopStep(async ({ state, fork }) => {
        const { makeNames, index } = state;

        const makeName = makeNames![index];

        await fork(
          createBidCarsSearchMakeResumableScraperProcessCreationParams({
            key: makeName,
            makeName,
          }),
        );

        state.index += 1;

        if (state.index === makeNames!.length) {
          return breakLoopReturnableToken;
        }
      }),
    ];
  }
}
