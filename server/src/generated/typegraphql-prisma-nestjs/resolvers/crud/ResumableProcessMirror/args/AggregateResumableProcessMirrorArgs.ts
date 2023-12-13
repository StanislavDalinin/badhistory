import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResumableProcessMirrorOrderByWithRelationInput } from "../../../inputs/ResumableProcessMirrorOrderByWithRelationInput";
import { ResumableProcessMirrorWhereInput } from "../../../inputs/ResumableProcessMirrorWhereInput";
import { ResumableProcessMirrorWhereUniqueInput } from "../../../inputs/ResumableProcessMirrorWhereUniqueInput";

@ArgsType()
export class AggregateResumableProcessMirrorArgs {
  @Field(_type => ResumableProcessMirrorWhereInput, {
    nullable: true
  })
  where?: ResumableProcessMirrorWhereInput | undefined;

  @Field(_type => [ResumableProcessMirrorOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ResumableProcessMirrorOrderByWithRelationInput[] | undefined;

  @Field(_type => ResumableProcessMirrorWhereUniqueInput, {
    nullable: true
  })
  cursor?: ResumableProcessMirrorWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
