import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorCreateWithoutParentProcessInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput", {})
export class ResumableProcessMirrorCreateOrConnectWithoutParentProcessInput {
  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorWhereUniqueInput;

  @Field(_type => ResumableProcessMirrorCreateWithoutParentProcessInput, {
    nullable: false
  })
  create!: ResumableProcessMirrorCreateWithoutParentProcessInput;
}
