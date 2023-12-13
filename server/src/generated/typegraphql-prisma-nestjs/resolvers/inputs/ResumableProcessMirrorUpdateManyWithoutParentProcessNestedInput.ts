import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateManyParentProcessInputEnvelope } from "../inputs/ResumableProcessMirrorCreateManyParentProcessInputEnvelope";
import { ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput";
import { ResumableProcessMirrorCreateWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorCreateWithoutParentProcessInput";
import { ResumableProcessMirrorScalarWhereInput } from "../inputs/ResumableProcessMirrorScalarWhereInput";
import { ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput";
import { ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput";
import { ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput", {})
export class ResumableProcessMirrorUpdateManyWithoutParentProcessNestedInput {
  @Field(_type => [ResumableProcessMirrorCreateWithoutParentProcessInput], {
    nullable: true
  })
  create?: ResumableProcessMirrorCreateWithoutParentProcessInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput], {
    nullable: true
  })
  connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput], {
    nullable: true
  })
  upsert?: ResumableProcessMirrorUpsertWithWhereUniqueWithoutParentProcessInput[] | undefined;

  @Field(_type => ResumableProcessMirrorCreateManyParentProcessInputEnvelope, {
    nullable: true
  })
  createMany?: ResumableProcessMirrorCreateManyParentProcessInputEnvelope | undefined;

  @Field(_type => [ResumableProcessMirrorWhereUniqueInput], {
    nullable: true
  })
  set?: ResumableProcessMirrorWhereUniqueInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ResumableProcessMirrorWhereUniqueInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorWhereUniqueInput], {
    nullable: true
  })
  delete?: ResumableProcessMirrorWhereUniqueInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorWhereUniqueInput], {
    nullable: true
  })
  connect?: ResumableProcessMirrorWhereUniqueInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput], {
    nullable: true
  })
  update?: ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput], {
    nullable: true
  })
  updateMany?: ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ResumableProcessMirrorScalarWhereInput[] | undefined;
}
