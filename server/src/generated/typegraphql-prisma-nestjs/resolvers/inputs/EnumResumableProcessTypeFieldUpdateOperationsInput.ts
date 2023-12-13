import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessType } from "../../enums/ResumableProcessType";

@InputType("EnumResumableProcessTypeFieldUpdateOperationsInput", {})
export class EnumResumableProcessTypeFieldUpdateOperationsInput {
  @Field(_type => ResumableProcessType, {
    nullable: true
  })
  set?: "bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper" | undefined;
}
