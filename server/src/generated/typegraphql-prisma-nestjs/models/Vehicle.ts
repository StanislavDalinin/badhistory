import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Lot } from "../models/Lot";
import { Model } from "../models/Model";
import { Series } from "../models/Series";
import { VehicleType } from "../models/VehicleType";
import { VehicleUnprocessed } from "../models/VehicleUnprocessed";
import { VehicleCount } from "../resolvers/outputs/VehicleCount";

@ObjectType("Vehicle", {})
export class Vehicle {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: true
  })
  vin?: string | null;

  model?: Model;

  @Field(_type => String, {
    nullable: false
  })
  modelId!: string;

  @Field(_type => String, {
    nullable: true
  })
  seriesId?: string | null;

  series?: Series | null;

  vehicleType?: VehicleType | null;

  @Field(_type => String, {
    nullable: true
  })
  vehicleTypeId?: string | null;

  @Field(_type => Int, {
    nullable: false
  })
  year!: number;

  lots?: Lot[];

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
  deleted?: Date | null;

  @Field(_type => VehicleUnprocessed, {
    nullable: false
  })
  unprocessed!: VehicleUnprocessed;

  @Field(_type => VehicleCount, {
    nullable: true
  })
  _count?: VehicleCount | null;
}
