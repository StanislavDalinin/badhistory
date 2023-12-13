import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleWhereInput } from "../../inputs/VehicleWhereInput";

@ArgsType()
export class VehicleTypeCountVehicleArgs {
  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  where?: VehicleWhereInput | undefined;
}
