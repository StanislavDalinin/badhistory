import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum ResumableProcessMirrorScalarFieldEnum {
  id = "id",
  parentProcessId = "parentProcessId",
  parentProcessStep = "parentProcessStep",
  parentProcessStepKey = "parentProcessStepKey",
  type = "type",
  status = "status",
  currentStep = "currentStep",
  props = "props",
  state = "state",
  result = "result",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deleted = "deleted"
}
registerEnumType(ResumableProcessMirrorScalarFieldEnum, {
  name: "ResumableProcessMirrorScalarFieldEnum",
  description: undefined,
});
