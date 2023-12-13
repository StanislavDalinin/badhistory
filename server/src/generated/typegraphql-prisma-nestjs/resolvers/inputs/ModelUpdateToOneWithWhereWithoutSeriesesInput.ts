import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelUpdateWithoutSeriesesInput } from "../inputs/ModelUpdateWithoutSeriesesInput";
import { ModelWhereInput } from "../inputs/ModelWhereInput";

@InputType("ModelUpdateToOneWithWhereWithoutSeriesesInput", {})
export class ModelUpdateToOneWithWhereWithoutSeriesesInput {
  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;

  @Field(_type => ModelUpdateWithoutSeriesesInput, {
    nullable: false
  })
  data!: ModelUpdateWithoutSeriesesInput;
}
