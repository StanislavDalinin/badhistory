import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordOrderByCompositeAggregateInput } from "../inputs/LogRecordOrderByCompositeAggregateInput";
import { ResumableProcessMirrorOrderByRelationAggregateInput } from "../inputs/ResumableProcessMirrorOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("ResumableProcessMirrorOrderByWithRelationInput", {})
export class ResumableProcessMirrorOrderByWithRelationInput {
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

  @Field(_type => LogRecordOrderByCompositeAggregateInput, {
    nullable: true
  })
  log?: LogRecordOrderByCompositeAggregateInput | undefined;

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

  @Field(_type => ResumableProcessMirrorOrderByWithRelationInput, {
    nullable: true
  })
  parentProcess?: ResumableProcessMirrorOrderByWithRelationInput | undefined;

  @Field(_type => ResumableProcessMirrorOrderByRelationAggregateInput, {
    nullable: true
  })
  subProcesses?: ResumableProcessMirrorOrderByRelationAggregateInput | undefined;
}
