import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum MakeScalarFieldEnum {
  id = "id",
  name = "name",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt"
}
registerEnumType(MakeScalarFieldEnum, {
  name: "MakeScalarFieldEnum",
  description: undefined,
});
