import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@ObjectType("VehicleCountAggregate", {})
export class VehicleCountAggregate {
  @Field(_type => Int, {
    nullable: false
  })
  id!: number;

  @Field(_type => Int, {
    nullable: false
  })
  vin!: number;

  @Field(_type => Int, {
    nullable: false
  })
  modelId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  seriesId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  vehicleTypeId!: number;

  @Field(_type => Int, {
    nullable: false
  })
  year!: number;

  @Field(_type => Int, {
    nullable: false
  })
  createdAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  updatedAt!: number;

  @Field(_type => Int, {
    nullable: false
  })
  deleted!: number;

  @Field(_type => Int, {
    nullable: false
  })
  _all!: number;
}
