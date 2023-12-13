import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotWhereInput } from "../inputs/LotWhereInput";

@InputType("LotListRelationFilter", {})
export class LotListRelationFilter {
  @Field(_type => LotWhereInput, {
    nullable: true
  })
  every?: LotWhereInput | undefined;

  @Field(_type => LotWhereInput, {
    nullable: true
  })
  some?: LotWhereInput | undefined;

  @Field(_type => LotWhereInput, {
    nullable: true
  })
  none?: LotWhereInput | undefined;
}
