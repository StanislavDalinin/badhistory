import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MakeRelationFilter } from "../inputs/MakeRelationFilter";
import { SeriesListRelationFilter } from "../inputs/SeriesListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { VehicleListRelationFilter } from "../inputs/VehicleListRelationFilter";

@InputType("ModelWhereInput", {})
export class ModelWhereInput {
  @Field(_type => [ModelWhereInput], {
    nullable: true
  })
  AND?: ModelWhereInput[] | undefined;

  @Field(_type => [ModelWhereInput], {
    nullable: true
  })
  OR?: ModelWhereInput[] | undefined;

  @Field(_type => [ModelWhereInput], {
    nullable: true
  })
  NOT?: ModelWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  makeId?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

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

  @Field(_type => MakeRelationFilter, {
    nullable: true
  })
  make?: MakeRelationFilter | undefined;

  @Field(_type => VehicleListRelationFilter, {
    nullable: true
  })
  vehicles?: VehicleListRelationFilter | undefined;

  @Field(_type => SeriesListRelationFilter, {
    nullable: true
  })
  serieses?: SeriesListRelationFilter | undefined;
}
