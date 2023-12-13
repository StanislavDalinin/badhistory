import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManyVehicleTypeInputEnvelope } from "../inputs/VehicleCreateManyVehicleTypeInputEnvelope";
import { VehicleCreateOrConnectWithoutVehicleTypeInput } from "../inputs/VehicleCreateOrConnectWithoutVehicleTypeInput";
import { VehicleCreateWithoutVehicleTypeInput } from "../inputs/VehicleCreateWithoutVehicleTypeInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleCreateNestedManyWithoutVehicleTypeInput", {})
export class VehicleCreateNestedManyWithoutVehicleTypeInput {
  @Field(_type => [VehicleCreateWithoutVehicleTypeInput], {
    nullable: true
  })
  create?: VehicleCreateWithoutVehicleTypeInput[] | undefined;

  @Field(_type => [VehicleCreateOrConnectWithoutVehicleTypeInput], {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutVehicleTypeInput[] | undefined;

  @Field(_type => VehicleCreateManyVehicleTypeInputEnvelope, {
    nullable: true
  })
  createMany?: VehicleCreateManyVehicleTypeInputEnvelope | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  connect?: VehicleWhereUniqueInput[] | undefined;
}
