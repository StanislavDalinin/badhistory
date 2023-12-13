import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleTypeOrderByWithAggregationInput } from "../../../inputs/VehicleTypeOrderByWithAggregationInput";
import { VehicleTypeScalarWhereWithAggregatesInput } from "../../../inputs/VehicleTypeScalarWhereWithAggregatesInput";
import { VehicleTypeWhereInput } from "../../../inputs/VehicleTypeWhereInput";
import { VehicleTypeScalarFieldEnum } from "../../../../enums/VehicleTypeScalarFieldEnum";

@ArgsType()
export class GroupByVehicleTypeArgs {
  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  where?: VehicleTypeWhereInput | undefined;

  @Field(_type => [VehicleTypeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VehicleTypeOrderByWithAggregationInput[] | undefined;

  @Field(_type => [VehicleTypeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt" | "deleted">;

  @Field(_type => VehicleTypeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VehicleTypeScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
