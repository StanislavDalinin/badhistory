import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorWhereUniqueInput } from "../../../inputs/ResumableProcessMirrorWhereUniqueInput";

@ArgsType()
export class FindUniqueResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorWhereUniqueInput;
}
