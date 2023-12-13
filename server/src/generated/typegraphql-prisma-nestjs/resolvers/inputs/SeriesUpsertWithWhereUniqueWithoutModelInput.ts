import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateWithoutModelInput } from "../inputs/SeriesCreateWithoutModelInput";
import { SeriesUpdateWithoutModelInput } from "../inputs/SeriesUpdateWithoutModelInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@InputType("SeriesUpsertWithWhereUniqueWithoutModelInput", {})
export class SeriesUpsertWithWhereUniqueWithoutModelInput {
  @Field(_type => SeriesWhereUniqueInput, {
    nullable: false
  })
  where!: SeriesWhereUniqueInput;

  @Field(_type => SeriesUpdateWithoutModelInput, {
    nullable: false
  })
  update!: SeriesUpdateWithoutModelInput;

  @Field(_type => SeriesCreateWithoutModelInput, {
    nullable: false
  })
  create!: SeriesCreateWithoutModelInput;
}
