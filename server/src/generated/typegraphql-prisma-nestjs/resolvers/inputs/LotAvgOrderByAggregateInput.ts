import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@InputType("LotAvgOrderByAggregateInput", {})
export class LotAvgOrderByAggregateInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  lotNumber?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  lastPreBid?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  finalBid?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  odometer?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  buyNowPrice?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  cylinders?: "asc" | "desc" | undefined;
}
