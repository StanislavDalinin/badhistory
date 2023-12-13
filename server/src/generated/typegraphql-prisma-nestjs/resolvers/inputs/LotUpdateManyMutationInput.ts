import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAuctionFieldUpdateOperationsInput } from "../inputs/EnumAuctionFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LotUnprocessedUpdateEnvelopeInput } from "../inputs/LotUnprocessedUpdateEnvelopeInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("LotUpdateManyMutationInput", {})
export class LotUpdateManyMutationInput {
  @Field(_type => EnumAuctionFieldUpdateOperationsInput, {
    nullable: true
  })
  auction?: EnumAuctionFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  lotNumber?: IntFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sellingBranch?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  saleLocation?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  location?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  auctionDateTime?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  seller?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  preAccidentValue?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  actualCashValue?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  estimatedRepairCost?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableFloatFieldUpdateOperationsInput, {
    nullable: true
  })
  lastPreBid?: NullableFloatFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  finalBid?: NullableIntFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  saleStatus?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  titleType?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  titleBrand?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  titleNotes?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  primaryDamage?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  secondaryDamage?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  loss?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  startCode?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  highlights?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  key?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  odometer?: IntFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  engine?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  fuelType?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  transmission?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  drivelineType?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  interiorColor?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  exteriorColor?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  buyNowPrice?: NullableIntFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  bodyStyle?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  airbagsStatus?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  cylinders?: NullableIntFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  manufacturedIn?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  sourceLastUpdated?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  deleted?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => LotUnprocessedUpdateEnvelopeInput, {
    nullable: true
  })
  unprocessed?: LotUnprocessedUpdateEnvelopeInput | undefined;
}
