import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorOrderByWithAggregationInput } from "../../../inputs/ResumableProcessMirrorOrderByWithAggregationInput";
import { ResumableProcessMirrorScalarWhereWithAggregatesInput } from "../../../inputs/ResumableProcessMirrorScalarWhereWithAggregatesInput";
import { ResumableProcessMirrorWhereInput } from "../../../inputs/ResumableProcessMirrorWhereInput";
import { ResumableProcessMirrorScalarFieldEnum } from "../../../../enums/ResumableProcessMirrorScalarFieldEnum";

@ArgsType()
export class GroupByResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  where?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => [ResumableProcessMirrorOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ResumableProcessMirrorOrderByWithAggregationInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "parentProcessId" | "parentProcessStep" | "parentProcessStepKey" | "type" | "status" | "currentStep" | "props" | "state" | "result" | "createdAt" | "updatedAt" | "deleted">;

  @Field(_type => ResumableProcessMirrorScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ResumableProcessMirrorScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
