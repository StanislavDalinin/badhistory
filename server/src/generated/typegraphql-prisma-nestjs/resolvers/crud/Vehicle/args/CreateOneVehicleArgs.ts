import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleCreateInput } from "../../../inputs/VehicleCreateInput";

@ArgsType()
export class CreateOneVehicleArgs {
  @Field(_type => VehicleCreateInput, {
    nullable: false
  })
  data!: VehicleCreateInput;
}
