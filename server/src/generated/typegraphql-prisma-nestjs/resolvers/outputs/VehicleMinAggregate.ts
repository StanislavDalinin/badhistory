import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("VehicleMinAggregate", {})
export class VehicleMinAggregate {
  @Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  vin!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  modelId!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  seriesId!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  vehicleTypeId!: string | null;

  @Field(_type => Int, {
    nullable: true
  })
  year!: number | null;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt!: Date | null;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;
}
