import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotUnprocessedCreateEnvelopeInput } from "../inputs/LotUnprocessedCreateEnvelopeInput";
import { Auction } from "../../enums/Auction";

@InputType("LotCreateWithoutVehicleInput", {})
export class LotCreateWithoutVehicleInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => Auction, {
    nullable: false
  })
  auction!: "iaai" | "copart";

  @Field(_type => Int, {
    nullable: false
  })
  lotNumber!: number;

  @Field(_type => String, {
    nullable: false
  })
  sellingBranch!: string;

  @Field(_type => String, {
    nullable: false
  })
  saleLocation!: string;

  @Field(_type => String, {
    nullable: false
  })
  location!: string;

  @Field(_type => Date, {
    nullable: false
  })
  auctionDateTime!: Date;

  @Field(_type => String, {
    nullable: false
  })
  seller!: string;

  @Field(_type => String, {
    nullable: false
  })
  preAccidentValue!: string;

  @Field(_type => String, {
    nullable: false
  })
  actualCashValue!: string;

  @Field(_type => String, {
    nullable: false
  })
  estimatedRepairCost!: string;

  @Field(_type => Float, {
    nullable: true
  })
  lastPreBid?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  finalBid?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  saleStatus!: string;

  @Field(_type => String, {
    nullable: false
  })
  titleType!: string;

  @Field(_type => String, {
    nullable: false
  })
  titleBrand!: string;

  @Field(_type => String, {
    nullable: false
  })
  titleNotes!: string;

  @Field(_type => String, {
    nullable: false
  })
  primaryDamage!: string;

  @Field(_type => String, {
    nullable: false
  })
  secondaryDamage!: string;

  @Field(_type => String, {
    nullable: false
  })
  loss!: string;

  @Field(_type => String, {
    nullable: false
  })
  startCode!: string;

  @Field(_type => String, {
    nullable: false
  })
  highlights!: string;

  @Field(_type => String, {
    nullable: false
  })
  key!: string;

  @Field(_type => Int, {
    nullable: false
  })
  odometer!: number;

  @Field(_type => String, {
    nullable: false
  })
  engine!: string;

  @Field(_type => String, {
    nullable: false
  })
  fuelType!: string;

  @Field(_type => String, {
    nullable: false
  })
  transmission!: string;

  @Field(_type => String, {
    nullable: false
  })
  drivelineType!: string;

  @Field(_type => String, {
    nullable: false
  })
  interiorColor!: string;

  @Field(_type => String, {
    nullable: false
  })
  exteriorColor!: string;

  @Field(_type => Int, {
    nullable: true
  })
  buyNowPrice?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  bodyStyle!: string;

  @Field(_type => String, {
    nullable: false
  })
  airbagsStatus!: string;

  @Field(_type => Int, {
    nullable: true
  })
  cylinders?: number | undefined;

  @Field(_type => String, {
    nullable: false
  })
  manufacturedIn!: string;

  @Field(_type => String, {
    nullable: false
  })
  sourceLastUpdated!: string;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  deleted?: Date | undefined;

  @Field(_type => LotUnprocessedCreateEnvelopeInput, {
    nullable: false
  })
  unprocessed!: LotUnprocessedCreateEnvelopeInput;
}
