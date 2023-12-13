import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { SeriesUpdateManyWithoutModelNestedInput } from "../inputs/SeriesUpdateManyWithoutModelNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VehicleUpdateManyWithoutModelNestedInput } from "../inputs/VehicleUpdateManyWithoutModelNestedInput";

@InputType("ModelUpdateWithoutMakeInput", {})
export class ModelUpdateWithoutMakeInput {
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

  @Field(_type => VehicleUpdateManyWithoutModelNestedInput, {
    nullable: true
  })
  vehicles?: VehicleUpdateManyWithoutModelNestedInput | undefined;

  @Field(_type => SeriesUpdateManyWithoutModelNestedInput, {
    nullable: true
  })
  serieses?: SeriesUpdateManyWithoutModelNestedInput | undefined;
}
