import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@InputType("VehicleSumOrderByAggregateInput", {})
export class VehicleSumOrderByAggregateInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  year?: "asc" | "desc" | undefined;
}
