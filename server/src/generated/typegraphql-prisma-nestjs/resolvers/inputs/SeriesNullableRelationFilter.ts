import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesWhereInput } from "../inputs/SeriesWhereInput";

@InputType("SeriesNullableRelationFilter", {})
export class SeriesNullableRelationFilter {
  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  is?: SeriesWhereInput | undefined;

  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  isNot?: SeriesWhereInput | undefined;
}
