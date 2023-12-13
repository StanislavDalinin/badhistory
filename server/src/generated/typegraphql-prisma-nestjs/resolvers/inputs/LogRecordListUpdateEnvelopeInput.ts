import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordCreateInput } from "../inputs/LogRecordCreateInput";
import { LogRecordDeleteManyInput } from "../inputs/LogRecordDeleteManyInput";
import { LogRecordUpdateManyInput } from "../inputs/LogRecordUpdateManyInput";

@InputType("LogRecordListUpdateEnvelopeInput", {})
export class LogRecordListUpdateEnvelopeInput {
  @Field(_type => [LogRecordCreateInput], {
    nullable: true
  })
  set?: LogRecordCreateInput[] | undefined;

  @Field(_type => [LogRecordCreateInput], {
    nullable: true
  })
  push?: LogRecordCreateInput[] | undefined;

  @Field(_type => LogRecordUpdateManyInput, {
    nullable: true
  })
  updateMany?: LogRecordUpdateManyInput | undefined;

  @Field(_type => LogRecordDeleteManyInput, {
    nullable: true
  })
  deleteMany?: LogRecordDeleteManyInput | undefined;
}
