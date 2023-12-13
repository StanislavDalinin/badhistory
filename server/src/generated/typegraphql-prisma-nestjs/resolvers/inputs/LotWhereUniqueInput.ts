import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumAuctionFilter } from "../inputs/EnumAuctionFilter";
import { FloatNullableFilter } from "../inputs/FloatNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LotAuctionLotNumberCompoundUniqueInput } from "../inputs/LotAuctionLotNumberCompoundUniqueInput";
import { LotUnprocessedCompositeFilter } from "../inputs/LotUnprocessedCompositeFilter";
import { LotWhereInput } from "../inputs/LotWhereInput";
import { StringFilter } from "../inputs/StringFilter";
import { VehicleRelationFilter } from "../inputs/VehicleRelationFilter";

@InputType("LotWhereUniqueInput", {})
export class LotWhereUniqueInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => LotAuctionLotNumberCompoundUniqueInput, {
    nullable: true
  })
  auction_lotNumber?: LotAuctionLotNumberCompoundUniqueInput | undefined;

  @Field(_type => [LotWhereInput], {
    nullable: true
  })
  AND?: LotWhereInput[] | undefined;

  @Field(_type => [LotWhereInput], {
    nullable: true
  })
  OR?: LotWhereInput[] | undefined;

  @Field(_type => [LotWhereInput], {
    nullable: true
  })
  NOT?: LotWhereInput[] | undefined;

  @Field(_type => EnumAuctionFilter, {
    nullable: true
  })
  auction?: EnumAuctionFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  lotNumber?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  sellingBranch?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  saleLocation?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  location?: StringFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  auctionDateTime?: DateTimeFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  seller?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  preAccidentValue?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  actualCashValue?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  estimatedRepairCost?: StringFilter | undefined;

  @Field(_type => FloatNullableFilter, {
    nullable: true
  })
  lastPreBid?: FloatNullableFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  finalBid?: IntNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  saleStatus?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  titleType?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  titleBrand?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  titleNotes?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  primaryDamage?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  secondaryDamage?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  loss?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  startCode?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  highlights?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  key?: StringFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  odometer?: IntFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  engine?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  fuelType?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  transmission?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  drivelineType?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  interiorColor?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  exteriorColor?: StringFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  buyNowPrice?: IntNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  bodyStyle?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  airbagsStatus?: StringFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  cylinders?: IntNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  manufacturedIn?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  sourceLastUpdated?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  vehicleId?: StringFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deleted?: DateTimeNullableFilter | undefined;

  @Field(_type => LotUnprocessedCompositeFilter, {
    nullable: true
  })
  unprocessed?: LotUnprocessedCompositeFilter | undefined;

  @Field(_type => VehicleRelationFilter, {
    nullable: true
  })
  vehicle?: VehicleRelationFilter | undefined;
}
