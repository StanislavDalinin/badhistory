import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeUpdateInput } from "../../../inputs/VehicleTypeUpdateInput";
import { VehicleTypeWhereUniqueInput } from "../../../inputs/VehicleTypeWhereUniqueInput";

@ArgsType()
export class UpdateOneVehicleTypeArgs {
  @Field(_type => VehicleTypeUpdateInput, {
    nullable: false
  })
  data!: VehicleTypeUpdateInput;

  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleTypeWhereUniqueInput;
}
