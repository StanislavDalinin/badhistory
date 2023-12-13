import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleTypeWhereInput } from "../inputs/VehicleTypeWhereInput";

@InputType("VehicleTypeNullableRelationFilter", {})
export class VehicleTypeNullableRelationFilter {
  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  is?: VehicleTypeWhereInput | undefined;

  @Field(_type => VehicleTypeWhereInput, {
    nullable: true
  })
  isNot?: VehicleTypeWhereInput | undefined;
}
