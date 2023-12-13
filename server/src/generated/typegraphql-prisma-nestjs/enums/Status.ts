import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum Status {
  idle = "idle",
  pending = "pending",
  aborted = "aborted",
  failed = "failed",
  succeeded = "succeeded"
}
registerEnumType(Status, {
  name: "Status",
  description: undefined,
});
