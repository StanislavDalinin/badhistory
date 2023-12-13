import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorCreateWithoutSubProcessesInput";
import { ResumableProcessMirrorUpdateWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorUpdateWithoutSubProcessesInput";
import { ResumableProcessMirrorWhereInput } from "../inputs/ResumableProcessMirrorWhereInput";

@InputType("ResumableProcessMirrorUpsertWithoutSubProcessesInput", {})
export class ResumableProcessMirrorUpsertWithoutSubProcessesInput {
  @Field(_type => ResumableProcessMirrorUpdateWithoutSubProcessesInput, {
    nullable: false
  })
  update!: ResumableProcessMirrorUpdateWithoutSubProcessesInput;

  @Field(_type => ResumableProcessMirrorCreateWithoutSubProcessesInput, {
    nullable: false
  })
  create!: ResumableProcessMirrorCreateWithoutSubProcessesInput;

  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  where?: ResumableProcessMirrorWhereInput | undefined;
}
