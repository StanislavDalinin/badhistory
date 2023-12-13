import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeCountAggregate } from "../outputs/VehicleTypeCountAggregate";
import { VehicleTypeMaxAggregate } from "../outputs/VehicleTypeMaxAggregate";
import { VehicleTypeMinAggregate } from "../outputs/VehicleTypeMinAggregate";

@ObjectType("VehicleTypeGroupBy", {})
export class VehicleTypeGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

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
