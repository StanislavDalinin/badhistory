import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManyModelInputEnvelope } from "../inputs/VehicleCreateManyModelInputEnvelope";
import { VehicleCreateOrConnectWithoutModelInput } from "../inputs/VehicleCreateOrConnectWithoutModelInput";
import { VehicleCreateWithoutModelInput } from "../inputs/VehicleCreateWithoutModelInput";
import { VehicleScalarWhereInput } from "../inputs/VehicleScalarWhereInput";
import { VehicleUpdateManyWithWhereWithoutModelInput } from "../inputs/VehicleUpdateManyWithWhereWithoutModelInput";
import { VehicleUpdateWithWhereUniqueWithoutModelInput } from "../inputs/VehicleUpdateWithWhereUniqueWithoutModelInput";
import { VehicleUpsertWithWhereUniqueWithoutModelInput } from "../inputs/VehicleUpsertWithWhereUniqueWithoutModelInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpdateManyWithoutModelNestedInput", {})
export class VehicleUpdateManyWithoutModelNestedInput {
  @Field(_type => [VehicleCreateWithoutModelInput], {
    nullable: true
  })
  create?: VehicleCreateWithoutModelInput[] | undefined;

  @Field(_type => [VehicleCreateOrConnectWithoutModelInput], {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutModelInput[] | undefined;

  @Field(_type => [VehicleUpsertWithWhereUniqueWithoutModelInput], {
    nullable: true
  })
  upsert?: VehicleUpsertWithWhereUniqueWithoutModelInput[] | undefined;

  @Field(_type => VehicleCreateManyModelInputEnvelope, {
    nullable: true
  })
  createMany?: VehicleCreateManyModelInputEnvelope | undefined;

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

  @Field(_type => [VehicleUpdateWithWhereUniqueWithoutModelInput], {
    nullable: true
  })
  update?: VehicleUpdateWithWhereUniqueWithoutModelInput[] | undefined;

  @Field(_type => [VehicleUpdateManyWithWhereWithoutModelInput], {
    nullable: true
  })
  updateMany?: VehicleUpdateManyWithWhereWithoutModelInput[] | undefined;

  @Field(_type => [VehicleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VehicleScalarWhereInput[] | undefined;
}
