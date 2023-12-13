import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManySeriesInputEnvelope } from "../inputs/VehicleCreateManySeriesInputEnvelope";
import { VehicleCreateOrConnectWithoutSeriesInput } from "../inputs/VehicleCreateOrConnectWithoutSeriesInput";
import { VehicleCreateWithoutSeriesInput } from "../inputs/VehicleCreateWithoutSeriesInput";
import { VehicleScalarWhereInput } from "../inputs/VehicleScalarWhereInput";
import { VehicleUpdateManyWithWhereWithoutSeriesInput } from "../inputs/VehicleUpdateManyWithWhereWithoutSeriesInput";
import { VehicleUpdateWithWhereUniqueWithoutSeriesInput } from "../inputs/VehicleUpdateWithWhereUniqueWithoutSeriesInput";
import { VehicleUpsertWithWhereUniqueWithoutSeriesInput } from "../inputs/VehicleUpsertWithWhereUniqueWithoutSeriesInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpdateManyWithoutSeriesNestedInput", {})
export class VehicleUpdateManyWithoutSeriesNestedInput {
  @Field(_type => [VehicleCreateWithoutSeriesInput], {
    nullable: true
  })
  create?: VehicleCreateWithoutSeriesInput[] | undefined;

  @Field(_type => [VehicleCreateOrConnectWithoutSeriesInput], {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutSeriesInput[] | undefined;

  @Field(_type => [VehicleUpsertWithWhereUniqueWithoutSeriesInput], {
    nullable: true
  })
  upsert?: VehicleUpsertWithWhereUniqueWithoutSeriesInput[] | undefined;

  @Field(_type => VehicleCreateManySeriesInputEnvelope, {
    nullable: true
  })
  createMany?: VehicleCreateManySeriesInputEnvelope | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  set?: VehicleWhereUniqueInput[] | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  disconnect?: VehicleWhereUniqueInput[] | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  delete?: VehicleWhereUniqueInput[] | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  connect?: VehicleWhereUniqueInput[] | undefined;

  @Field(_type => [VehicleUpdateWithWhereUniqueWithoutSeriesInput], {
    nullable: true
  })
  update?: VehicleUpdateWithWhereUniqueWithoutSeriesInput[] | undefined;

  @Field(_type => [VehicleUpdateManyWithWhereWithoutSeriesInput], {
    nullable: true
  })
  updateMany?: VehicleUpdateManyWithWhereWithoutSeriesInput[] | undefined;

  @Field(_type => [VehicleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VehicleScalarWhereInput[] | undefined;
}
