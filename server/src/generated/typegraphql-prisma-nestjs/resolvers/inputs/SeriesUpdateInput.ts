import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ModelUpdateOneRequiredWithoutSeriesesNestedInput } from "../inputs/ModelUpdateOneRequiredWithoutSeriesesNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { VehicleUpdateManyWithoutSeriesNestedInput } from "../inputs/VehicleUpdateManyWithoutSeriesNestedInput";

@InputType("SeriesUpdateInput", {})
export class SeriesUpdateInput {
  @Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  minYear?: IntFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  maxYear?: IntFieldUpdateOperationsInput | undefined;

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

  @Field(_type => ModelUpdateOneRequiredWithoutSeriesesNestedInput, {
    nullable: true
  })
  model?: ModelUpdateOneRequiredWithoutSeriesesNestedInput | undefined;

  @Field(_type => VehicleUpdateManyWithoutSeriesNestedInput, {
    nullable: true
  })
  vehicles?: VehicleUpdateManyWithoutSeriesNestedInput | undefined;
}
