import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotWhereUniqueInput } from "../../../inputs/LotWhereUniqueInput";

@ArgsType()
export class FindUniqueLotArgs {
  @Field(_type => LotWhereUniqueInput, {
    nullable: false
  })
  where!: LotWhereUniqueInput;
}
