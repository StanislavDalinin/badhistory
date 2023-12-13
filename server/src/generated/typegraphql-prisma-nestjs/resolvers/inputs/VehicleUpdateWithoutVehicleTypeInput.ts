import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { LotUpdateManyWithoutVehicleNestedInput } from "../inputs/LotUpdateManyWithoutVehicleNestedInput";
import { ModelUpdateOneRequiredWithoutVehiclesNestedInput } from "../inputs/ModelUpdateOneRequiredWithoutVehiclesNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { SeriesUpdateOneWithoutVehiclesNestedInput } from "../inputs/SeriesUpdateOneWithoutVehiclesNestedInput";
import { VehicleUnprocessedUpdateEnvelopeInput } from "../inputs/VehicleUnprocessedUpdateEnvelopeInput";

@InputType("VehicleUpdateWithoutVehicleTypeInput", {})
export class VehicleUpdateWithoutVehicleTypeInput {
  @Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  vin?: NullableStringFieldUpdateOperationsInput | undefined;

  @Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  year?: IntFieldUpdateOperationsInput | undefined;

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

  @Field(_type => VehicleUnprocessedUpdateEnvelopeInput, {
    nullable: true
  })
  unprocessed?: VehicleUnprocessedUpdateEnvelopeInput | undefined;

  @Field(_type => ModelUpdateOneRequiredWithoutVehiclesNestedInput, {
    nullable: true
  })
  model?: ModelUpdateOneRequiredWithoutVehiclesNestedInput | undefined;

  @Field(_type => SeriesUpdateOneWithoutVehiclesNestedInput, {
    nullable: true
  })
  series?: SeriesUpdateOneWithoutVehiclesNestedInput | undefined;

  @Field(_type => LotUpdateManyWithoutVehicleNestedInput, {
    nullable: true
  })
  lots?: LotUpdateManyWithoutVehicleNestedInput | undefined;
}
