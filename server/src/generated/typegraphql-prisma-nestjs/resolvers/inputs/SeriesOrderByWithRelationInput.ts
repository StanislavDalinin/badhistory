import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelOrderByWithRelationInput } from "../inputs/ModelOrderByWithRelationInput";
import { VehicleOrderByRelationAggregateInput } from "../inputs/VehicleOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("SeriesOrderByWithRelationInput", {})
export class SeriesOrderByWithRelationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  modelId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  minYear?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  maxYear?: "asc" | "desc" | undefined;

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

  @Field(_type => ModelOrderByWithRelationInput, {
    nullable: true
  })
  model?: ModelOrderByWithRelationInput | undefined;

  @Field(_type => VehicleOrderByRelationAggregateInput, {
    nullable: true
  })
  vehicles?: VehicleOrderByRelationAggregateInput | undefined;
}