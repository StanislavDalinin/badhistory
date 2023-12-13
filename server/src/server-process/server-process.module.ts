import { Module } from "@nestjs/common";
import { ServerProcessCustomResolver } from "./server-process.resolver";
import { PrismaService } from "../prisma.service";
import { PubSubService } from "../pub-sub.service";
import ResumableProcessRunnerModule from "./resumable-process/resumable-process-runner.module";
import BidCarsToolbarItemsModule from "../scraping/bid.cars/toolbarItems/bid-cars-toolbar-items.module";

@Module({
  imports: [ResumableProcessRunnerModule, BidCarsToolbarItemsModule],
  providers: [ServerProcessCustomResolver, PrismaService, PubSubService],
  exports: [ServerProcessCustomResolver],
})
export default class ServerProcessModule {}
