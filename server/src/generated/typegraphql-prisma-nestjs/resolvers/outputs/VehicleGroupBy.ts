import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleAvgAggregate } from "../outputs/VehicleAvgAggregate";
import { VehicleCountAggregate } from "../outputs/VehicleCountAggregate";
import { VehicleMaxAggregate } from "../outputs/VehicleMaxAggregate";
import { VehicleMinAggregate } from "../outputs/VehicleMinAggregate";
import { VehicleSumAggregate } from "../outputs/VehicleSumAggregate";

@ObjectType("VehicleGroupBy", {})
export class VehicleGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  vin!: string | null;

  @Field(_type => String, {
    nullable: false
  })
  modelId!: string;

  @Field(_type => String, {
    nullable: true
  })
  seriesId!: string | null;

  @Field(_type => String, {
    nullable: true
  })
  vehicleTypeId!: string | null;

  @Field(_type => Int, {
    nullable: false
  })
  year!: number;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;

  @Field(_type => VehicleCountAggregate, {
    nullable: true
  })
  _count!: VehicleCountAggregate | null;

  @Field(_type => VehicleAvgAggregate, {
    nullable: true
  })
  _avg!: VehicleAvgAggregate | null;

  @Field(_type => VehicleSumAggregate, {
    nullable: true
  })
  _sum!: VehicleSumAggregate | null;

  @Field(_type => VehicleMinAggregate, {
    nullable: true
  })
  _min!: VehicleMinAggregate | null;

  @Field(_type => VehicleMaxAggregate, {
    nullable: true
  })
  _max!: VehicleMaxAggregate | null;
}
