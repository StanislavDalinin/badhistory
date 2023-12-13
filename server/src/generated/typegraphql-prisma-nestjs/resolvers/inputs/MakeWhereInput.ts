import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { ModelListRelationFilter } from "../inputs/ModelListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("MakeWhereInput", {})
export class MakeWhereInput {
  @Field(_type => [MakeWhereInput], {
    nullable: true
  })
  AND?: MakeWhereInput[] | undefined;

  @Field(_type => [MakeWhereInput], {
    nullable: true
  })
  OR?: MakeWhereInput[] | undefined;

  @Field(_type => [MakeWhereInput], {
    nullable: true
  })
  NOT?: MakeWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

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
  deletedAt?: DateTimeNullableFilter | undefined;

  @Field(_type => ModelListRelationFilter, {
    nullable: true
  })
  models?: ModelListRelationFilter | undefined;
}
