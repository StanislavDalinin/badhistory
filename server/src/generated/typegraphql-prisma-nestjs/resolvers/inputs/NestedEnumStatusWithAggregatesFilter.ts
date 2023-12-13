import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumStatusFilter } from "../inputs/NestedEnumStatusFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { Status } from "../../enums/Status";

@InputType("NestedEnumStatusWithAggregatesFilter", {})
export class NestedEnumStatusWithAggregatesFilter {
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

  @Field(_type => NestedEnumStatusWithAggregatesFilter, {
    nullable: true
  })
  not?: NestedEnumStatusWithAggregatesFilter | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  _min?: NestedEnumStatusFilter | undefined;

  @Field(_type => NestedEnumStatusFilter, {
    nullable: true
  })
  _max?: NestedEnumStatusFilter | undefined;
}
