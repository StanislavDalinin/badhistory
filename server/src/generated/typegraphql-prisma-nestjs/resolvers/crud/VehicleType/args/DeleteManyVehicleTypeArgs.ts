import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeWhereInput } from "../../../inputs/VehicleTypeWhereInput";

@ArgsType()
export class DeleteManyVehicleTypeArgs {
  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  where?: VehicleTypeWhereInput | undefined;
}
