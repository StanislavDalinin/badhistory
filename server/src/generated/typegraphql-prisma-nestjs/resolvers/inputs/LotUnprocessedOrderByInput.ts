import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@InputType("LotUnprocessedOrderByInput", {})
export class LotUnprocessedOrderByInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  leftTrans?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  prebidClosedTrans?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  buyNowCloseTime?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  soldBefore?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  status?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  imgs?: "asc" | "desc" | undefined;
}
