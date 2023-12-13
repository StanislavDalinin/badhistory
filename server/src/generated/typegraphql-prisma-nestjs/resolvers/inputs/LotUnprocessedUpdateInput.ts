import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LotUnprocessedUpdateimgsInput } from "../inputs/LotUnprocessedUpdateimgsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@InputType("LotUnprocessedUpdateInput", {})
export class LotUnprocessedUpdateInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  leftTrans?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  prebidClosedTrans?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  buyNowCloseTime?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @Field(_type => NullableIntFieldUpdateOperationsInput, {
    nullable: true
  })
  soldBefore?: NullableIntFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  status?: IntFieldUpdateOperationsInput | undefined;

  @Field(_type => LotUnprocessedUpdateimgsInput, {
    nullable: true
  })
  imgs?: LotUnprocessedUpdateimgsInput | undefined;
}
