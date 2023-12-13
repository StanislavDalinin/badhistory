import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateWithoutVehicleTypeInput } from "../inputs/VehicleCreateWithoutVehicleTypeInput";
import { VehicleUpdateWithoutVehicleTypeInput } from "../inputs/VehicleUpdateWithoutVehicleTypeInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput", {})
export class VehicleUpsertWithWhereUniqueWithoutVehicleTypeInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleUpdateWithoutVehicleTypeInput, {
    nullable: false
  })
  update!: VehicleUpdateWithoutVehicleTypeInput;

  @Field(_type => VehicleCreateWithoutVehicleTypeInput, {
    nullable: false
  })
  create!: VehicleCreateWithoutVehicleTypeInput;
}
