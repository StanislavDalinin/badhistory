import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorCreateWithoutSubProcessesInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput", {})
export class ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput {
  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorWhereUniqueInput;

  @Field(_type => ResumableProcessMirrorCreateWithoutSubProcessesInput, {
    nullable: false
  })
  create!: ResumableProcessMirrorCreateWithoutSubProcessesInput;
}
