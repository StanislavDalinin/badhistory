import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum SeriesScalarFieldEnum {
  id = "id",
  modelId = "modelId",
  name = "name",
  minYear = "minYear",
  maxYear = "maxYear",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deleted = "deleted"
}
registerEnumType(SeriesScalarFieldEnum, {
  name: "SeriesScalarFieldEnum",
  description: undefined,
});
