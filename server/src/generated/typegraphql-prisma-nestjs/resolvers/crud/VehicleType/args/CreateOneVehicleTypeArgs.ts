import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeCreateInput } from "../../../inputs/VehicleTypeCreateInput";

@ArgsType()
export class CreateOneVehicleTypeArgs {
  @Field(_type => VehicleTypeCreateInput, {
    nullable: false
  })
  data!: VehicleTypeCreateInput;
}
