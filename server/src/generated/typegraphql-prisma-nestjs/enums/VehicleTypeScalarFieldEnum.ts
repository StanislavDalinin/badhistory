import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum VehicleTypeScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deleted = "deleted"
}
registerEnumType(VehicleTypeScalarFieldEnum, {
  name: "VehicleTypeScalarFieldEnum",
  description: undefined,
});
