import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCountAggregate } from "../outputs/VehicleTypeCountAggregate";
import { VehicleTypeMaxAggregate } from "../outputs/VehicleTypeMaxAggregate";
import { VehicleTypeMinAggregate } from "../outputs/VehicleTypeMinAggregate";

@ObjectType("AggregateVehicleType", {})
export class AggregateVehicleType {
  @Field(_type => VehicleTypeCountAggregate, {
    nullable: true
  })
  _count!: VehicleTypeCountAggregate | null;

  @Field(_type => VehicleTypeMinAggregate, {
    nullable: true
  })
  _min!: VehicleTypeMinAggregate | null;

  @Field(_type => VehicleTypeMaxAggregate, {
    nullable: true
  })
  _max!: VehicleTypeMaxAggregate | null;
}
