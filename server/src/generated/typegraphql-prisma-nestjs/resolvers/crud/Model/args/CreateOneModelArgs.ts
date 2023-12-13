import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelCreateInput } from "../../../inputs/ModelCreateInput";

@ArgsType()
export class CreateOneModelArgs {
  @Field(_type => ModelCreateInput, {
    nullable: false
  })
  data!: ModelCreateInput;
}
