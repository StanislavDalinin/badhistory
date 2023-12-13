import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotAvgAggregate } from "../outputs/LotAvgAggregate";
import { LotCountAggregate } from "../outputs/LotCountAggregate";
import { LotMaxAggregate } from "../outputs/LotMaxAggregate";
import { LotMinAggregate } from "../outputs/LotMinAggregate";
import { LotSumAggregate } from "../outputs/LotSumAggregate";

@ObjectType("AggregateLot", {})
export class AggregateLot {
  @Field(_type => LotCountAggregate, {
    nullable: true
  })
  _count!: LotCountAggregate | null;

  @Field(_type => LotAvgAggregate, {
    nullable: true
  })
  _avg!: LotAvgAggregate | null;

  @Field(_type => LotSumAggregate, {
    nullable: true
  })
  _sum!: LotSumAggregate | null;

  @Field(_type => LotMinAggregate, {
    nullable: true
  })
  _min!: LotMinAggregate | null;

  @Field(_type => LotMaxAggregate, {
    nullable: true
  })
  _max!: LotMaxAggregate | null;
}
