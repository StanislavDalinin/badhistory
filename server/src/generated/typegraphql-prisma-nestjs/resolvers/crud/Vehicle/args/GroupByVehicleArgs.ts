import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleOrderByWithAggregationInput } from "../../../inputs/VehicleOrderByWithAggregationInput";
import { VehicleScalarWhereWithAggregatesInput } from "../../../inputs/VehicleScalarWhereWithAggregatesInput";
import { VehicleWhereInput } from "../../../inputs/VehicleWhereInput";
import { VehicleScalarFieldEnum } from "../../../../enums/VehicleScalarFieldEnum";

@ArgsType()
export class GroupByVehicleArgs {
  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  where?: VehicleWhereInput | undefined;

  @Field(_type => [VehicleOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: VehicleOrderByWithAggregationInput[] | undefined;

  @Field(_type => [VehicleScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "vin" | "modelId" | "seriesId" | "vehicleTypeId" | "year" | "createdAt" | "updatedAt" | "deleted">;

  @Field(_type => VehicleScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: VehicleScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
