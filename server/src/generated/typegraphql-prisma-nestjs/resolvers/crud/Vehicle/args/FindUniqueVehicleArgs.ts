import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleWhereUniqueInput } from "../../../inputs/VehicleWhereUniqueInput";

@ArgsType()
export class FindUniqueVehicleArgs {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;
}
