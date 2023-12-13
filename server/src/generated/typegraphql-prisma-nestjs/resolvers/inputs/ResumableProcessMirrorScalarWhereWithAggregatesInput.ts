import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumResumableProcessTypeWithAggregatesFilter } from "../inputs/EnumResumableProcessTypeWithAggregatesFilter";
import { EnumStatusWithAggregatesFilter } from "../inputs/EnumStatusWithAggregatesFilter";
import { IntNullableWithAggregatesFilter } from "../inputs/IntNullableWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { JsonNullableWithAggregatesFilter } from "../inputs/JsonNullableWithAggregatesFilter";
import { JsonWithAggregatesFilter } from "../inputs/JsonWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("ResumableProcessMirrorScalarWhereWithAggregatesInput", {})
export class ResumableProcessMirrorScalarWhereWithAggregatesInput {
  @Field(_type => [ResumableProcessMirrorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ResumableProcessMirrorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ResumableProcessMirrorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ResumableProcessMirrorScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentProcessId?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => IntNullableWithAggregatesFilter, {
    nullable: true
  })
  parentProcessStep?: IntNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  parentProcessStepKey?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => EnumResumableProcessTypeWithAggregatesFilter, {
    nullable: true
  })
  type?: EnumResumableProcessTypeWithAggregatesFilter | undefined;

  @Field(_type => EnumStatusWithAggregatesFilter, {
    nullable: true
  })
  status?: EnumStatusWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  currentStep?: IntWithAggregatesFilter | undefined;

  @Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  props?: JsonWithAggregatesFilter | undefined;

  @Field(_type => JsonWithAggregatesFilter, {
    nullable: true
  })
  state?: JsonWithAggregatesFilter | undefined;

  @Field(_type => JsonNullableWithAggregatesFilter, {
    nullable: true
  })
  result?: JsonNullableWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  deleted?: DateTimeNullableWithAggregatesFilter | undefined;
}
