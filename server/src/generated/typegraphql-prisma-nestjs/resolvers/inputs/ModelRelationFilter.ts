import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelWhereInput } from "../inputs/ModelWhereInput";

@InputType("ModelRelationFilter", {})
export class ModelRelationFilter {
  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  is?: ModelWhereInput | undefined;

  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  isNot?: ModelWhereInput | undefined;
}
