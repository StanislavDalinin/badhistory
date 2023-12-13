import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";

@InputType("LotUnprocessedWhereInput", {})
export class LotUnprocessedWhereInput {
  @Field(_type => [LotUnprocessedWhereInput], {
    nullable: true
  })
  AND?: LotUnprocessedWhereInput[] | undefined;

  @Field(_type => [LotUnprocessedWhereInput], {
    nullable: true
  })
  OR?: LotUnprocessedWhereInput[] | undefined;

  @Field(_type => [LotUnprocessedWhereInput], {
    nullable: true
  })
  NOT?: LotUnprocessedWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  leftTrans?: StringFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  prebidClosedTrans?: StringFilter | undefined;

  @Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  buyNowCloseTime?: DateTimeNullableFilter | undefined;

  @Field(_type => IntNullableFilter, {
    nullable: true
  })
  soldBefore?: IntNullableFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  status?: IntFilter | undefined;

  @Field(_type => StringNullableListFilter, {
    nullable: true
  })
  imgs?: StringNullableListFilter | undefined;
}
