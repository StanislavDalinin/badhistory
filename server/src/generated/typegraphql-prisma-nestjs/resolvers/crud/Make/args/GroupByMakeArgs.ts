import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeOrderByWithAggregationInput } from "../../../inputs/MakeOrderByWithAggregationInput";
import { MakeScalarWhereWithAggregatesInput } from "../../../inputs/MakeScalarWhereWithAggregatesInput";
import { MakeWhereInput } from "../../../inputs/MakeWhereInput";
import { MakeScalarFieldEnum } from "../../../../enums/MakeScalarFieldEnum";

@ArgsType()
export class GroupByMakeArgs {
  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  where?: MakeWhereInput | undefined;

  @Field(_type => [MakeOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: MakeOrderByWithAggregationInput[] | undefined;

  @Field(_type => [MakeScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt">;

  @Field(_type => MakeScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: MakeScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
