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
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("ResumableProcessMirrorScalarWhereInput", {})
export class ResumableProcessMirrorScalarWhereInput {
  @Field(_type => [ResumableProcessMirrorScalarWhereInput], {
    nullable: true
  })
  AND?: ResumableProcessMirrorScalarWhereInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorScalarWhereInput], {
    nullable: true
  })
  OR?: ResumableProcessMirrorScalarWhereInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorScalarWhereInput], {
    nullable: true
  })
  NOT?: ResumableProcessMirrorScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
}
