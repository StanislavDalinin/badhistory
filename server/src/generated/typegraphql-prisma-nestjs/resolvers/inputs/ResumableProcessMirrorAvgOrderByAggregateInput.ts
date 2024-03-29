import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SortOrder } from "../../enums/SortOrder";

@InputType("ResumableProcessMirrorAvgOrderByAggregateInput", {})
export class ResumableProcessMirrorAvgOrderByAggregateInput {
  @Field(_type => SortOrder, {
    nullable: true
  })
  parentProcessStep?: "asc" | "desc" | undefined;

  @Field(_type => SortOrder, {
    nullable: true
  })
  currentStep?: "asc" | "desc" | undefined;
}
