import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorCreateInput } from "../../../inputs/ResumableProcessMirrorCreateInput";

@ArgsType()
export class CreateOneResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorCreateInput, {
    nullable: false
  })
  data!: ResumableProcessMirrorCreateInput;
}
