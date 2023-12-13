import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorUpdateManyMutationInput } from "../../../inputs/ResumableProcessMirrorUpdateManyMutationInput";
import { ResumableProcessMirrorWhereInput } from "../../../inputs/ResumableProcessMirrorWhereInput";

@ArgsType()
export class UpdateManyResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResumableProcessMirrorUpdateManyMutationInput;

  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  where?: ResumableProcessMirrorWhereInput | undefined;
}
