import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorAvgOrderByAggregateInput } from "../inputs/ResumableProcessMirrorAvgOrderByAggregateInput";
import { ResumableProcessMirrorCountOrderByAggregateInput } from "../inputs/ResumableProcessMirrorCountOrderByAggregateInput";
import { ResumableProcessMirrorMaxOrderByAggregateInput } from "../inputs/ResumableProcessMirrorMaxOrderByAggregateInput";
import { ResumableProcessMirrorMinOrderByAggregateInput } from "../inputs/ResumableProcessMirrorMinOrderByAggregateInput";
import { ResumableProcessMirrorSumOrderByAggregateInput } from "../inputs/ResumableProcessMirrorSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("ResumableProcessMirrorOrderByWithAggregationInput", {})
export class ResumableProcessMirrorOrderByWithAggregationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  parentProcessId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  parentProcessStep?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  parentProcessStepKey?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  currentStep?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  props?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  state?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  result?: "asc" | "desc" | undefined;

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

  @Field(_type => ResumableProcessMirrorCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ResumableProcessMirrorCountOrderByAggregateInput | undefined;

  @Field(_type => ResumableProcessMirrorAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ResumableProcessMirrorAvgOrderByAggregateInput | undefined;

  @Field(_type => ResumableProcessMirrorMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ResumableProcessMirrorMaxOrderByAggregateInput | undefined;

  @Field(_type => ResumableProcessMirrorMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ResumableProcessMirrorMinOrderByAggregateInput | undefined;

  @Field(_type => ResumableProcessMirrorSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ResumableProcessMirrorSumOrderByAggregateInput | undefined;
}
