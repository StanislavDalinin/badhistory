import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorWhereInput } from "../inputs/ResumableProcessMirrorWhereInput";

@InputType("ResumableProcessMirrorNullableRelationFilter", {})
export class ResumableProcessMirrorNullableRelationFilter {
  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  is?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  isNot?: ResumableProcessMirrorWhereInput | undefined;
}
