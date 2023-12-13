import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotUnprocessedOrderByInput } from "../inputs/LotUnprocessedOrderByInput";
import { VehicleOrderByWithRelationInput } from "../inputs/VehicleOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("LotOrderByWithRelationInput", {})
export class LotOrderByWithRelationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  auction?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  lotNumber?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  sellingBranch?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  saleLocation?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  auctionDateTime?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  seller?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  preAccidentValue?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  actualCashValue?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  estimatedRepairCost?: "asc" | "desc" | undefined;

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
  saleStatus?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  titleType?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  titleBrand?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  titleNotes?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  primaryDamage?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  secondaryDamage?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  loss?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  startCode?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  highlights?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  key?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  odometer?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  engine?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  fuelType?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  transmission?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  drivelineType?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  interiorColor?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  exteriorColor?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  buyNowPrice?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  bodyStyle?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  airbagsStatus?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  cylinders?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  manufacturedIn?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  sourceLastUpdated?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  vehicleId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @Field(_type => LotUnprocessedOrderByInput, {
    nullable: true
  })
  unprocessed?: LotUnprocessedOrderByInput | undefined;

  @Field(_type => VehicleOrderByWithRelationInput, {
    nullable: true
  })
  vehicle?: VehicleOrderByWithRelationInput | undefined;
}
