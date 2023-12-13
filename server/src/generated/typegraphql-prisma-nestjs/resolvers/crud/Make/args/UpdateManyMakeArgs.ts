import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeUpdateManyMutationInput } from "../../../inputs/MakeUpdateManyMutationInput";
import { MakeWhereInput } from "../../../inputs/MakeWhereInput";

@ArgsType()
export class UpdateManyMakeArgs {
  @Field(_type => MakeUpdateManyMutationInput, {
    nullable: false
  })
  data!: MakeUpdateManyMutationInput;

  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  where?: MakeWhereInput | undefined;
}
