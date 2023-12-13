import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelUpdateWithoutMakeInput } from "../inputs/ModelUpdateWithoutMakeInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelUpdateWithWhereUniqueWithoutMakeInput", {})
export class ModelUpdateWithWhereUniqueWithoutMakeInput {
  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;

  @Field(_type => ModelUpdateWithoutMakeInput, {
    nullable: false
  })
  data!: ModelUpdateWithoutMakeInput;
}
