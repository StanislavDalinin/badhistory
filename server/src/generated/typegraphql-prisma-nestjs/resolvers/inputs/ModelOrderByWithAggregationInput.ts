import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCountOrderByAggregateInput } from "../inputs/ModelCountOrderByAggregateInput";
import { ModelMaxOrderByAggregateInput } from "../inputs/ModelMaxOrderByAggregateInput";
import { ModelMinOrderByAggregateInput } from "../inputs/ModelMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("ModelOrderByWithAggregationInput", {})
export class ModelOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  makeId?: "asc" | "desc" | undefined;

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

  @Field(_type => ModelCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ModelCountOrderByAggregateInput | undefined;

  @Field(_type => ModelMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ModelMaxOrderByAggregateInput | undefined;

  @Field(_type => ModelMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ModelMinOrderByAggregateInput | undefined;
}
