import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorUpdateInput } from "../../../inputs/ResumableProcessMirrorUpdateInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../../../inputs/ResumableProcessMirrorWhereUniqueInput";

@ArgsType()
export class UpdateOneResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorUpdateInput, {
    nullable: false
  })
  data!: ResumableProcessMirrorUpdateInput;

  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorWhereUniqueInput;
}
