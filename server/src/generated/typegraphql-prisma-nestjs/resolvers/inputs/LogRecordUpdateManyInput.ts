import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LogRecordUpdateInput } from "../inputs/LogRecordUpdateInput";
import { LogRecordWhereInput } from "../inputs/LogRecordWhereInput";

@InputType("LogRecordUpdateManyInput", {})
export class LogRecordUpdateManyInput {
  @Field(_type => LogRecordWhereInput, {
    nullable: false
  })
  where!: LogRecordWhereInput;

  @Field(_type => LogRecordUpdateInput, {
    nullable: false
  })
  data!: LogRecordUpdateInput;
}
