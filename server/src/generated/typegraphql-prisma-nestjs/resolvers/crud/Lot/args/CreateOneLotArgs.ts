import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotCreateInput } from "../../../inputs/LotCreateInput";

@ArgsType()
export class CreateOneLotArgs {
  @Field(_type => LotCreateInput, {
    nullable: false
  })
  data!: LotCreateInput;
}
