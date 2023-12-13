import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessType } from "../../enums/ResumableProcessType";
import { Status } from "../../enums/Status";

@ObjectType("ResumableProcessMirrorMinAggregate", {})
export class ResumableProcessMirrorMinAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

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
    nullable: true
  })
  type!: "bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper" | null;

  @Field(_type => Status, {
    nullable: true
  })
  status!: "idle" | "pending" | "aborted" | "failed" | "succeeded" | null;

  @Field(_type => Int, {
    nullable: true
  })
  currentStep!: number | null;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;
}
