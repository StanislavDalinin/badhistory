import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManySeriesInput } from "../inputs/VehicleCreateManySeriesInput";

@InputType("VehicleCreateManySeriesInputEnvelope", {})
export class VehicleCreateManySeriesInputEnvelope {
  @Field(_type => [VehicleCreateManySeriesInput], {
    nullable: false
  })
  data!: VehicleCreateManySeriesInput[];
}
