import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@InputType("VehicleScalarWhereInput", {})
export class VehicleScalarWhereInput {
  @Field(_type => [VehicleScalarWhereInput], {
    nullable: true
  })
  AND?: VehicleScalarWhereInput[] | undefined;

  @Field(_type => [VehicleScalarWhereInput], {
    nullable: true
  })
  OR?: VehicleScalarWhereInput[] | undefined;

  @Field(_type => [VehicleScalarWhereInput], {
    nullable: true
  })
  NOT?: VehicleScalarWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  vin?: StringNullableFilter | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  modelId?: StringFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  seriesId?: StringNullableFilter | undefined;

  @Field(_type => StringNullableFilter, {
    nullable: true
  })
  vehicleTypeId?: StringNullableFilter | undefined;

  @Field(_type => IntFilter, {
    nullable: true
  })
  year?: IntFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  deleted?: DateTimeNullableFilter | undefined;
}
