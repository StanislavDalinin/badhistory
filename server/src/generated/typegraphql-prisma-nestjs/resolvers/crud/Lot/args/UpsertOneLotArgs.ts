import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotCreateInput } from "../../../inputs/LotCreateInput";
import { LotUpdateInput } from "../../../inputs/LotUpdateInput";
import { LotWhereUniqueInput } from "../../../inputs/LotWhereUniqueInput";

@ArgsType()
export class UpsertOneLotArgs {
  @Field(_type => LotWhereUniqueInput, {
    nullable: false
  })
  where!: LotWhereUniqueInput;

  @Field(_type => LotCreateInput, {
    nullable: false
  })
  create!: LotCreateInput;

  @Field(_type => LotUpdateInput, {
    nullable: false
  })
  update!: LotUpdateInput;
}
