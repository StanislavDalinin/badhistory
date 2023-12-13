import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeUpdateInput } from "../../../inputs/MakeUpdateInput";
import { MakeWhereUniqueInput } from "../../../inputs/MakeWhereUniqueInput";

@ArgsType()
export class UpdateOneMakeArgs {
  @Field(_type => MakeUpdateInput, {
    nullable: false
  })
  data!: MakeUpdateInput;

  @Field(_type => MakeWhereUniqueInput, {
    nullable: false
  })
  where!: MakeWhereUniqueInput;
}
