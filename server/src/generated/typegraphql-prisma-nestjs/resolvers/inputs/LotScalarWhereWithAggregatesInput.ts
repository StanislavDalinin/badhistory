import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumAuctionWithAggregatesFilter } from "../inputs/EnumAuctionWithAggregatesFilter";
import { FloatNullableWithAggregatesFilter } from "../inputs/FloatNullableWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("LotScalarWhereWithAggregatesInput", {})
export class LotScalarWhereWithAggregatesInput {
  @Field(_type => [LotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: LotScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [LotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: LotScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [LotScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: LotScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => EnumAuctionWithAggregatesFilter, {
    nullable: true
  })
  auction?: EnumAuctionWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  lotNumber?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  sellingBranch?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  saleLocation?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  location?: StringWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  auctionDateTime?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  seller?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  preAccidentValue?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  actualCashValue?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  estimatedRepairCost?: StringWithAggregatesFilter | undefined;

  @Field(_type => FloatNullableWithAggregatesFilter, {
    nullable: true
  })
  lastPreBid?: FloatNullableWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  finalBid?: IntNullableWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  saleStatus?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  titleType?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  titleBrand?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  titleNotes?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  primaryDamage?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  secondaryDamage?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  loss?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  startCode?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  highlights?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  key?: StringWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  odometer?: IntWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  engine?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  fuelType?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  transmission?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  drivelineType?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  interiorColor?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  exteriorColor?: StringWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  buyNowPrice?: IntNullableWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  bodyStyle?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  airbagsStatus?: StringWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  cylinders?: IntNullableWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  manufacturedIn?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  sourceLastUpdated?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  vehicleId?: StringWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  deleted?: DateTimeNullableWithAggregatesFilter | undefined;
}
