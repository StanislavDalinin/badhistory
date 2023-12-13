import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum VehicleScalarFieldEnum {
  id = "id",
  vin = "vin",
  modelId = "modelId",
  seriesId = "seriesId",
  vehicleTypeId = "vehicleTypeId",
  year = "year",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deleted = "deleted"
}
registerEnumType(VehicleScalarFieldEnum, {
  name: "VehicleScalarFieldEnum",
  description: undefined,
});
