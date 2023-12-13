import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Status } from "../../enums/Status";

@InputType("NestedEnumStatusFilter", {})
export class NestedEnumStatusFilter {
  @Field(_type => Status, {
    nullable: true
  })
  equals?: "idle" | "pending" | "aborted" | "failed" | "succeeded" | undefined;

  @Field(_type => [Status], {
    nullable: true
  })
  in?: Array<"idle" | "pending" | "aborted" | "failed" | "succeeded"> | undefined;

  @Field(_type => [Status], {
    nullable: true
  })
  notIn?: Array<"idle" | "pending" | "aborted" | "failed" | "succeeded"> | undefined;

  @Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  not?: NestedEnumStatusFilter | undefined;
}
