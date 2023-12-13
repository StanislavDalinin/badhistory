import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateWithoutSeriesesInput } from "../inputs/ModelCreateWithoutSeriesesInput";
import { ModelUpdateWithoutSeriesesInput } from "../inputs/ModelUpdateWithoutSeriesesInput";
import { ModelWhereInput } from "../inputs/ModelWhereInput";

@InputType("ModelUpsertWithoutSeriesesInput", {})
export class ModelUpsertWithoutSeriesesInput {
  @Field(_type => ModelUpdateWithoutSeriesesInput, {
    nullable: false
  })
  update!: ModelUpdateWithoutSeriesesInput;

  @Field(_type => ModelCreateWithoutSeriesesInput, {
    nullable: false
  })
  create!: ModelCreateWithoutSeriesesInput;

  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;
}
