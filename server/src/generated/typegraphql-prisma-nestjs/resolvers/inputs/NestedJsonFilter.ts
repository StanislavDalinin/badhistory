import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("NestedJsonFilter", {})
export class NestedJsonFilter {
  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;
}