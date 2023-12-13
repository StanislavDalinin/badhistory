import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorWhereInput } from "../inputs/ResumableProcessMirrorWhereInput";

@InputType("ResumableProcessMirrorListRelationFilter", {})
export class ResumableProcessMirrorListRelationFilter {
  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  every?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  some?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  none?: ResumableProcessMirrorWhereInput | undefined;
}
