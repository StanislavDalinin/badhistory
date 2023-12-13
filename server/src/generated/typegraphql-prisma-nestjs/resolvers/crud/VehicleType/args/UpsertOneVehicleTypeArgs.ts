import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeCreateInput } from "../../../inputs/VehicleTypeCreateInput";
import { VehicleTypeUpdateInput } from "../../../inputs/VehicleTypeUpdateInput";
import { VehicleTypeWhereUniqueInput } from "../../../inputs/VehicleTypeWhereUniqueInput";

@ArgsType()
export class UpsertOneVehicleTypeArgs {
  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleTypeWhereUniqueInput;

  @Field(_type => VehicleTypeCreateInput, {
    nullable: false
  })
  create!: VehicleTypeCreateInput;

  @Field(_type => VehicleTypeUpdateInput, {
    nullable: false
  })
  update!: VehicleTypeUpdateInput;
}
