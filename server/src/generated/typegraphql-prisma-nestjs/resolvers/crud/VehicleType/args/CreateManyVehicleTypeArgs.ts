import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeCreateManyInput } from "../../../inputs/VehicleTypeCreateManyInput";

@ArgsType()
export class CreateManyVehicleTypeArgs {
  @Field(_type => [VehicleTypeCreateManyInput], {
    nullable: false
  })
  data!: VehicleTypeCreateManyInput[];
}
