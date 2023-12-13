import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotOrderByWithAggregationInput } from "../../../inputs/LotOrderByWithAggregationInput";
import { LotScalarWhereWithAggregatesInput } from "../../../inputs/LotScalarWhereWithAggregatesInput";
import { LotWhereInput } from "../../../inputs/LotWhereInput";
import { LotScalarFieldEnum } from "../../../../enums/LotScalarFieldEnum";

@ArgsType()
export class GroupByLotArgs {
  @Field(_type => LotWhereInput, {
    nullable: true
  })
  where?: LotWhereInput | undefined;

  @Field(_type => [LotOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: LotOrderByWithAggregationInput[] | undefined;

  @Field(_type => [LotScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "auction" | "lotNumber" | "sellingBranch" | "saleLocation" | "location" | "auctionDateTime" | "seller" | "preAccidentValue" | "actualCashValue" | "estimatedRepairCost" | "lastPreBid" | "finalBid" | "saleStatus" | "titleType" | "titleBrand" | "titleNotes" | "primaryDamage" | "secondaryDamage" | "loss" | "startCode" | "highlights" | "key" | "odometer" | "engine" | "fuelType" | "transmission" | "drivelineType" | "interiorColor" | "exteriorColor" | "buyNowPrice" | "bodyStyle" | "airbagsStatus" | "cylinders" | "manufacturedIn" | "sourceLastUpdated" | "vehicleId" | "createdAt" | "updatedAt" | "deleted">;

  @Field(_type => LotScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: LotScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
