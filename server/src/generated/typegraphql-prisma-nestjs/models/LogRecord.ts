import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { LogRecordType } from "../enums/LogRecordType";

@ObjectType("LogRecord", {})
export class LogRecord {
  @Field(_type => LogRecordType, {
    nullable: false
  })
  type!: "info" | "warn";

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  value!: Prisma.JsonValue;
}
