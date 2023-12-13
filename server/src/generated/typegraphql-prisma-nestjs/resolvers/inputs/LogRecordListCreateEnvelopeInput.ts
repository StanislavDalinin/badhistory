import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordCreateInput } from "../inputs/LogRecordCreateInput";

@InputType("LogRecordListCreateEnvelopeInput", {})
export class LogRecordListCreateEnvelopeInput {
  @Field(_type => [LogRecordCreateInput], {
    nullable: true
  })
  set?: LogRecordCreateInput[] | undefined;
}
