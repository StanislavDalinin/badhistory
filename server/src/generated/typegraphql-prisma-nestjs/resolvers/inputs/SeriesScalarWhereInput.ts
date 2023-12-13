import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("SeriesScalarWhereInput", {})
export class SeriesScalarWhereInput {
  @Field(_type => [SeriesScalarWhereInput], {
    nullable: true
  })
  AND?: SeriesScalarWhereInput[] | undefined;

  @Field(_type => [SeriesScalarWhereInput], {
    nullable: true
  })
  OR?: SeriesScalarWhereInput[] | undefined;

  @Field(_type => [SeriesScalarWhereInput], {
    nullable: true
  })
  NOT?: SeriesScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  modelId?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  minYear?: IntFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  maxYear?: IntFilter | undefined;

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
