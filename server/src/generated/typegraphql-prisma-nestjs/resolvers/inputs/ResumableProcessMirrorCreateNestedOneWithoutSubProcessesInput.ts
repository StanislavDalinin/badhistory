import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput";
import { ResumableProcessMirrorCreateWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorCreateWithoutSubProcessesInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput", {})
export class ResumableProcessMirrorCreateNestedOneWithoutSubProcessesInput {
  @Field(_type => ResumableProcessMirrorCreateWithoutSubProcessesInput, {
    nullable: true
  })
  create?: ResumableProcessMirrorCreateWithoutSubProcessesInput | undefined;

  @Field(_type => ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput, {
    nullable: true
  })
  connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput | undefined;

  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: true
  })
  connect?: ResumableProcessMirrorWhereUniqueInput | undefined;
}
