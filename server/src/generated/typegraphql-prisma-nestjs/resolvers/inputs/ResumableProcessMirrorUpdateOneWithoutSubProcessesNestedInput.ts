import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput";
import { ResumableProcessMirrorCreateWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorCreateWithoutSubProcessesInput";
import { ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput";
import { ResumableProcessMirrorUpsertWithoutSubProcessesInput } from "../inputs/ResumableProcessMirrorUpsertWithoutSubProcessesInput";
import { ResumableProcessMirrorWhereInput } from "../inputs/ResumableProcessMirrorWhereInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput", {})
export class ResumableProcessMirrorUpdateOneWithoutSubProcessesNestedInput {
  @Field(_type => ResumableProcessMirrorCreateWithoutSubProcessesInput, {
    nullable: true
  })
  create?: ResumableProcessMirrorCreateWithoutSubProcessesInput | undefined;

  @Field(_type => ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput, {
    nullable: true
  })
  connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutSubProcessesInput | undefined;

  @Field(_type => ResumableProcessMirrorUpsertWithoutSubProcessesInput, {
    nullable: true
  })
  upsert?: ResumableProcessMirrorUpsertWithoutSubProcessesInput | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  delete?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: true
  })
  connect?: ResumableProcessMirrorWhereUniqueInput | undefined;

  @Field(_type => ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput, {
    nullable: true
  })
  update?: ResumableProcessMirrorUpdateToOneWithWhereWithoutSubProcessesInput | undefined;
}
