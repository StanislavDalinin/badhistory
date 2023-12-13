import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeCountAggregate } from "../outputs/MakeCountAggregate";
import { MakeMaxAggregate } from "../outputs/MakeMaxAggregate";
import { MakeMinAggregate } from "../outputs/MakeMinAggregate";

@ObjectType("AggregateMake", {})
export class AggregateMake {
  @Field(_type => MakeCountAggregate, {
    nullable: true
  })
  _count!: MakeCountAggregate | null;

  @Field(_type => MakeMinAggregate, {
    nullable: true
  })
  _min!: MakeMinAggregate | null;

  @Field(_type => MakeMaxAggregate, {
    nullable: true
  })
  _max!: MakeMaxAggregate | null;
}
