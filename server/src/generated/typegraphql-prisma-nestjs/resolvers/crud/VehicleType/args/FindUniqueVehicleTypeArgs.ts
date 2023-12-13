import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeWhereUniqueInput } from "../../../inputs/VehicleTypeWhereUniqueInput";

@ArgsType()
export class FindUniqueVehicleTypeArgs {
  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleTypeWhereUniqueInput;
}
