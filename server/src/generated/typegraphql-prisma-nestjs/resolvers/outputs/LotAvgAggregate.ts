import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("LotAvgAggregate", {})
export class LotAvgAggregate {
  @Field(_type => Float, {
    nullable: true
  })
  lotNumber!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  lastPreBid!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  finalBid!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  odometer!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  buyNowPrice!: number | null;

  @Field(_type => Float, {
    nullable: true
  })
  cylinders!: number | null;
}
