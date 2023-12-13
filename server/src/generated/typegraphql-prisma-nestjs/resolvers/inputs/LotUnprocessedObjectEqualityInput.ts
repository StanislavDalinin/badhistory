import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@InputType("LotUnprocessedObjectEqualityInput", {})
export class LotUnprocessedObjectEqualityInput {
  @Field(_type => String, {
    nullable: false
  })
  leftTrans!: string;

  @Field(_type => String, {
    nullable: false
  })
  prebidClosedTrans!: string;

  @Field(_type => Date, {
    nullable: true
  })
  buyNowCloseTime?: Date | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  soldBefore?: number | undefined;

  @Field(_type => Int, {
    nullable: false
  })
  status!: number;

  @Field(_type => [String], {
    nullable: true
  })
  imgs?: string[] | undefined;
}
