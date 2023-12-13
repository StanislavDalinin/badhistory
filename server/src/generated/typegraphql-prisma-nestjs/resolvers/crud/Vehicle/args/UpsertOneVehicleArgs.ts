import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleCreateInput } from "../../../inputs/VehicleCreateInput";
import { VehicleUpdateInput } from "../../../inputs/VehicleUpdateInput";
import { VehicleWhereUniqueInput } from "../../../inputs/VehicleWhereUniqueInput";

@ArgsType()
export class UpsertOneVehicleArgs {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleCreateInput, {
    nullable: false
  })
  create!: VehicleCreateInput;

  @Field(_type => VehicleUpdateInput, {
    nullable: false
  })
  update!: VehicleUpdateInput;
}
