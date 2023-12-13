import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesOrderByWithAggregationInput } from "../../../inputs/SeriesOrderByWithAggregationInput";
import { SeriesScalarWhereWithAggregatesInput } from "../../../inputs/SeriesScalarWhereWithAggregatesInput";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";
import { SeriesScalarFieldEnum } from "../../../../enums/SeriesScalarFieldEnum";

@ArgsType()
export class GroupBySeriesArgs {
  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  where?: SeriesWhereInput | undefined;

  @Field(_type => [SeriesOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SeriesOrderByWithAggregationInput[] | undefined;

  @Field(_type => [SeriesScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "modelId" | "name" | "minYear" | "maxYear" | "createdAt" | "updatedAt" | "deleted">;

  @Field(_type => SeriesScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SeriesScalarWhereWithAggregatesInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
