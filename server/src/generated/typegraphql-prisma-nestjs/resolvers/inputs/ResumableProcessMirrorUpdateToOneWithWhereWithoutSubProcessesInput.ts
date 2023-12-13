import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorUpdateWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorUpdateWithoutSubProcessesInput";
import { ResumableProcessMirrorWhereInput } from "../inputs/ResumableProcessMirrorWhereInput";

@InputType("ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput", {})
export class ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput {
  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  where?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => ResumableProcessMirrorUpdateWithoutSubProcessesInput, {
    nullable: false
  })
  data!: ResumableProcessMirrorUpdateWithoutSubProcessesInput;
}
