import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Model } from "../models/Model";
import { Vehicle } from "../models/Vehicle";
import { SeriesCount } from "../resolvers/outputs/SeriesCount";

@ObjectType("Series", {})
export class Series {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  model?: Model;

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

  vehicles?: Vehicle[];

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
  deleted?: Date | null;

  @Field(_type => SeriesCount, {
    nullable: true
  })
  _count?: SeriesCount | null;
}
