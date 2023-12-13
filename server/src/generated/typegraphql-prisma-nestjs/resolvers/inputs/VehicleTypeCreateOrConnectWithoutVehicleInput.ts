import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCreateWithoutVehicleInput } from "../inputs/VehicleTypeCreateWithoutVehicleInput";
import { VehicleTypeWhereUniqueInput } from "../inputs/VehicleTypeWhereUniqueInput";

@InputType("VehicleTypeCreateOrConnectWithoutVehicleInput", {})
export class VehicleTypeCreateOrConnectWithoutVehicleInput {
  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleTypeWhereUniqueInput;

  @Field(_type => VehicleTypeCreateWithoutVehicleInput, {
    nullable: false
  })
  create!: VehicleTypeCreateWithoutVehicleInput;
}
