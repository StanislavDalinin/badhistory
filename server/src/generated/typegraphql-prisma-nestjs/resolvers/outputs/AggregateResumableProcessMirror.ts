import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorAvgAggregate } from "../outputs/ResumableProcessMirrorAvgAggregate";
import { ResumableProcessMirrorCountAggregate } from "../outputs/ResumableProcessMirrorCountAggregate";
import { ResumableProcessMirrorMaxAggregate } from "../outputs/ResumableProcessMirrorMaxAggregate";
import { ResumableProcessMirrorMinAggregate } from "../outputs/ResumableProcessMirrorMinAggregate";
import { ResumableProcessMirrorSumAggregate } from "../outputs/ResumableProcessMirrorSumAggregate";

@ObjectType("AggregateResumableProcessMirror", {})
export class AggregateResumableProcessMirror {
  @Field(_type => ResumableProcessMirrorCountAggregate, {
    nullable: true
  })
  _count!: ResumableProcessMirrorCountAggregate | null;

  @Field(_type => ResumableProcessMirrorAvgAggregate, {
    nullable: true
  })
  _avg!: ResumableProcessMirrorAvgAggregate | null;

  @Field(_type => ResumableProcessMirrorSumAggregate, {
    nullable: true
  })
  _sum!: ResumableProcessMirrorSumAggregate | null;

  @Field(_type => ResumableProcessMirrorMinAggregate, {
    nullable: true
  })
  _min!: ResumableProcessMirrorMinAggregate | null;

  @Field(_type => ResumableProcessMirrorMaxAggregate, {
    nullable: true
  })
  _max!: ResumableProcessMirrorMaxAggregate | null;
}
