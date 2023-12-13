import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("LotUnprocessedUpdateimgsInput", {})
export class LotUnprocessedUpdateimgsInput {
  @Field(_type => [String], {
    nullable: true
  })
  set?: string[] | undefined;

  @Field(_type => [String], {
    nullable: true
  })
  push?: string[] | undefined;
}
