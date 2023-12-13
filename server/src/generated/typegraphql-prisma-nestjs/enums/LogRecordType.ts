import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum LogRecordType {
  info = "info",
  warn = "warn"
}
registerEnumType(LogRecordType, {
  name: "LogRecordType",
  description: undefined,
});
