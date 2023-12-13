import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateManyModelInput } from "../inputs/SeriesCreateManyModelInput";

@InputType("SeriesCreateManyModelInputEnvelope", {})
export class SeriesCreateManyModelInputEnvelope {
  @Field(_type => [SeriesCreateManyModelInput], {
    nullable: false
  })
  data!: SeriesCreateManyModelInput[];
}
