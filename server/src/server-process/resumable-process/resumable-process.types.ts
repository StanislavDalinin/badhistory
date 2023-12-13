import { BidCarsSearchResumableScraperProcessMirror } from "src/scraping/bid.cars/search/bid-cars-search.scraper";
import { BidCarsSearchMakeResumableScraperProcessMirror } from "../../scraping/bid.cars/search/bid-cars-search-make.scraper";
import { BidCarsSearchModelResumableScraperProcessMirror } from "../../scraping/bid.cars/search/bid-cars-search-model.scraper";
import { BidCarsSearchResultResumableScraperProcessMirror } from "../../scraping/bid.cars/search/bid-cars-search-result.scraper";
import { BidCarsSearchResultPageResumableScraperProcessMirror } from "../../scraping/bid.cars/search/bid-cars-search-result-page-resumable-scraper-process.service";
import { BidCarsSearchOdometerFallbackResumableScraperProcessMirror } from "../../scraping/bid.cars/search/bid-cars-search-odometer-fallback.scraper";

export type ResumableProcessMirror =
  | BidCarsSearchResumableScraperProcessMirror
  | BidCarsSearchMakeResumableScraperProcessMirror
  | BidCarsSearchModelResumableScraperProcessMirror
  | BidCarsSearchOdometerFallbackResumableScraperProcessMirror
  | BidCarsSearchResultResumableScraperProcessMirror
  | BidCarsSearchResultPageResumableScraperProcessMirror;

export interface ResumableProcessApi<T extends ResumableProcessMirror> {
  state: T["state"];
  fork: ForkResumableProcess;
}

interface ForkResumableProcess
  extends ForkResumableProcessOverload<BidCarsSearchResumableScraperProcessMirror>,
    ForkResumableProcessOverload<BidCarsSearchMakeResumableScraperProcessMirror>,
    ForkResumableProcessOverload<BidCarsSearchModelResumableScraperProcessMirror>,
    ForkResumableProcessOverload<BidCarsSearchOdometerFallbackResumableScraperProcessMirror>,
    ForkResumableProcessOverload<BidCarsSearchResultResumableScraperProcessMirror>,
    ForkResumableProcessOverload<BidCarsSearchResultPageResumableScraperProcessMirror> {}

interface ForkResumableProcessOverload<T extends ResumableProcessMirror> {
  (params: ResumableProcessCreationParams<T>): Promise<T["result"]>;
}

export type ResumableProcessCreationParams<T extends ResumableProcessMirror> =
  Pick<T, "type" | "props"> & {
    key: string;
    initialState: T["state"];
  };
