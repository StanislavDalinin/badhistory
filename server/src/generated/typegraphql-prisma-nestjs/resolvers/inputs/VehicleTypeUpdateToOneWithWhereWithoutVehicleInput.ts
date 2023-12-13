import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeUpdateWithoutVehicleInput } from "../inputs/VehicleTypeUpdateWithoutVehicleInput";
import { VehicleTypeWhereInput } from "../inputs/VehicleTypeWhereInput";

@InputType("VehicleTypeUpdateToOneWithWhereWithoutVehicleInput", {})
export class VehicleTypeUpdateToOneWithWhereWithoutVehicleInput {
  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  where?: VehicleTypeWhereInput | undefined;

  @Field(_type => VehicleTypeUpdateWithoutVehicleInput, {
    nullable: false
  })
  data!: VehicleTypeUpdateWithoutVehicleInput;
}
