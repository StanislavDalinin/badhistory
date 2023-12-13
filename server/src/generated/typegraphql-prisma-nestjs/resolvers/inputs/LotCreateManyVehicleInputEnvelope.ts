import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotCreateManyVehicleInput } from "../inputs/LotCreateManyVehicleInput";

@InputType("LotCreateManyVehicleInputEnvelope", {})
export class LotCreateManyVehicleInputEnvelope {
  @Field(_type => [LotCreateManyVehicleInput], {
    nullable: false
  })
  data!: LotCreateManyVehicleInput[];
}
