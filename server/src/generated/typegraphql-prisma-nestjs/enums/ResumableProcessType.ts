import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum ResumableProcessType {
  bidCarsSearchScraper = "bidCarsSearchScraper",
  bidCarsSearchMakeScraper = "bidCarsSearchMakeScraper",
  bidCarsSearchModelScraper = "bidCarsSearchModelScraper",
  bidCarsSearchOdometerFallbackScraper = "bidCarsSearchOdometerFallbackScraper",
  bidCarsSearchResultScraper = "bidCarsSearchResultScraper",
  bidCarsSearchResultPageScraper = "bidCarsSearchResultPageScraper"
}
registerEnumType(ResumableProcessType, {
  name: "ResumableProcessType",
  description: undefined,
});
