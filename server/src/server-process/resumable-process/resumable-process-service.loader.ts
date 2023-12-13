import { ResumableProcessMirror } from "./resumable-process.types";
import { ResumableProcessService } from "./resumable-process-service.interface";
import { ResumableProcessType } from "@prisma/client";
import { BidCarsSearchMakeResumableScraperProcessService } from "../../scraping/bid.cars/search/bid-cars-search-make.scraper";
import { BidCarsSearchModelResumableScraperProcessService } from "../../scraping/bid.cars/search/bid-cars-search-model.scraper";
import { BidCarsSearchResultResumableScraperProcessService } from "../../scraping/bid.cars/search/bid-cars-search-result.scraper";
import { BidCarsSearchResultPageResumableScraperProcessService } from "../../scraping/bid.cars/search/bid-cars-search-result-page-resumable-scraper-process.service";
import { BidCarsSearchResumableScraperProcessService } from "../../scraping/bid.cars/search/bid-cars-search.scraper";
import { Injectable } from "@nestjs/common";
import { BidCarsSearchOdometerFallbackResumableScraperProcessService } from "../../scraping/bid.cars/search/bid-cars-search-odometer-fallback.scraper";

@Injectable()
export class ResumableProcessServiceLoader {
  constructor(
    private readonly bidCarsSearchResumableScraperProcessService: BidCarsSearchResumableScraperProcessService,
    private readonly bidCarsSearchMakeResumableScraperProcessService: BidCarsSearchMakeResumableScraperProcessService,
    private readonly bidCarsSearchModelResumableScraperProcessService: BidCarsSearchModelResumableScraperProcessService,
    private readonly bidCarsSearchOdometerFallbackResumableScraperProcessService: BidCarsSearchOdometerFallbackResumableScraperProcessService,
    private readonly bidCarsSearchResultResumableScraperProcessService: BidCarsSearchResultResumableScraperProcessService,
    private readonly bidCarsSearchResultPageResumableScraperProcessService: BidCarsSearchResultPageResumableScraperProcessService,
  ) {}

  // loadBy(
  //   type: typeof ResumableProcessType.bidCarsSearchScraper,
  // ):
  //   | BidCarsSearchResumableScraperProcessService
  //   | Promise<BidCarsSearchResumableScraperProcessService>;
  // loadBy(
  //   type: typeof ResumableProcessType.bidCarsSearchMakeScraper,
  // ):
  //   | BidCarsSearchMakeResumableScraperProcessService
  //   | Promise<BidCarsSearchMakeResumableScraperProcessService>;
  // loadBy(
  //   type: typeof ResumableProcessType.bidCarsSearchModelScraper,
  // ):
  //   | BidCarsSearchModelResumableScraperProcessService
  //   | Promise<BidCarsSearchModelResumableScraperProcessService>;
  // loadBy(
  //   type: typeof ResumableProcessType.bidCarsSearchResultScraper,
  // ):
  //   | BidCarsSearchResultResumableScraperProcessService
  //   | Promise<BidCarsSearchResultResumableScraperProcessService>;
  // loadBy(
  //   type: typeof ResumableProcessType.bidCarsSearchResultPageScraper,
  // ):
  //   | BidCarsSearchResultPageResumableScraperProcessService
  //   | Promise<BidCarsSearchResultPageResumableScraperProcessService>;
  loadBy(
    type: ResumableProcessType,
  ):
    | ResumableProcessService<ResumableProcessMirror>
    | Promise<ResumableProcessService<ResumableProcessMirror>> {
    switch (type) {
      case ResumableProcessType.bidCarsSearchScraper:
        return this.bidCarsSearchResumableScraperProcessService;
      case ResumableProcessType.bidCarsSearchMakeScraper:
        return this.bidCarsSearchMakeResumableScraperProcessService;
      case ResumableProcessType.bidCarsSearchModelScraper:
        return this.bidCarsSearchModelResumableScraperProcessService;
      case ResumableProcessType.bidCarsSearchOdometerFallbackScraper:
        return this.bidCarsSearchOdometerFallbackResumableScraperProcessService;
      case ResumableProcessType.bidCarsSearchResultScraper:
        return this.bidCarsSearchResultResumableScraperProcessService;
      case ResumableProcessType.bidCarsSearchResultPageScraper:
        return this.bidCarsSearchResultPageResumableScraperProcessService;
    }

    throw new Error();
  }
}
