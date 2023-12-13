import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelUpdateInput } from "../../../inputs/ModelUpdateInput";
import { ModelWhereUniqueInput } from "../../../inputs/ModelWhereUniqueInput";

@ArgsType()
export class UpdateOneModelArgs {
  @Field(_type => ModelUpdateInput, {
    nullable: false
  })
  data!: ModelUpdateInput;

  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;
}
