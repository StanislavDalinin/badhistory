import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleUpdateInput } from "../../../inputs/VehicleUpdateInput";
import { VehicleWhereUniqueInput } from "../../../inputs/VehicleWhereUniqueInput";

@ArgsType()
export class UpdateOneVehicleArgs {
  @Field(_type => VehicleUpdateInput, {
    nullable: false
  })
  data!: VehicleUpdateInput;

  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;
}
