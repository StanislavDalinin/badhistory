import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeWhereInput } from "../inputs/MakeWhereInput";

@InputType("MakeRelationFilter", {})
export class MakeRelationFilter {
  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  is?: MakeWhereInput | undefined;

  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  isNot?: MakeWhereInput | undefined;
}
