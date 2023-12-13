import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum ModelScalarFieldEnum {
  id = "id",
  makeId = "makeId",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deleted = "deleted"
}
registerEnumType(ModelScalarFieldEnum, {
  name: "ModelScalarFieldEnum",
  description: undefined,
});
