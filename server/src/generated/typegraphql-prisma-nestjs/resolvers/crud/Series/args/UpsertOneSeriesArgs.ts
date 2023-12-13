import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesCreateInput } from "../../../inputs/SeriesCreateInput";
import { SeriesUpdateInput } from "../../../inputs/SeriesUpdateInput";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";

@ArgsType()
export class UpsertOneSeriesArgs {
  @Field(_type => SeriesWhereUniqueInput, {
    nullable: false
  })
  where!: SeriesWhereUniqueInput;

  @Field(_type => SeriesCreateInput, {
    nullable: false
  })
  create!: SeriesCreateInput;

  @Field(_type => SeriesUpdateInput, {
    nullable: false
  })
  update!: SeriesUpdateInput;
}
