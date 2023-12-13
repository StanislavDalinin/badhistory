import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLogRecordTypeFieldUpdateOperationsInput } from "../inputs/EnumLogRecordTypeFieldUpdateOperationsInput";

@InputType("LogRecordUpdateInput", {})
export class LogRecordUpdateInput {
  @Field(_type => EnumLogRecordTypeFieldUpdateOperationsInput, {
    nullable: true
  })
  type?: EnumLogRecordTypeFieldUpdateOperationsInput | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  value?: Prisma.InputJsonValue | undefined;
}
