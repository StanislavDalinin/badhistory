import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorUpdateWithoutParentProcessInput } from "../inputs/ResumableProcessMirrorUpdateWithoutParentProcessInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../inputs/ResumableProcessMirrorWhereUniqueInput";

@InputType("ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput", {})
export class ResumableProcessMirrorUpdateWithWhereUniqueWithoutParentProcessInput {
  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorWhereUniqueInput;

  @Field(_type => ResumableProcessMirrorUpdateWithoutParentProcessInput, {
    nullable: false
  })
  data!: ResumableProcessMirrorUpdateWithoutParentProcessInput;
}
