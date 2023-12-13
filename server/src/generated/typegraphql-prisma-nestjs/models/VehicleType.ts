import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Vehicle } from "../models/Vehicle";
import { VehicleTypeCount } from "../resolvers/outputs/VehicleTypeCount";

@ObjectType("VehicleType", {})
export class VehicleType {
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
  deleted?: Date | null;

  Vehicle?: Vehicle[];

  @Field(_type => VehicleTypeCount, {
    nullable: true
  })
  _count?: VehicleTypeCount | null;
}
