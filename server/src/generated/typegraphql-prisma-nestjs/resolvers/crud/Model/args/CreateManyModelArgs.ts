import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelCreateManyInput } from "../../../inputs/ModelCreateManyInput";

@ArgsType()
export class CreateManyModelArgs {
  @Field(_type => [ModelCreateManyInput], {
    nullable: false
  })
  data!: ModelCreateManyInput[];
}
