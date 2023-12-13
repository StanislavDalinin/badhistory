import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Model } from "../models/Model";
import { MakeCount } from "../resolvers/outputs/MakeCount";

@ObjectType("Make", {})
export class Make {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  models?: Model[];

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | null;

  @Field(_type => MakeCount, {
    nullable: true
  })
  _count?: MakeCount | null;
}
