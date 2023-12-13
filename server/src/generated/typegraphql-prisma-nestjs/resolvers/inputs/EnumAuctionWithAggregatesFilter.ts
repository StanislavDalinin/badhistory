import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAuctionFilter } from "../inputs/NestedEnumAuctionFilter";
import { NestedEnumAuctionWithAggregatesFilter } from "../inputs/NestedEnumAuctionWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Auction } from "../../enums/Auction";

@InputType("EnumAuctionWithAggregatesFilter", {})
export class EnumAuctionWithAggregatesFilter {
  @Field(_type => Auction, {
    nullable: true
  })
  equals?: "iaai" | "copart" | undefined;

  @Field(_type => [Auction], {
    nullable: true
  })
  in?: Array<"iaai" | "copart"> | undefined;

  @Field(_type => [Auction], {
    nullable: true
  })
  notIn?: Array<"iaai" | "copart"> | undefined;

  @Field(_type => NestedEnumAuctionWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumAuctionWithAggregatesFilter | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedEnumAuctionFilter, {
    nullable: true
  })
  _min?: NestedEnumAuctionFilter | undefined;

  @Field(_type => NestedEnumAuctionFilter, {
    nullable: true
  })
  _max?: NestedEnumAuctionFilter | undefined;
}
