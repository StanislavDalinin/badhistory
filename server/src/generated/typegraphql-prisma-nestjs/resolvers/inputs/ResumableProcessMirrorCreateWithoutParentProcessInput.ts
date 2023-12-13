import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordCreateInput } from "../inputs/LogRecordCreateInput";
import { ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput";
import { ResumableProcessType } from "../../enums/ResumableProcessType";
import { Status } from "../../enums/Status";

@InputType("ResumableProcessMirrorCreateWithoutParentProcessInput", {})
export class ResumableProcessMirrorCreateWithoutParentProcessInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  parentProcessStep?: number | undefined;

  @Field(_type => String, {
    nullable: true
  })
  parentProcessStepKey?: string | undefined;

  @Field(_type => ResumableProcessType, {
    nullable: false
  })
  type!: "bidCarsSearchScraper" | "bidCarsSearchMakeScraper" | "bidCarsSearchModelScraper" | "bidCarsSearchOdometerFallbackScraper" | "bidCarsSearchResultScraper" | "bidCarsSearchResultPageScraper";

  @Field(_type => Status, {
    nullable: false
  })
  status!: "idle" | "pending" | "aborted" | "failed" | "succeeded";

  @Field(_type => Int, {
    nullable: true
  })
  currentStep?: number | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  props!: Prisma.InputJsonValue;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  state!: Prisma.InputJsonValue;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  result?: Prisma.InputJsonValue | undefined;

  @Field(_type => [LogRecordCreateInput], {
    nullable: true
  })
  log?: LogRecordCreateInput[] | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  deleted?: Date | undefined;

  @Field(_type => ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput, {
    nullable: true
  })
  subProcesses?: ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput | undefined;
}
