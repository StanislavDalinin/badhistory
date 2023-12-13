import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorCreateManyInput } from "../../../inputs/ResumableProcessMirrorCreateManyInput";

@ArgsType()
export class CreateManyResumableProcessMirrorArgs {
  @Field(_type => [ResumableProcessMirrorCreateManyInput], {
    nullable: false
  })
  data!: ResumableProcessMirrorCreateManyInput[];
}
