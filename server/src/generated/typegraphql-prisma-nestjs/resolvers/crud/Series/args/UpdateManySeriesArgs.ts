import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SeriesUpdateManyMutationInput } from "../../../inputs/SeriesUpdateManyMutationInput";
import { SeriesWhereInput } from "../../../inputs/SeriesWhereInput";

@ArgsType()
export class UpdateManySeriesArgs {
  @Field(_type => SeriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SeriesUpdateManyMutationInput;

  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  where?: SeriesWhereInput | undefined;
}
