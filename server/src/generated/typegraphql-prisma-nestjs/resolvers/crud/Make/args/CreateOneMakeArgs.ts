import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeCreateInput } from "../../../inputs/MakeCreateInput";

@ArgsType()
export class CreateOneMakeArgs {
  @Field(_type => MakeCreateInput, {
    nullable: false
  })
  data!: MakeCreateInput;
}
