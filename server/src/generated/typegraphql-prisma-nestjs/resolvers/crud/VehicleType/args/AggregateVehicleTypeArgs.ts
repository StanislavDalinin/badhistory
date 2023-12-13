import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeOrderByWithRelationInput } from "../../../inputs/VehicleTypeOrderByWithRelationInput";
import { VehicleTypeWhereInput } from "../../../inputs/VehicleTypeWhereInput";
import { VehicleTypeWhereUniqueInput } from "../../../inputs/VehicleTypeWhereUniqueInput";

@ArgsType()
export class AggregateVehicleTypeArgs {
  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  where?: VehicleTypeWhereInput | undefined;

  @Field(_type => [VehicleTypeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VehicleTypeOrderByWithRelationInput[] | undefined;

  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: true
  })
  cursor?: VehicleTypeWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
