import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesUpdateInput } from "../../../inputs/SeriesUpdateInput";
import { SeriesWhereUniqueInput } from "../../../inputs/SeriesWhereUniqueInput";

@ArgsType()
export class UpdateOneSeriesArgs {
  @Field(_type => SeriesUpdateInput, {
    nullable: false
  })
  data!: SeriesUpdateInput;

  @Field(_type => SeriesWhereUniqueInput, {
    nullable: false
  })
  where!: SeriesWhereUniqueInput;
}
