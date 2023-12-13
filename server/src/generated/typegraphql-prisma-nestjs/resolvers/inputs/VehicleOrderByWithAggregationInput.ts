import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleAvgOrderByAggregateInput } from "../inputs/VehicleAvgOrderByAggregateInput";
import { VehicleCountOrderByAggregateInput } from "../inputs/VehicleCountOrderByAggregateInput";
import { VehicleMaxOrderByAggregateInput } from "../inputs/VehicleMaxOrderByAggregateInput";
import { VehicleMinOrderByAggregateInput } from "../inputs/VehicleMinOrderByAggregateInput";
import { VehicleSumOrderByAggregateInput } from "../inputs/VehicleSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("VehicleOrderByWithAggregationInput", {})
export class VehicleOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  vin?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  modelId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  seriesId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  vehicleTypeId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  year?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @Field(_type => VehicleCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VehicleCountOrderByAggregateInput | undefined;

  @Field(_type => VehicleAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: VehicleAvgOrderByAggregateInput | undefined;

  @Field(_type => VehicleMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VehicleMaxOrderByAggregateInput | undefined;

  @Field(_type => VehicleMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VehicleMinOrderByAggregateInput | undefined;

  @Field(_type => VehicleSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: VehicleSumOrderByAggregateInput | undefined;
}
