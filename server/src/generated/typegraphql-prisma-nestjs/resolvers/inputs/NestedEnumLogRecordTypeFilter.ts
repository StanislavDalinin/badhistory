import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordType } from "../../enums/LogRecordType";

@InputType("NestedEnumLogRecordTypeFilter", {})
export class NestedEnumLogRecordTypeFilter {
  @Field(_type => LogRecordType, {
    nullable: true
  })
  equals?: "info" | "warn" | undefined;

  @Field(_type => [LogRecordType], {
    nullable: true
  })
  in?: Array<"info" | "warn"> | undefined;

  @Field(_type => [LogRecordType], {
    nullable: true
  })
  notIn?: Array<"info" | "warn"> | undefined;

  @Field(_type => NestedEnumLogRecordTypeFilter, {
    nullable: true
  })
  not?: NestedEnumLogRecordTypeFilter | undefined;
}
