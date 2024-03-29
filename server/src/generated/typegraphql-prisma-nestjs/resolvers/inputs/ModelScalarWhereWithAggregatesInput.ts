import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("ModelScalarWhereWithAggregatesInput", {})
export class ModelScalarWhereWithAggregatesInput {
  @Field(_type => [ModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ModelScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [ModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ModelScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [ModelScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ModelScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  makeId?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

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
