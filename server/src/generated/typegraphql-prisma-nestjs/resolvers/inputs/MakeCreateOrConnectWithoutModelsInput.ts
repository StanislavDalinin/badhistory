import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeCreateWithoutModelsInput } from "../inputs/MakeCreateWithoutModelsInput";
import { MakeWhereUniqueInput } from "../inputs/MakeWhereUniqueInput";

@InputType("MakeCreateOrConnectWithoutModelsInput", {})
export class MakeCreateOrConnectWithoutModelsInput {
  @Field(_type => MakeWhereUniqueInput, {
    nullable: false
  })
  where!: MakeWhereUniqueInput;

  @Field(_type => MakeCreateWithoutModelsInput, {
    nullable: false
  })
  create!: MakeCreateWithoutModelsInput;
}
