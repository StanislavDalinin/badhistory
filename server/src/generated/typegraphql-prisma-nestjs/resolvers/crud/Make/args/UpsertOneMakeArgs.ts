import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeCreateInput } from "../../../inputs/MakeCreateInput";
import { MakeUpdateInput } from "../../../inputs/MakeUpdateInput";
import { MakeWhereUniqueInput } from "../../../inputs/MakeWhereUniqueInput";

@ArgsType()
export class UpsertOneMakeArgs {
  @Field(_type => MakeWhereUniqueInput, {
    nullable: false
  })
  where!: MakeWhereUniqueInput;

  @Field(_type => MakeCreateInput, {
    nullable: false
  })
  create!: MakeCreateInput;

  @Field(_type => MakeUpdateInput, {
    nullable: false
  })
  update!: MakeUpdateInput;
}
