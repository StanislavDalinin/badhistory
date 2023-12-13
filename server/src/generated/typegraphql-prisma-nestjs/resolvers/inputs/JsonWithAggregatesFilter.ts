import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
import { NestedJsonFilter } from "../inputs/NestedJsonFilter";

@InputType("JsonWithAggregatesFilter", {})
export class JsonWithAggregatesFilter {
  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  equals?: Prisma.InputJsonValue | undefined;

  @Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  not?: Prisma.InputJsonValue | undefined;

  @Field(_type => NestedIntFilter, {
    nullable: true
  })
  _count?: NestedIntFilter | undefined;

  @Field(_type => NestedJsonFilter, {
    nullable: true
  })
  _min?: NestedJsonFilter | undefined;

  @Field(_type => NestedJsonFilter, {
    nullable: true
  })
  _max?: NestedJsonFilter | undefined;
}
