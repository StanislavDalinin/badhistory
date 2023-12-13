import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateWithoutSeriesesInput } from "../inputs/ModelCreateWithoutSeriesesInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelCreateOrConnectWithoutSeriesesInput", {})
export class ModelCreateOrConnectWithoutSeriesesInput {
  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;

  @Field(_type => ModelCreateWithoutSeriesesInput, {
    nullable: false
  })
  create!: ModelCreateWithoutSeriesesInput;
}
