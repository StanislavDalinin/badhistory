import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesCreateManyInput } from "../../../inputs/SeriesCreateManyInput";

@ArgsType()
export class CreateManySeriesArgs {
  @Field(_type => [SeriesCreateManyInput], {
    nullable: false
  })
  data!: SeriesCreateManyInput[];
}
