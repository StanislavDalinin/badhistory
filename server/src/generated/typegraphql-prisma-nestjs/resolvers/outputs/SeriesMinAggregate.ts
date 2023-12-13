import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("SeriesMinAggregate", {})
export class SeriesMinAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  modelId!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  minYear!: number | null;

  @Field(_type => Int, {
    nullable: true
  })
  maxYear!: number | null;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;
}
