import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotCreateManyVehicleInputEnvelope } from "../inputs/LotCreateManyVehicleInputEnvelope";
import { LotCreateOrConnectWithoutVehicleInput } from "../inputs/LotCreateOrConnectWithoutVehicleInput";
import { LotCreateWithoutVehicleInput } from "../inputs/LotCreateWithoutVehicleInput";
import { LotScalarWhereInput } from "../inputs/LotScalarWhereInput";
import { LotUpdateManyWithWhereWithoutVehicleInput } from "../inputs/LotUpdateManyWithWhereWithoutVehicleInput";
import { LotUpdateWithWhereUniqueWithoutVehicleInput } from "../inputs/LotUpdateWithWhereUniqueWithoutVehicleInput";
import { LotUpsertWithWhereUniqueWithoutVehicleInput } from "../inputs/LotUpsertWithWhereUniqueWithoutVehicleInput";
import { LotWhereUniqueInput } from "../inputs/LotWhereUniqueInput";

@InputType("LotUpdateManyWithoutVehicleNestedInput", {})
export class LotUpdateManyWithoutVehicleNestedInput {
  @Field(_type => [LotCreateWithoutVehicleInput], {
    nullable: true
  })
  create?: LotCreateWithoutVehicleInput[] | undefined;

  @Field(_type => [LotCreateOrConnectWithoutVehicleInput], {
    nullable: true
  })
  connectOrCreate?: LotCreateOrConnectWithoutVehicleInput[] | undefined;

  @Field(_type => [LotUpsertWithWhereUniqueWithoutVehicleInput], {
    nullable: true
  })
  upsert?: LotUpsertWithWhereUniqueWithoutVehicleInput[] | undefined;

  @Field(_type => LotCreateManyVehicleInputEnvelope, {
    nullable: true
  })
  createMany?: LotCreateManyVehicleInputEnvelope | undefined;

  @Field(_type => [LotWhereUniqueInput], {
    nullable: true
  })
  set?: LotWhereUniqueInput[] | undefined;

  @Field(_type => [LotWhereUniqueInput], {
    nullable: true
  })
  disconnect?: LotWhereUniqueInput[] | undefined;

  @Field(_type => [LotWhereUniqueInput], {
    nullable: true
  })
  delete?: LotWhereUniqueInput[] | undefined;

  @Field(_type => [LotWhereUniqueInput], {
    nullable: true
  })
  connect?: LotWhereUniqueInput[] | undefined;

  @Field(_type => [LotUpdateWithWhereUniqueWithoutVehicleInput], {
    nullable: true
  })
  update?: LotUpdateWithWhereUniqueWithoutVehicleInput[] | undefined;

  @Field(_type => [LotUpdateManyWithWhereWithoutVehicleInput], {
    nullable: true
  })
  updateMany?: LotUpdateManyWithWhereWithoutVehicleInput[] | undefined;

  @Field(_type => [LotScalarWhereInput], {
    nullable: true
  })
  deleteMany?: LotScalarWhereInput[] | undefined;
}
