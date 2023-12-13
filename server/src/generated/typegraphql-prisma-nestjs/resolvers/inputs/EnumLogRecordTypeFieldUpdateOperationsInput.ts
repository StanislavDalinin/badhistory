import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordType } from "../../enums/LogRecordType";

@InputType("EnumLogRecordTypeFieldUpdateOperationsInput", {})
export class EnumLogRecordTypeFieldUpdateOperationsInput {
  @Field(_type => LogRecordType, {
    nullable: true
  })
  set?: "info" | "warn" | undefined;
}
