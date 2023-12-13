import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { IntFilter } from "../inputs/IntFilter";
import { LotListRelationFilter } from "../inputs/LotListRelationFilter";
import { ModelRelationFilter } from "../inputs/ModelRelationFilter";
import { SeriesNullableRelationFilter } from "../inputs/SeriesNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { VehicleTypeNullableRelationFilter } from "../inputs/VehicleTypeNullableRelationFilter";
import { VehicleUnprocessedCompositeFilter } from "../inputs/VehicleUnprocessedCompositeFilter";
import { VehicleWhereInput } from "../inputs/VehicleWhereInput";

@InputType("VehicleWhereUniqueInput", {})
export class VehicleWhereUniqueInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => [VehicleWhereInput], {
    nullable: true
  })
  AND?: VehicleWhereInput[] | undefined;

  @Field(_type => [VehicleWhereInput], {
    nullable: true
  })
  OR?: VehicleWhereInput[] | undefined;

  @Field(_type => [VehicleWhereInput], {
    nullable: true
  })
  NOT?: VehicleWhereInput[] | undefined;

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

  @Field(_type => VehicleUnprocessedCompositeFilter, {
    nullable: true
  })
  unprocessed?: VehicleUnprocessedCompositeFilter | undefined;

  @Field(_type => ModelRelationFilter, {
    nullable: true
  })
  model?: ModelRelationFilter | undefined;

  @Field(_type => SeriesNullableRelationFilter, {
    nullable: true
  })
  series?: SeriesNullableRelationFilter | undefined;

  @Field(_type => VehicleTypeNullableRelationFilter, {
    nullable: true
  })
  vehicleType?: VehicleTypeNullableRelationFilter | undefined;

  @Field(_type => LotListRelationFilter, {
    nullable: true
  })
  lots?: LotListRelationFilter | undefined;
}
