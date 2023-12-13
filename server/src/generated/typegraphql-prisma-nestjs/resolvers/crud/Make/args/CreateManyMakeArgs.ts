import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeCreateManyInput } from "../../../inputs/MakeCreateManyInput";

@ArgsType()
export class CreateManyMakeArgs {
  @Field(_type => [MakeCreateManyInput], {
    nullable: false
  })
  data!: MakeCreateManyInput[];
}
