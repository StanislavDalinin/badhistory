import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotOrderByWithRelationInput } from "../../../inputs/LotOrderByWithRelationInput";
import { LotWhereInput } from "../../../inputs/LotWhereInput";
import { LotWhereUniqueInput } from "../../../inputs/LotWhereUniqueInput";
import { LotScalarFieldEnum } from "../../../../enums/LotScalarFieldEnum";

@ArgsType()
export class FindFirstLotOrThrowArgs {
  @Field(_type => LotWhereInput, {
    nullable: true
  })
  where?: LotWhereInput | undefined;

  @Field(_type => [LotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LotOrderByWithRelationInput[] | undefined;

  @Field(_type => LotWhereUniqueInput, {
    nullable: true
  })
  cursor?: LotWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [LotScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "auction" | "lotNumber" | "sellingBranch" | "saleLocation" | "location" | "auctionDateTime" | "seller" | "preAccidentValue" | "actualCashValue" | "estimatedRepairCost" | "lastPreBid" | "finalBid" | "saleStatus" | "titleType" | "titleBrand" | "titleNotes" | "primaryDamage" | "secondaryDamage" | "loss" | "startCode" | "highlights" | "key" | "odometer" | "engine" | "fuelType" | "transmission" | "drivelineType" | "interiorColor" | "exteriorColor" | "buyNowPrice" | "bodyStyle" | "airbagsStatus" | "cylinders" | "manufacturedIn" | "sourceLastUpdated" | "vehicleId" | "createdAt" | "updatedAt" | "deleted"> | undefined;
}
