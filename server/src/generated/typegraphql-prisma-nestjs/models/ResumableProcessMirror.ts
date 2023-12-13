import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LogRecord } from "../models/LogRecord";
import { ResumableProcessType } from "../enums/ResumableProcessType";
import { Status } from "../enums/Status";
import { ResumableProcessMirrorCount } from "../resolvers/outputs/ResumableProcessMirrorCount";

@ObjectType("ResumableProcessMirror", {})
export class ResumableProcessMirror {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  parentProcessId?: string | null;

  parentProcess?: ResumableProcessMirror | null;

  @Field(_type => Int, {
    nullable: true
  })
  parentProcessStep?: number | null;

  @Field(_type => String, {
    nullable: true
  })
  parentProcessStepKey?: string | null;

  subProcesses?: ResumableProcessMirror[];

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
  result?: Prisma.JsonValue | null;

  @Field(_type => [LogRecord], {
    nullable: false
  })
  log!: LogRecord[];

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
  deleted?: Date | null;

  @Field(_type => ResumableProcessMirrorCount, {
    nullable: true
  })
  _count?: ResumableProcessMirrorCount | null;
}
