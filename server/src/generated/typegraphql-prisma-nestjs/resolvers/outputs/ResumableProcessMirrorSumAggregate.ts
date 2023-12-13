import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("ResumableProcessMirrorSumAggregate", {})
export class ResumableProcessMirrorSumAggregate {
  @Field(_type => Int, {
    nullable: true
  })
  parentProcessStep!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  currentStep!: number | null;
}
