import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelWhereInput } from "../inputs/ModelWhereInput";

@InputType("ModelListRelationFilter", {})
export class ModelListRelationFilter {
  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  every?: ModelWhereInput | undefined;

  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  some?: ModelWhereInput | undefined;

  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  none?: ModelWhereInput | undefined;
}
