import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUpdateWithoutVehicleTypeInput } from "../inputs/VehicleUpdateWithoutVehicleTypeInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput", {})
export class VehicleUpdateWithWhereUniqueWithoutVehicleTypeInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleUpdateWithoutVehicleTypeInput, {
    nullable: false
  })
  data!: VehicleUpdateWithoutVehicleTypeInput;
}
