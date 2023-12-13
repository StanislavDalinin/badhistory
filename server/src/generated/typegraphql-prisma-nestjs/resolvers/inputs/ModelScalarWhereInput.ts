import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";

@InputType("ModelScalarWhereInput", {})
export class ModelScalarWhereInput {
  @Field(_type => [ModelScalarWhereInput], {
    nullable: true
  })
  AND?: ModelScalarWhereInput[] | undefined;

  @Field(_type => [ModelScalarWhereInput], {
    nullable: true
  })
  OR?: ModelScalarWhereInput[] | undefined;

  @Field(_type => [ModelScalarWhereInput], {
    nullable: true
  })
  NOT?: ModelScalarWhereInput[] | undefined;

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
}
