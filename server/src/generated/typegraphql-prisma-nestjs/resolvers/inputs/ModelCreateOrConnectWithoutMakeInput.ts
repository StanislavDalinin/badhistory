import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateWithoutMakeInput } from "../inputs/ModelCreateWithoutMakeInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelCreateOrConnectWithoutMakeInput", {})
export class ModelCreateOrConnectWithoutMakeInput {
  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;

  @Field(_type => ModelCreateWithoutMakeInput, {
    nullable: false
  })
  create!: ModelCreateWithoutMakeInput;
}
