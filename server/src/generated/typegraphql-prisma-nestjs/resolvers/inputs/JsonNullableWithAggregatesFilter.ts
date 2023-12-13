import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
import { NestedJsonNullableFilter } from "../inputs/NestedJsonNullableFilter";

@InputType("JsonNullableWithAggregatesFilter", {})
export class JsonNullableWithAggregatesFilter {
  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;

  @Field(_type => NestedIntNullableFilter, {
    nullable: true
  })
  _count?: NestedIntNullableFilter | undefined;

  @Field(_type => NestedJsonNullableFilter, {
    nullable: true
  })
  _min?: NestedJsonNullableFilter | undefined;

  @Field(_type => NestedJsonNullableFilter, {
    nullable: true
  })
  _max?: NestedJsonNullableFilter | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
