import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCountOrderByAggregateInput } from "../inputs/VehicleTypeCountOrderByAggregateInput";
import { VehicleTypeMaxOrderByAggregateInput } from "../inputs/VehicleTypeMaxOrderByAggregateInput";
import { VehicleTypeMinOrderByAggregateInput } from "../inputs/VehicleTypeMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("VehicleTypeOrderByWithAggregationInput", {})
export class VehicleTypeOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

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

  @Field(_type => VehicleTypeCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: VehicleTypeCountOrderByAggregateInput | undefined;

  @Field(_type => VehicleTypeMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: VehicleTypeMaxOrderByAggregateInput | undefined;

  @Field(_type => VehicleTypeMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: VehicleTypeMinOrderByAggregateInput | undefined;
}
