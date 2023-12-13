import { Module } from "@nestjs/common";
import { BidCarsSearchResumableScraperProcessService } from "./bid-cars-search.scraper";
import { BidCarsSearchMakeResumableScraperProcessService } from "./bid-cars-search-make.scraper";
import { BidCarsSearchModelResumableScraperProcessService } from "./bid-cars-search-model.scraper";
import { BidCarsSearchResultResumableScraperProcessService } from "./bid-cars-search-result.scraper";
import { BidCarsSearchResultPageResumableScraperProcessService } from "./bid-cars-search-result-page-resumable-scraper-process.service";
import SearchResponseItemSaveService from "./search-response-item-save.service";
import { PrismaService } from "../../../prisma.service";
import ContentLoadModule from "../../content-load/content-load.module";
import AjvModule from "../../ajv/ajv.module";
import { SearchResponseItemCheckService } from "./search-response-item-check.service";
import { BidCarsSearchOdometerFallbackResumableScraperProcessService } from "./bid-cars-search-odometer-fallback.scraper";

@Module({
  imports: [AjvModule, ContentLoadModule],
  providers: [
    BidCarsSearchResumableScraperProcessService,
    BidCarsSearchMakeResumableScraperProcessService,
    BidCarsSearchModelResumableScraperProcessService,
    BidCarsSearchOdometerFallbackResumableScraperProcessService,
    BidCarsSearchResultResumableScraperProcessService,
    BidCarsSearchResultPageResumableScraperProcessService,
    SearchResponseItemSaveService,
    SearchResponseItemCheckService,
    PrismaService,
  ],
  exports: [
    BidCarsSearchResumableScraperProcessService,
    BidCarsSearchMakeResumableScraperProcessService,
    BidCarsSearchModelResumableScraperProcessService,
    BidCarsSearchOdometerFallbackResumableScraperProcessService,
    BidCarsSearchResultResumableScraperProcessService,
    BidCarsSearchResultPageResumableScraperProcessService,
  ],
})
export default class BidCarsSearchModule {}
