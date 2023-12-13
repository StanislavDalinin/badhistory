import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorWhereInput } from "../../inputs/ResumableProcessMirrorWhereInput";

@ArgsType()
export class ResumableProcessMirrorCountSubProcessesArgs {
  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  where?: ResumableProcessMirrorWhereInput | undefined;
}
