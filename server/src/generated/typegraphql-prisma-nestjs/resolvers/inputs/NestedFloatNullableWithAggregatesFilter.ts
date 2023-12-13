import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedFloatNullableFilter } from "../inputs/NestedFloatNullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";

@InputType("NestedFloatNullableWithAggregatesFilter", {})
export class NestedFloatNullableWithAggregatesFilter {
  @Field(_type => Float, {
    nullable: true
  })
  equals?: number | undefined;

  @Field(_type => [Float], {
    nullable: true
  })
  in?: number[] | undefined;

  @Field(_type => [Float], {
    nullable: true
  })
  notIn?: number[] | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  lt?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  lte?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  gt?: number | undefined;

  @Field(_type => Float, {
    nullable: true
  })
  gte?: number | undefined;

  @Field(_type => NestedFloatNullableWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedFloatNullableWithAggregatesFilter | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _avg?: NestedFloatNullableFilter | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _sum?: NestedFloatNullableFilter | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _min?: NestedFloatNullableFilter | undefined;

  @Field(_type => NestedFloatNullableFilter, {
    nullable: true
  })
  _max?: NestedFloatNullableFilter | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
