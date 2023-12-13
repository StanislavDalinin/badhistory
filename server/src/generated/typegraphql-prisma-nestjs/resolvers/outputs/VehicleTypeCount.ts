import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCountVehicleArgs } from "./args/VehicleTypeCountVehicleArgs";

@ObjectType("VehicleTypeCount", {})
export class VehicleTypeCount {
  Vehicle!: number;

  @Field(_type => Int, {
    name: "Vehicle",
    nullable: false
  })
  getVehicle(@Root() root: VehicleTypeCount, @Args() args: VehicleTypeCountVehicleArgs): number {
    return root.Vehicle;
  }
}
