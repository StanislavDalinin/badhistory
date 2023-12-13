import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("ResumableProcessMirrorCountAggregate", {})
export class ResumableProcessMirrorCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  parentProcessId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  parentProcessStep!: number;

  @Field(_type => Int, {
    nullable: false
  })
  parentProcessStepKey!: number;

  @Field(_type => Int, {
    nullable: false
  })
  type!: number;

  @Field(_type => Int, {
    nullable: false
  })
  status!: number;

  @Field(_type => Int, {
    nullable: false
  })
  currentStep!: number;

  @Field(_type => Int, {
    nullable: false
  })
  props!: number;

  @Field(_type => Int, {
    nullable: false
  })
  state!: number;

  @Field(_type => Int, {
    nullable: false
  })
  result!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  deleted!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
