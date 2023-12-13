import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeWhereUniqueInput } from "../../../inputs/MakeWhereUniqueInput";

@ArgsType()
export class FindUniqueMakeArgs {
  @Field(_type => MakeWhereUniqueInput, {
    nullable: false
  })
  where!: MakeWhereUniqueInput;
}
