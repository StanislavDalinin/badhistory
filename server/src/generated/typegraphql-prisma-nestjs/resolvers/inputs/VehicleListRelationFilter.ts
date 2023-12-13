import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleWhereInput } from "../inputs/VehicleWhereInput";

@InputType("VehicleListRelationFilter", {})
export class VehicleListRelationFilter {
  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  every?: VehicleWhereInput | undefined;

  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  some?: VehicleWhereInput | undefined;

  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  none?: VehicleWhereInput | undefined;
}
