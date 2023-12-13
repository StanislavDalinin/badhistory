import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";

@ArgsType()
export class DeleteManySeriesArgs {
  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  where?: SeriesWhereInput | undefined;
}
