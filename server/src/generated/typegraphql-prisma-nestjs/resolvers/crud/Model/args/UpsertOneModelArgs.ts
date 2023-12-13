import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelCreateInput } from "../../../inputs/ModelCreateInput";
import { ModelUpdateInput } from "../../../inputs/ModelUpdateInput";
import { ModelWhereUniqueInput } from "../../../inputs/ModelWhereUniqueInput";

@ArgsType()
export class UpsertOneModelArgs {
  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;

  @Field(_type => ModelCreateInput, {
    nullable: false
  })
  create!: ModelCreateInput;

  @Field(_type => ModelUpdateInput, {
    nullable: false
  })
  update!: ModelUpdateInput;
}
