import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCreateOrConnectWithoutVehicleInput } from "../inputs/VehicleTypeCreateOrConnectWithoutVehicleInput";
import { VehicleTypeCreateWithoutVehicleInput } from "../inputs/VehicleTypeCreateWithoutVehicleInput";
import { VehicleTypeWhereUniqueInput } from "../inputs/VehicleTypeWhereUniqueInput";

@InputType("VehicleTypeCreateNestedOneWithoutVehicleInput", {})
export class VehicleTypeCreateNestedOneWithoutVehicleInput {
  @Field(_type => VehicleTypeCreateWithoutVehicleInput, {
    nullable: true
  })
  create?: VehicleTypeCreateWithoutVehicleInput | undefined;

  @Field(_type => VehicleTypeCreateOrConnectWithoutVehicleInput, {
    nullable: true
  })
  connectOrCreate?: VehicleTypeCreateOrConnectWithoutVehicleInput | undefined;

  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: VehicleTypeWhereUniqueInput | undefined;
}
