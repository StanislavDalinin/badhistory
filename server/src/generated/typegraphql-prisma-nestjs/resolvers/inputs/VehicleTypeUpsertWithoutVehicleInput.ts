import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCreateWithoutVehicleInput } from "../inputs/VehicleTypeCreateWithoutVehicleInput";
import { VehicleTypeUpdateWithoutVehicleInput } from "../inputs/VehicleTypeUpdateWithoutVehicleInput";
import { VehicleTypeWhereInput } from "../inputs/VehicleTypeWhereInput";

@InputType("VehicleTypeUpsertWithoutVehicleInput", {})
export class VehicleTypeUpsertWithoutVehicleInput {
  @Field(_type => VehicleTypeUpdateWithoutVehicleInput, {
    nullable: false
  })
  update!: VehicleTypeUpdateWithoutVehicleInput;

  @Field(_type => VehicleTypeCreateWithoutVehicleInput, {
    nullable: false
  })
  create!: VehicleTypeCreateWithoutVehicleInput;

  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  where?: VehicleTypeWhereInput | undefined;
}
