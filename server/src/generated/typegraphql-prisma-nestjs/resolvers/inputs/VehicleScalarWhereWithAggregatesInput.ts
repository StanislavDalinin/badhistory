import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeNullableWithAggregatesFilter } from "../inputs/DateTimeNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@InputType("VehicleScalarWhereWithAggregatesInput", {})
export class VehicleScalarWhereWithAggregatesInput {
  @Field(_type => [VehicleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: VehicleScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [VehicleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: VehicleScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => [VehicleScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: VehicleScalarWhereWithAggregatesInput[] | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  vin?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  modelId?: StringWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  seriesId?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  vehicleTypeId?: StringNullableWithAggregatesFilter | undefined;

  @Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  year?: IntWithAggregatesFilter | undefined;

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
