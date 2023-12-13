import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotUnprocessedCreateInput } from "../inputs/LotUnprocessedCreateInput";

@InputType("LotUnprocessedCreateEnvelopeInput", {})
export class LotUnprocessedCreateEnvelopeInput {
  @Field(_type => LotUnprocessedCreateInput, {
    nullable: true
  })
  set?: LotUnprocessedCreateInput | undefined;
}
