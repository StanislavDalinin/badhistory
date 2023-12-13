import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("LotCountAggregate", {})
export class LotCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  auction!: number;

  @Field(_type => Int, {
    nullable: false
  })
  lotNumber!: number;

  @Field(_type => Int, {
    nullable: false
  })
  sellingBranch!: number;

  @Field(_type => Int, {
    nullable: false
  })
  saleLocation!: number;

  @Field(_type => Int, {
    nullable: false
  })
  location!: number;

  @Field(_type => Int, {
    nullable: false
  })
  auctionDateTime!: number;

  @Field(_type => Int, {
    nullable: false
  })
  seller!: number;

  @Field(_type => Int, {
    nullable: false
  })
  preAccidentValue!: number;

  @Field(_type => Int, {
    nullable: false
  })
  actualCashValue!: number;

  @Field(_type => Int, {
    nullable: false
  })
  estimatedRepairCost!: number;

  @Field(_type => Int, {
    nullable: false
  })
  lastPreBid!: number;

  @Field(_type => Int, {
    nullable: false
  })
  finalBid!: number;

  @Field(_type => Int, {
    nullable: false
  })
  saleStatus!: number;

  @Field(_type => Int, {
    nullable: false
  })
  titleType!: number;

  @Field(_type => Int, {
    nullable: false
  })
  titleBrand!: number;

  @Field(_type => Int, {
    nullable: false
  })
  titleNotes!: number;

  @Field(_type => Int, {
    nullable: false
  })
  primaryDamage!: number;

  @Field(_type => Int, {
    nullable: false
  })
  secondaryDamage!: number;

  @Field(_type => Int, {
    nullable: false
  })
  loss!: number;

  @Field(_type => Int, {
    nullable: false
  })
  startCode!: number;

  @Field(_type => Int, {
    nullable: false
  })
  highlights!: number;

  @Field(_type => Int, {
    nullable: false
  })
  key!: number;

  @Field(_type => Int, {
    nullable: false
  })
  odometer!: number;

  @Field(_type => Int, {
    nullable: false
  })
  engine!: number;

  @Field(_type => Int, {
    nullable: false
  })
  fuelType!: number;

  @Field(_type => Int, {
    nullable: false
  })
  transmission!: number;

  @Field(_type => Int, {
    nullable: false
  })
  drivelineType!: number;

  @Field(_type => Int, {
    nullable: false
  })
  interiorColor!: number;

  @Field(_type => Int, {
    nullable: false
  })
  exteriorColor!: number;

  @Field(_type => Int, {
    nullable: false
  })
  buyNowPrice!: number;

  @Field(_type => Int, {
    nullable: false
  })
  bodyStyle!: number;

  @Field(_type => Int, {
    nullable: false
  })
  airbagsStatus!: number;

  @Field(_type => Int, {
    nullable: false
  })
  cylinders!: number;

  @Field(_type => Int, {
    nullable: false
  })
  manufacturedIn!: number;

  @Field(_type => Int, {
    nullable: false
  })
  sourceLastUpdated!: number;

  @Field(_type => Int, {
    nullable: false
  })
  vehicleId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  deleted!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
