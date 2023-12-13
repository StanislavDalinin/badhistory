import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManyVehicleTypeInputEnvelope } from "../inputs/VehicleCreateManyVehicleTypeInputEnvelope";
import { VehicleCreateOrConnectWithoutVehicleTypeInput } from "../inputs/VehicleCreateOrConnectWithoutVehicleTypeInput";
import { VehicleCreateWithoutVehicleTypeInput } from "../inputs/VehicleCreateWithoutVehicleTypeInput";
import { VehicleScalarWhereInput } from "../inputs/VehicleScalarWhereInput";
import { VehicleUpdateManyWithWhereWithoutVehicleTypeInput } from "../inputs/VehicleUpdateManyWithWhereWithoutVehicleTypeInput";
import { VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput } from "../inputs/VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput";
import { VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput } from "../inputs/VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpdateManyWithoutVehicleTypeNestedInput", {})
export class VehicleUpdateManyWithoutVehicleTypeNestedInput {
  @Field(_type => [VehicleCreateWithoutVehicleTypeInput], {
    nullable: true
  })
  create?: VehicleCreateWithoutVehicleTypeInput[] | undefined;

  @Field(_type => [VehicleCreateOrConnectWithoutVehicleTypeInput], {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput[] | undefined;

  @Field(_type => [VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput], {
    nullable: true
  })
  upsert?: VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput[] | undefined;

  @Field(_type => VehicleCreateManyVehicleTypeInputEnvelope, {
    nullable: true
  })
  createMany?: VehicleCreateManyVehicleTypeInputEnvelope | undefined;

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

  @Field(_type => [VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput], {
    nullable: true
  })
  update?: VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput[] | undefined;

  @Field(_type => [VehicleUpdateManyWithWhereWithoutVehicleTypeInput], {
    nullable: true
  })
  updateMany?: VehicleUpdateManyWithWhereWithoutVehicleTypeInput[] | undefined;

  @Field(_type => [VehicleScalarWhereInput], {
    nullable: true
  })
  deleteMany?: VehicleScalarWhereInput[] | undefined;
}
