import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumResumableProcessTypeFilter } from "../inputs/EnumResumableProcessTypeFilter";
import { EnumStatusFilter } from "../inputs/EnumStatusFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { JsonFilter } from "../inputs/JsonFilter";
import { JsonNullableFilter } from "../inputs/JsonNullableFilter";
import { LogRecordObjectEqualityInput } from "../inputs/LogRecordObjectEqualityInput";
import { ResumableProcessMirrorListRelationFilter } from "../inputs/ResumableProcessMirrorListRelationFilter";
import { ResumableProcessMirrorNullableRelationFilter } from "../inputs/ResumableProcessMirrorNullableRelationFilter";
import { ResumableProcessMirrorWhereInput } from "../inputs/ResumableProcessMirrorWhereInput";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("ResumableProcessMirrorWhereUniqueInput", {})
export class ResumableProcessMirrorWhereUniqueInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => [ResumableProcessMirrorWhereInput], {
    nullable: true
  })
  AND?: ResumableProcessMirrorWhereInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorWhereInput], {
    nullable: true
  })
  OR?: ResumableProcessMirrorWhereInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorWhereInput], {
    nullable: true
  })
  NOT?: ResumableProcessMirrorWhereInput[] | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentProcessId?: StringNullableFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  parentProcessStep?: IntNullableFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  parentProcessStepKey?: StringNullableFilter | undefined;

  @Field(_type => EnumResumableProcessTypeFilter, {
    nullable: true
  })
  type?: EnumResumableProcessTypeFilter | undefined;

  @Field(_type => EnumStatusFilter, {
    nullable: true
  })
  status?: EnumStatusFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  currentStep?: IntFilter | undefined;

  @Field(_type => JsonFilter, {
    nullable: true
  })
  props?: JsonFilter | undefined;

  @Field(_type => JsonFilter, {
    nullable: true
  })
  state?: JsonFilter | undefined;

  @Field(_type => JsonNullableFilter, {
    nullable: true
  })
  result?: JsonNullableFilter | undefined;

  @Field(_type => [LogRecordObjectEqualityInput], {
    nullable: true
  })
  log?: LogRecordObjectEqualityInput[] | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deleted?: DateTimeNullableFilter | undefined;

  @Field(_type => ResumableProcessMirrorNullableRelationFilter, {
    nullable: true
  })
  parentProcess?: ResumableProcessMirrorNullableRelationFilter | undefined;

  @Field(_type => ResumableProcessMirrorListRelationFilter, {
    nullable: true
  })
  subProcesses?: ResumableProcessMirrorListRelationFilter | undefined;
}
