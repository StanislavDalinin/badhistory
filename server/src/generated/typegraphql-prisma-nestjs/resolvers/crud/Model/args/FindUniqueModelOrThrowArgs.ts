import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelWhereUniqueInput } from "../../../inputs/ModelWhereUniqueInput";

@ArgsType()
export class FindUniqueModelOrThrowArgs {
  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;
}
