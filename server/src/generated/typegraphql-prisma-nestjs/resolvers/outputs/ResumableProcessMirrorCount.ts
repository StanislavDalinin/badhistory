import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCountSubProcessesArgs } from "./args/ResumableProcessMirrorCountSubProcessesArgs";

@ObjectType("ResumableProcessMirrorCount", {})
export class ResumableProcessMirrorCount {
  subProcesses!: number;

  @Field(_type => Int, {
    name: "subProcesses",
    nullable: false
  })
  getSubProcesses(@Root() root: ResumableProcessMirrorCount, @Args() args: ResumableProcessMirrorCountSubProcessesArgs): number {
    return root.subProcesses;
  }
}
