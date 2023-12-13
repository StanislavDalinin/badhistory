import {
  Args,
  Mutation,
  ObjectType,
  OmitType,
  PickType,
  Resolver,
  Subscription,
} from "@nestjs/graphql";
import { PrismaService } from "../prisma.service";
import { Status } from "@prisma/client";
import { PubSubService } from "../pub-sub.service";
import { ResumableProcessMirror } from "../generated/typegraphql-prisma-nestjs";
import { ResumableProcessRunner } from "./resumable-process/resumable-process.runner";
import { ToolbarItemsScraper } from "../scraping/bid.cars/toolbarItems/toolbarItems.scraper";
import ToolbarItemsSaver from "../scraping/bid.cars/toolbarItems/toolbarItems.saver";
import { createBidCarsSearchModalResumableScraperProcessCreationParams } from "../scraping/bid.cars/search/bid-cars-search-model.scraper";
import ServerProcessManager from "./server-process.manager";

@ObjectType("ResumableProcessMirrorScalarsOnly", {})
export class ResumableProcessMirrorScalarsOnly extends OmitType(
  ResumableProcessMirror,
  ["subProcesses", "parentProcess", "_count"] as const,
) {}

@ObjectType("ResumableProcessMirrorIdOnly", {})
export class ResumableProcessMirrorIdOnly extends PickType(
  ResumableProcessMirror,
  ["id"] as const,
) {}

// @ObjectType("ServerProcessMirrorUpdated", {})
// export class ServerProcessMirrorUpdated {
//   @Field((_type) => ServerProcessMirrorChanges, {
//     nullable: false,
//   })
//   updatedFields!: ServerProcessMirrorChanges;
//
//   @Field((_type) => [String], {
//     nullable: false,
//   })
//   removedFields!: string[];
// }

@Resolver((of) => ResumableProcessMirror)
export class ServerProcessCustomResolver {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pubSub: PubSubService,
    private readonly resumableProcessRunner: ResumableProcessRunner,
    private readonly toolbarItemsScraper: ToolbarItemsScraper,
    private readonly toolbarItemsSaver: ToolbarItemsSaver,
    private readonly serverProcessManager: ServerProcessManager,
  ) {}

  @Subscription((returns) => ResumableProcessMirrorScalarsOnly)
  serverProcessMirrorAdded() {
    return this.pubSub.asyncIterator("serverProcessMirrorAdded");
  }

  @Subscription((returns) => ResumableProcessMirrorScalarsOnly)
  serverProcessMirrorUpdated() {
    return this.pubSub.asyncIterator("serverProcessMirrorUpdated");
  }

  @Subscription((returns) => ResumableProcessMirrorIdOnly)
  serverProcessMirrorDeleted() {
    return this.pubSub.asyncIterator("serverProcessMirrorDeleted");
  }

  @Mutation((returns) => Boolean)
  async pullMakesAndModelsFromBidCars() {
    const toolbarItems = await this.toolbarItemsScraper.scrape();

    await this.toolbarItemsSaver.save(toolbarItems);

    return true;
  }

  @Mutation((returns) => Boolean)
  abortProcess(@Args("id", { type: () => String }) id: string) {
    this.serverProcessManager.abortProcess(id);

    return true;
  }

  @Mutation((returns) => Boolean)
  async resumeProcess(@Args("id", { type: () => String }) id: string) {
    const resumableScraperProcessMirror =
      await this.prisma.resumableProcessMirror.findUnique({
        where: {
          id,
        },
      });

    await this.prisma.resumableProcessMirror.update({
      where: {
        id,
      },
      data: {
        status: Status.pending,
      },
    });

    const abortController = new AbortController();

    this.resumableProcessRunner
      .run(
        // @ts-ignore
        resumableScraperProcessMirror,
        abortController,
      )
      .catch((error) => console.log(error));

    return true;
  }

  @Mutation((returns) => Boolean)
  async runBidCarsSearch() {
    const p = createBidCarsSearchModalResumableScraperProcessCreationParams({
      // makeName: "Acura", // "BMW",
      // modelName: "Integra", // "3 Series",
      makeName: "BMW",
      modelName: "3 Series",
      key: "",
      yearRange: {
        targetFrom: 1900,
        targetUntil: 2022,
      },
      odometerFallbackRange: {
        from: 0,
        targetFrom: 10000,
        targetUntil: 60000,
        until: 250000,
      },
    });

    const bidCarsSearchModelResumableScraperProcessMirror =
      await this.prisma.resumableProcessMirror.create({
        data: {
          type: p.type,
          status: Status.pending,
          props: p.props,
          state: p.initialState,
        },
      });

    const abortController = new AbortController();

    this.resumableProcessRunner
      .run(
        // @ts-ignore
        bidCarsSearchModelResumableScraperProcessMirror,
        abortController,
      )
      .catch((error) => console.log(error));

    return true;
  }
}
