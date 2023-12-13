import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesCreateInput } from "../../../inputs/SeriesCreateInput";

@ArgsType()
export class CreateOneSeriesArgs {
  @Field(_type => SeriesCreateInput, {
    nullable: false
  })
  data!: SeriesCreateInput;
}
