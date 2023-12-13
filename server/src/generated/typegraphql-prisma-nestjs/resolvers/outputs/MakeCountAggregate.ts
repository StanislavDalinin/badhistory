import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("MakeCountAggregate", {})
export class MakeCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  name!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  deletedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
