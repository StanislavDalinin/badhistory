import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeUpdateManyMutationInput } from "../../../inputs/VehicleTypeUpdateManyMutationInput";
import { VehicleTypeWhereInput } from "../../../inputs/VehicleTypeWhereInput";

@ArgsType()
export class UpdateManyVehicleTypeArgs {
  @Field(_type => VehicleTypeUpdateManyMutationInput, {
    nullable: false
  })
  data!: VehicleTypeUpdateManyMutationInput;

  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  where?: VehicleTypeWhereInput | undefined;
}
