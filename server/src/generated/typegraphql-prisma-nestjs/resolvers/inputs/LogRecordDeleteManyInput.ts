import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordWhereInput } from "../inputs/LogRecordWhereInput";

@InputType("LogRecordDeleteManyInput", {})
export class LogRecordDeleteManyInput {
  @Field(_type => LogRecordWhereInput, {
    nullable: false
  })
  where!: LogRecordWhereInput;
}
