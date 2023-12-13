import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Auction } from "../../enums/Auction";

@ObjectType("LotMaxAggregate", {})
export class LotMaxAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @Field(_type => Auction, {
    nullable: true
  })
  auction!: "iaai" | "copart" | null;

  @Field(_type => Int, {
    nullable: true
  })
  lotNumber!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  sellingBranch!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  saleLocation!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @Field(_type => Date, {
    nullable: true
  })
  auctionDateTime!: Date | null;

  @Field(_type => String, {
    nullable: true
  })
  seller!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  preAccidentValue!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  actualCashValue!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  estimatedRepairCost!: string | null;

  @Field(_type => Float, {
    nullable: true
  })
  lastPreBid!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  finalBid!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  saleStatus!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  titleType!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  titleBrand!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  titleNotes!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  primaryDamage!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  secondaryDamage!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  loss!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  startCode!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  highlights!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  key!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  odometer!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  engine!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  fuelType!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  transmission!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  drivelineType!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  interiorColor!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  exteriorColor!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  buyNowPrice!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  bodyStyle!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  airbagsStatus!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  cylinders!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  manufacturedIn!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  sourceLastUpdated!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  vehicleId!: string | null;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;
}
