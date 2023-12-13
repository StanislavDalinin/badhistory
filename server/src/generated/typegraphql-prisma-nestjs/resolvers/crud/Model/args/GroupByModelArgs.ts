import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelOrderByWithAggregationInput } from "../../../inputs/ModelOrderByWithAggregationInput";
import { ModelScalarWhereWithAggregatesInput } from "../../../inputs/ModelScalarWhereWithAggregatesInput";
import { ModelWhereInput } from "../../../inputs/ModelWhereInput";
import { ModelScalarFieldEnum } from "../../../../enums/ModelScalarFieldEnum";

@ArgsType()
export class GroupByModelArgs {
  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;

  @Field(_type => [ModelOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ModelOrderByWithAggregationInput[] | undefined;

  @Field(_type => [ModelScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "makeId" | "name" | "createdAt" | "updatedAt" | "deleted">;

  @Field(_type => ModelScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ModelScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
