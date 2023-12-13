import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotCreateManyInput } from "../../../inputs/LotCreateManyInput";

@ArgsType()
export class CreateManyLotArgs {
  @Field(_type => [LotCreateManyInput], {
    nullable: false
  })
  data!: LotCreateManyInput[];
}
