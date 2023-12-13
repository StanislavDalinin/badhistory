import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCreateOrConnectWithoutVehicleInput } from "../inputs/VehicleTypeCreateOrConnectWithoutVehicleInput";
import { VehicleTypeCreateWithoutVehicleInput } from "../inputs/VehicleTypeCreateWithoutVehicleInput";
import { VehicleTypeUpdateToOneWithWhereWithoutVehicleInput } from "../inputs/VehicleTypeUpdateToOneWithWhereWithoutVehicleInput";
import { VehicleTypeUpsertWithoutVehicleInput } from "../inputs/VehicleTypeUpsertWithoutVehicleInput";
import { VehicleTypeWhereInput } from "../inputs/VehicleTypeWhereInput";
import { VehicleTypeWhereUniqueInput } from "../inputs/VehicleTypeWhereUniqueInput";

@InputType("VehicleTypeUpdateOneWithoutVehicleNestedInput", {})
export class VehicleTypeUpdateOneWithoutVehicleNestedInput {
  @Field(_type => VehicleTypeCreateWithoutVehicleInput, {
    nullable: true
  })
  create?: VehicleTypeCreateWithoutVehicleInput | undefined;

  @Field(_type => VehicleTypeCreateOrConnectWithoutVehicleInput, {
    nullable: true
  })
  connectOrCreate?: VehicleTypeCreateOrConnectWithoutVehicleInput | undefined;

  @Field(_type => VehicleTypeUpsertWithoutVehicleInput, {
    nullable: true
  })
  upsert?: VehicleTypeUpsertWithoutVehicleInput | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  delete?: VehicleTypeWhereInput | undefined;

  @Field(_type => VehicleTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: VehicleTypeWhereUniqueInput | undefined;

  @Field(_type => VehicleTypeUpdateToOneWithWhereWithoutVehicleInput, {
    nullable: true
  })
  update?: VehicleTypeUpdateToOneWithWhereWithoutVehicleInput | undefined;
}
