import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUnprocessedCreateEnvelopeInput } from "../inputs/VehicleUnprocessedCreateEnvelopeInput";

@InputType("VehicleCreateManyModelInput", {})
export class VehicleCreateManyModelInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  vin?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  seriesId?: string | undefined;

  @Field(_type => String, {
    nullable: true
  })
  vehicleTypeId?: string | undefined;

  @Field(_type => Int, {
    nullable: false
  })
  year!: number;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  deleted?: Date | undefined;

  @Field(_type => VehicleUnprocessedCreateEnvelopeInput, {
    nullable: false
  })
  unprocessed!: VehicleUnprocessedCreateEnvelopeInput;
}
