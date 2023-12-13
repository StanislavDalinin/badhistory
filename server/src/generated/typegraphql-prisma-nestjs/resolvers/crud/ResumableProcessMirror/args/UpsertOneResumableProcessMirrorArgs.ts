import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorCreateInput } from "../../../inputs/ResumableProcessMirrorCreateInput";
import { ResumableProcessMirrorUpdateInput } from "../../../inputs/ResumableProcessMirrorUpdateInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../../../inputs/ResumableProcessMirrorWhereUniqueInput";

@ArgsType()
export class UpsertOneResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorWhereUniqueInput;

  @Field(_type => ResumableProcessMirrorCreateInput, {
    nullable: false
  })
  create!: ResumableProcessMirrorCreateInput;

  @Field(_type => ResumableProcessMirrorUpdateInput, {
    nullable: false
  })
  update!: ResumableProcessMirrorUpdateInput;
}
