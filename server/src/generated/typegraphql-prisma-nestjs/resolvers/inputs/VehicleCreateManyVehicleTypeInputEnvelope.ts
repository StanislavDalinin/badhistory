import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManyVehicleTypeInput } from "../inputs/VehicleCreateManyVehicleTypeInput";

@InputType("VehicleCreateManyVehicleTypeInputEnvelope", {})
export class VehicleCreateManyVehicleTypeInputEnvelope {
  @Field(_type => [VehicleCreateManyVehicleTypeInput], {
    nullable: false
  })
  data!: VehicleCreateManyVehicleTypeInput[];
}
