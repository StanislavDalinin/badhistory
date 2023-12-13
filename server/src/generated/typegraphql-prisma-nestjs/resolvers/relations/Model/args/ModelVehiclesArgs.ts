import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleOrderByWithRelationInput } from "../../../inputs/VehicleOrderByWithRelationInput";
import { VehicleWhereInput } from "../../../inputs/VehicleWhereInput";
import { VehicleWhereUniqueInput } from "../../../inputs/VehicleWhereUniqueInput";
import { VehicleScalarFieldEnum } from "../../../../enums/VehicleScalarFieldEnum";

@ArgsType()
export class ModelVehiclesArgs {
  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  where?: VehicleWhereInput | undefined;

  @Field(_type => [VehicleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VehicleOrderByWithRelationInput[] | undefined;

  @Field(_type => VehicleWhereUniqueInput, {
    nullable: true
  })
  cursor?: VehicleWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [VehicleScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "vin" | "modelId" | "seriesId" | "vehicleTypeId" | "year" | "createdAt" | "updatedAt" | "deleted"> | undefined;
}
