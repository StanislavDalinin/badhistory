import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateManyModelInputEnvelope } from "../inputs/SeriesCreateManyModelInputEnvelope";
import { SeriesCreateOrConnectWithoutModelInput } from "../inputs/SeriesCreateOrConnectWithoutModelInput";
import { SeriesCreateWithoutModelInput } from "../inputs/SeriesCreateWithoutModelInput";
import { SeriesScalarWhereInput } from "../inputs/SeriesScalarWhereInput";
import { SeriesUpdateManyWithWhereWithoutModelInput } from "../inputs/SeriesUpdateManyWithWhereWithoutModelInput";
import { SeriesUpdateWithWhereUniqueWithoutModelInput } from "../inputs/SeriesUpdateWithWhereUniqueWithoutModelInput";
import { SeriesUpsertWithWhereUniqueWithoutModelInput } from "../inputs/SeriesUpsertWithWhereUniqueWithoutModelInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@InputType("SeriesUpdateManyWithoutModelNestedInput", {})
export class SeriesUpdateManyWithoutModelNestedInput {
  @Field(_type => [SeriesCreateWithoutModelInput], {
    nullable: true
  })
  create?: SeriesCreateWithoutModelInput[] | undefined;

  @Field(_type => [SeriesCreateOrConnectWithoutModelInput], {
    nullable: true
  })
  connectOrCreate?: SeriesCreateOrConnectWithoutModelInput[] | undefined;

  @Field(_type => [SeriesUpsertWithWhereUniqueWithoutModelInput], {
    nullable: true
  })
  upsert?: SeriesUpsertWithWhereUniqueWithoutModelInput[] | undefined;

  @Field(_type => SeriesCreateManyModelInputEnvelope, {
    nullable: true
  })
  createMany?: SeriesCreateManyModelInputEnvelope | undefined;

  @Field(_type => [SeriesWhereUniqueInput], {
    nullable: true
  })
  set?: SeriesWhereUniqueInput[] | undefined;

  @Field(_type => [SeriesWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SeriesWhereUniqueInput[] | undefined;

  @Field(_type => [SeriesWhereUniqueInput], {
    nullable: true
  })
  delete?: SeriesWhereUniqueInput[] | undefined;

  @Field(_type => [SeriesWhereUniqueInput], {
    nullable: true
  })
  connect?: SeriesWhereUniqueInput[] | undefined;

  @Field(_type => [SeriesUpdateWithWhereUniqueWithoutModelInput], {
    nullable: true
  })
  update?: SeriesUpdateWithWhereUniqueWithoutModelInput[] | undefined;

  @Field(_type => [SeriesUpdateManyWithWhereWithoutModelInput], {
    nullable: true
  })
  updateMany?: SeriesUpdateManyWithWhereWithoutModelInput[] | undefined;

  @Field(_type => [SeriesScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SeriesScalarWhereInput[] | undefined;
}
