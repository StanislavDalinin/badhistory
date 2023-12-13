import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { ModelRelationFilter } from "../inputs/ModelRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VehicleListRelationFilter } from "../inputs/VehicleListRelationFilter";

@InputType("SeriesWhereInput", {})
export class SeriesWhereInput {
  @Field(_type => [SeriesWhereInput], {
    nullable: true
  })
  AND?: SeriesWhereInput[] | undefined;

  @Field(_type => [SeriesWhereInput], {
    nullable: true
  })
  OR?: SeriesWhereInput[] | undefined;

  @Field(_type => [SeriesWhereInput], {
    nullable: true
  })
  NOT?: SeriesWhereInput[] | undefined;

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

  @Field(_type => ModelRelationFilter, {
    nullable: true
  })
  model?: ModelRelationFilter | undefined;

  @Field(_type => VehicleListRelationFilter, {
    nullable: true
  })
  vehicles?: VehicleListRelationFilter | undefined;
}
