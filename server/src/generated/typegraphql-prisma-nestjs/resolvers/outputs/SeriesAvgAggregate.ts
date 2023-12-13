import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("SeriesAvgAggregate", {})
export class SeriesAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  minYear!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  maxYear!: number | null;
}
