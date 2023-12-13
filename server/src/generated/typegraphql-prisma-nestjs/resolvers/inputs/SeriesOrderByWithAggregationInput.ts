import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesAvgOrderByAggregateInput } from "../inputs/SeriesAvgOrderByAggregateInput";
import { SeriesCountOrderByAggregateInput } from "../inputs/SeriesCountOrderByAggregateInput";
import { SeriesMaxOrderByAggregateInput } from "../inputs/SeriesMaxOrderByAggregateInput";
import { SeriesMinOrderByAggregateInput } from "../inputs/SeriesMinOrderByAggregateInput";
import { SeriesSumOrderByAggregateInput } from "../inputs/SeriesSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("SeriesOrderByWithAggregationInput", {})
export class SeriesOrderByWithAggregationInput {
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

  @Field(_type => SeriesCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SeriesCountOrderByAggregateInput | undefined;

  @Field(_type => SeriesAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: SeriesAvgOrderByAggregateInput | undefined;

  @Field(_type => SeriesMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SeriesMaxOrderByAggregateInput | undefined;

  @Field(_type => SeriesMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SeriesMinOrderByAggregateInput | undefined;

  @Field(_type => SeriesSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: SeriesSumOrderByAggregateInput | undefined;
}
