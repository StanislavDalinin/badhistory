import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateManyModelInputEnvelope } from "../inputs/SeriesCreateManyModelInputEnvelope";
import { SeriesCreateOrConnectWithoutModelInput } from "../inputs/SeriesCreateOrConnectWithoutModelInput";
import { SeriesCreateWithoutModelInput } from "../inputs/SeriesCreateWithoutModelInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@InputType("SeriesCreateNestedManyWithoutModelInput", {})
export class SeriesCreateNestedManyWithoutModelInput {
  @Field(_type => [SeriesCreateWithoutModelInput], {
    nullable: true
  })
  create?: SeriesCreateWithoutModelInput[] | undefined;

  @Field(_type => [SeriesCreateOrConnectWithoutModelInput], {
    nullable: true
  })
  connectOrCreate?: SeriesCreateOrConnectWithoutModelInput[] | undefined;

  @Field(_type => SeriesCreateManyModelInputEnvelope, {
    nullable: true
  })
  createMany?: SeriesCreateManyModelInputEnvelope | undefined;

  @Field(_type => [SeriesWhereUniqueInput], {
    nullable: true
  })
  connect?: SeriesWhereUniqueInput[] | undefined;
}
