import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesOrderByWithRelationInput } from "../../../inputs/SeriesOrderByWithRelationInput";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";
import { SeriesScalarFieldEnum } from "../../../../enums/SeriesScalarFieldEnum";

@ArgsType()
export class FindManySeriesArgs {
  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  where?: SeriesWhereInput | undefined;

  @Field(_type => [SeriesOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SeriesOrderByWithRelationInput[] | undefined;

  @Field(_type => SeriesWhereUniqueInput, {
    nullable: true
  })
  cursor?: SeriesWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [SeriesScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "modelId" | "name" | "minYear" | "maxYear" | "createdAt" | "updatedAt" | "deleted"> | undefined;
}
