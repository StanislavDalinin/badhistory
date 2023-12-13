import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelUpdateManyMutationInput } from "../../../inputs/ModelUpdateManyMutationInput";
import { ModelWhereInput } from "../../../inputs/ModelWhereInput";

@ArgsType()
export class UpdateManyModelArgs {
  @Field(_type => ModelUpdateManyMutationInput, {
    nullable: false
  })
  data!: ModelUpdateManyMutationInput;

  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;
}
