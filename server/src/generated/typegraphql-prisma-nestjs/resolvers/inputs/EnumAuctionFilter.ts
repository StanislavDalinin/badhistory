import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumAuctionFilter } from "../inputs/NestedEnumAuctionFilter";
import { Auction } from "../../enums/Auction";

@InputType("EnumAuctionFilter", {})
export class EnumAuctionFilter {
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

  @Field(_type => NestedEnumAuctionFilter, {
    nullable: true
  })
  not?: NestedEnumAuctionFilter | undefined;
}
