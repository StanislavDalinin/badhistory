import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeCountModelsArgs } from "./args/MakeCountModelsArgs";

@ObjectType("MakeCount", {})
export class MakeCount {
  models!: number;

  @Field(_type => Int, {
    name: "models",
    nullable: false
  })
  getModels(@Root() root: MakeCount, @Args() args: MakeCountModelsArgs): number {
    return root.models;
  }
}