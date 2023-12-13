import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumResumableProcessTypeFilter } from "../inputs/NestedEnumResumableProcessTypeFilter";
import { ResumableProcessType } from "../../enums/ResumableProcessType";

@InputType("EnumResumableProcessTypeFilter", {})
export class EnumResumableProcessTypeFilter {
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

  @Field(_type => NestedEnumResumableProcessTypeFilter, {
    nullable: true
  })
  not?: NestedEnumResumableProcessTypeFilter | undefined;
}
