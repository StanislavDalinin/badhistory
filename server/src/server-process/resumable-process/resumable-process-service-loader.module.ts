import { Module } from "@nestjs/common";
import { ResumableProcessServiceLoader } from "./resumable-process-service.loader";
import BidCarsSearchModule from "../../scraping/bid.cars/search/bid-cars-search.module";

@Module({
  imports: [BidCarsSearchModule],
  providers: [ResumableProcessServiceLoader],
  exports: [ResumableProcessServiceLoader],
})
export default class ResumableProcessServiceLoaderModule {}
