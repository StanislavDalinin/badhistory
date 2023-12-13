import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotUnprocessedObjectEqualityInput } from "../inputs/LotUnprocessedObjectEqualityInput";
import { LotUnprocessedWhereInput } from "../inputs/LotUnprocessedWhereInput";

@InputType("LotUnprocessedCompositeFilter", {})
export class LotUnprocessedCompositeFilter {
  @Field(_type => LotUnprocessedObjectEqualityInput, {
    nullable: true
  })
  equals?: LotUnprocessedObjectEqualityInput | undefined;

  @Field(_type => LotUnprocessedWhereInput, {
    nullable: true
  })
  is?: LotUnprocessedWhereInput | undefined;

  @Field(_type => LotUnprocessedWhereInput, {
    nullable: true
  })
  isNot?: LotUnprocessedWhereInput | undefined;
}
