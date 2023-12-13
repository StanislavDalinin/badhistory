import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesAvgAggregate } from "../outputs/SeriesAvgAggregate";
import { SeriesCountAggregate } from "../outputs/SeriesCountAggregate";
import { SeriesMaxAggregate } from "../outputs/SeriesMaxAggregate";
import { SeriesMinAggregate } from "../outputs/SeriesMinAggregate";
import { SeriesSumAggregate } from "../outputs/SeriesSumAggregate";

@ObjectType("SeriesGroupBy", {})
export class SeriesGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  modelId!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => Int, {
    nullable: false
  })
  minYear!: number;

  @Field(_type => Int, {
    nullable: false
  })
  maxYear!: number;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;

  @Field(_type => SeriesCountAggregate, {
    nullable: true
  })
  _count!: SeriesCountAggregate | null;

  @Field(_type => SeriesAvgAggregate, {
    nullable: true
  })
  _avg!: SeriesAvgAggregate | null;

  @Field(_type => SeriesSumAggregate, {
    nullable: true
  })
  _sum!: SeriesSumAggregate | null;

  @Field(_type => SeriesMinAggregate, {
    nullable: true
  })
  _min!: SeriesMinAggregate | null;

  @Field(_type => SeriesMaxAggregate, {
    nullable: true
  })
  _max!: SeriesMaxAggregate | null;
}
