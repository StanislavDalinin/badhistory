import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumResumableProcessTypeFilter } from "../inputs/NestedEnumResumableProcessTypeFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { ResumableProcessType } from "../../enums/ResumableProcessType";

@InputType("NestedEnumResumableProcessTypeWithAggregatesFilter", {})
export class NestedEnumResumableProcessTypeWithAggregatesFilter {
  @Field(_type => ResumableProcessType, {
    nullable: true
  })
  equals?: "bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper" | undefined;

  @Field(_type => [ResumableProcessType], {
    nullable: true
  })
  in?: Array<"bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper"> | undefined;

  @Field(_type => [ResumableProcessType], {
    nullable: true
  })
  notIn?: Array<"bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper"> | undefined;

  @Field(_type => NestedEnumResumableProcessTypeWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumResumableProcessTypeWithAggregatesFilter | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedEnumResumableProcessTypeFilter, {
    nullable: true
  })
  _min?: NestedEnumResumableProcessTypeFilter | undefined;

  @Field(_type => NestedEnumResumableProcessTypeFilter, {
    nullable: true
  })
  _max?: NestedEnumResumableProcessTypeFilter | undefined;
}
