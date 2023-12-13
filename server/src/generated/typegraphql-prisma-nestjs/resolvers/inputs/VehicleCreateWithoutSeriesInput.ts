import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotCreateNestedManyWithoutVehicleInput } from "../inputs/LotCreateNestedManyWithoutVehicleInput";
import { ModelCreateNestedOneWithoutVehiclesInput } from "../inputs/ModelCreateNestedOneWithoutVehiclesInput";
import { VehicleTypeCreateNestedOneWithoutVehicleInput } from "../inputs/VehicleTypeCreateNestedOneWithoutVehicleInput";
import { VehicleUnprocessedCreateEnvelopeInput } from "../inputs/VehicleUnprocessedCreateEnvelopeInput";

@InputType("VehicleCreateWithoutSeriesInput", {})
export class VehicleCreateWithoutSeriesInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  vin?: string | undefined;

  @Field(_type => Int, {
    nullable: false
  })
  year!: number;

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

  @Field(_type => VehicleUnprocessedCreateEnvelopeInput, {
    nullable: false
  })
  unprocessed!: VehicleUnprocessedCreateEnvelopeInput;

  @Field(_type => ModelCreateNestedOneWithoutVehiclesInput, {
    nullable: false
  })
  model!: ModelCreateNestedOneWithoutVehiclesInput;

  @Field(_type => VehicleTypeCreateNestedOneWithoutVehicleInput, {
    nullable: true
  })
  vehicleType?: VehicleTypeCreateNestedOneWithoutVehicleInput | undefined;

  @Field(_type => LotCreateNestedManyWithoutVehicleInput, {
    nullable: true
  })
  lots?: LotCreateNestedManyWithoutVehicleInput | undefined;
}
