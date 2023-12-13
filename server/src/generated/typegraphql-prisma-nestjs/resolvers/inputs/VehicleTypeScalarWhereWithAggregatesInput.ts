import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("VehicleTypeScalarWhereWithAggregatesInput", {})
export class VehicleTypeScalarWhereWithAggregatesInput {
  @Field(_type => [VehicleTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VehicleTypeScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [VehicleTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VehicleTypeScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [VehicleTypeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VehicleTypeScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;

  @Field(_type => DateTimeNullableWithAggregatesFilter, {
    nullable: true
  })
  deleted?: DateTimeNullableWithAggregatesFilter | undefined;
}
