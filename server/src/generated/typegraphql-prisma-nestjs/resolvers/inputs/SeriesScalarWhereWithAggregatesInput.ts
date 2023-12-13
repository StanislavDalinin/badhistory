import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("SeriesScalarWhereWithAggregatesInput", {})
export class SeriesScalarWhereWithAggregatesInput {
  @Field(_type => [SeriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SeriesScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [SeriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SeriesScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [SeriesScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SeriesScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modelId?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  minYear?: IntWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  maxYear?: IntWithAggregatesFilter | undefined;

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
