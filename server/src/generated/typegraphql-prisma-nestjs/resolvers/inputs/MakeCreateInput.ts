import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateNestedManyWithoutMakeInput } from "../inputs/ModelCreateNestedManyWithoutMakeInput";

@InputType("MakeCreateInput", {})
export class MakeCreateInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @Field(_type => ModelCreateNestedManyWithoutMakeInput, {
    nullable: true
  })
  models?: ModelCreateNestedManyWithoutMakeInput | undefined;
}
