import { Module } from "@nestjs/common";
import { PrismaService } from "../../../prisma.service";
import ContentLoadModule from "../../content-load/content-load.module";
import { ToolbarItemsScraper } from "./toolbarItems.scraper";
import ToolbarItemsSaver from "./toolbarItems.saver";
import AjvModule from "src/scraping/ajv/ajv.module";

@Module({
  imports: [AjvModule, ContentLoadModule],
  providers: [ToolbarItemsScraper, ToolbarItemsSaver, PrismaService],
  exports: [ToolbarItemsScraper, ToolbarItemsSaver],
})
export default class BidCarsToolbarItemsModule {}
