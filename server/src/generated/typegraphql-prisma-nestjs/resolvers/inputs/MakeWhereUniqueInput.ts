import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { MakeWhereInput } from "../inputs/MakeWhereInput";
import { ModelListRelationFilter } from "../inputs/ModelListRelationFilter";

@InputType("MakeWhereUniqueInput", {})
export class MakeWhereUniqueInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  name?: string | undefined;

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
