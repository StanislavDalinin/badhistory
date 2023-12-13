import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateWithoutVehicleTypeInput } from "../inputs/VehicleCreateWithoutVehicleTypeInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleCreateOrConnectWithoutVehicleTypeInput", {})
export class VehicleCreateOrConnectWithoutVehicleTypeInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleCreateWithoutVehicleTypeInput, {
    nullable: false
  })
  create!: VehicleCreateWithoutVehicleTypeInput;
}
