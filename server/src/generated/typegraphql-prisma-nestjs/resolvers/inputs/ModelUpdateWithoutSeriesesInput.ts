import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MakeUpdateOneRequiredWithoutModelsNestedInput } from "../inputs/MakeUpdateOneRequiredWithoutModelsNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VehicleUpdateManyWithoutModelNestedInput } from "../inputs/VehicleUpdateManyWithoutModelNestedInput";

@InputType("ModelUpdateWithoutSeriesesInput", {})
export class ModelUpdateWithoutSeriesesInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

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

  @Field(_type => MakeUpdateOneRequiredWithoutModelsNestedInput, {
    nullable: true
  })
  make?: MakeUpdateOneRequiredWithoutModelsNestedInput | undefined;

  @Field(_type => VehicleUpdateManyWithoutModelNestedInput, {
    nullable: true
  })
  vehicles?: VehicleUpdateManyWithoutModelNestedInput | undefined;
}
