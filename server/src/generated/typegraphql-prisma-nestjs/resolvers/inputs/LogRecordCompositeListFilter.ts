import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordObjectEqualityInput } from "../inputs/LogRecordObjectEqualityInput";
import { LogRecordWhereInput } from "../inputs/LogRecordWhereInput";

@InputType("LogRecordCompositeListFilter", {})
export class LogRecordCompositeListFilter {
  @Field(_type => [LogRecordObjectEqualityInput], {
    nullable: true
  })
  equals?: LogRecordObjectEqualityInput[] | undefined;

  @Field(_type => LogRecordWhereInput, {
    nullable: true
  })
  every?: LogRecordWhereInput | undefined;

  @Field(_type => LogRecordWhereInput, {
    nullable: true
  })
  some?: LogRecordWhereInput | undefined;

  @Field(_type => LogRecordWhereInput, {
    nullable: true
  })
  none?: LogRecordWhereInput | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  isSet?: boolean | undefined;
}
