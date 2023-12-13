import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateManyParentProcessInputEnvelope } from "../inputs/ResumableProcessMirrorCreateManyParentProcessInputEnvelope";
import { ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput";
import { ResumableProcessMirrorCreateWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorCreateWithoutParentProcessInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput", {})
export class ResumableProcessMirrorCreateNestedManyWithoutParentProcessInput {
  @Field(_type => [ResumableProcessMirrorCreateWithoutParentProcessInput], {
    nullable: true
  })
  create?: ResumableProcessMirrorCreateWithoutParentProcessInput[] | undefined;

  @Field(_type => [ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput], {
    nullable: true
  })
  connectOrCreate?: ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput[] | undefined;

  @Field(_type => ResumableProcessMirrorCreateManyParentProcessInputEnvelope, {
    nullable: true
  })
  createMany?: ResumableProcessMirrorCreateManyParentProcessInputEnvelope | undefined;

  @Field(_type => [ResumableProcessMirrorWhereUniqueInput], {
    nullable: true
  })
  connect?: ResumableProcessMirrorWhereUniqueInput[] | undefined;
}
