import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EnumLogRecordTypeFilter } from "../inputs/EnumLogRecordTypeFilter";
import { JsonFilter } from "../inputs/JsonFilter";

@InputType("LogRecordWhereInput", {})
export class LogRecordWhereInput {
  @Field(_type => [LogRecordWhereInput], {
    nullable: true
  })
  AND?: LogRecordWhereInput[] | undefined;

  @Field(_type => [LogRecordWhereInput], {
    nullable: true
  })
  OR?: LogRecordWhereInput[] | undefined;

  @Field(_type => [LogRecordWhereInput], {
    nullable: true
  })
  NOT?: LogRecordWhereInput[] | undefined;

  @Field(_type => EnumLogRecordTypeFilter, {
    nullable: true
  })
  type?: EnumLogRecordTypeFilter | undefined;

  @Field(_type => JsonFilter, {
    nullable: true
  })
  value?: JsonFilter | undefined;
}
