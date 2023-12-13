import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorAvgAggregate } from "../outputs/ResumableProcessMirrorAvgAggregate";
import { ResumableProcessMirrorCountAggregate } from "../outputs/ResumableProcessMirrorCountAggregate";
import { ResumableProcessMirrorMaxAggregate } from "../outputs/ResumableProcessMirrorMaxAggregate";
import { ResumableProcessMirrorMinAggregate } from "../outputs/ResumableProcessMirrorMinAggregate";
import { ResumableProcessMirrorSumAggregate } from "../outputs/ResumableProcessMirrorSumAggregate";
import { ResumableProcessType } from "../../enums/ResumableProcessType";
import { Status } from "../../enums/Status";

@ObjectType("ResumableProcessMirrorGroupBy", {})
export class ResumableProcessMirrorGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  parentProcessId!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  parentProcessStep!: number | null;

  @Field(_type => String, {
    nullable: true
  })
  parentProcessStepKey!: string | null;

  @Field(_type => ResumableProcessType, {
    nullable: false
  })
  type!: "bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper";

  @Field(_type => Status, {
    nullable: false
  })
  status!: "idle" | "pending" | "aborted" | "failed" | "succeeded";

  @Field(_type => Int, {
    nullable: false
  })
  currentStep!: number;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  props!: Prisma.JsonValue;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  state!: Prisma.JsonValue;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  result!: Prisma.JsonValue | null;

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
  deleted!: Date | null;

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
