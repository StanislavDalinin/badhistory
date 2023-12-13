import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotOrderByRelationAggregateInput } from "../inputs/LotOrderByRelationAggregateInput";
import { ModelOrderByWithRelationInput } from "../inputs/ModelOrderByWithRelationInput";
import { SeriesOrderByWithRelationInput } from "../inputs/SeriesOrderByWithRelationInput";
import { VehicleTypeOrderByWithRelationInput } from "../inputs/VehicleTypeOrderByWithRelationInput";
import { VehicleUnprocessedOrderByInput } from "../inputs/VehicleUnprocessedOrderByInput";
import { SortOrder } from "../../enums/SortOrder";

@InputType("VehicleOrderByWithRelationInput", {})
export class VehicleOrderByWithRelationInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  vin?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  modelId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  seriesId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  vehicleTypeId?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  year?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  deleted?: "asc" | "desc" | undefined;

  @Field(_type => VehicleUnprocessedOrderByInput, {
    nullable: true
  })
  unprocessed?: VehicleUnprocessedOrderByInput | undefined;

  @Field(_type => ModelOrderByWithRelationInput, {
    nullable: true
  })
  model?: ModelOrderByWithRelationInput | undefined;

  @Field(_type => SeriesOrderByWithRelationInput, {
    nullable: true
  })
  series?: SeriesOrderByWithRelationInput | undefined;

  @Field(_type => VehicleTypeOrderByWithRelationInput, {
    nullable: true
  })
  vehicleType?: VehicleTypeOrderByWithRelationInput | undefined;

  @Field(_type => LotOrderByRelationAggregateInput, {
    nullable: true
  })
  lots?: LotOrderByRelationAggregateInput | undefined;
}
