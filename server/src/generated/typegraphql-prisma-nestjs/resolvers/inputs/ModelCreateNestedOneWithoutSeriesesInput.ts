import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateOrConnectWithoutSeriesesInput } from "../inputs/ModelCreateOrConnectWithoutSeriesesInput";
import { ModelCreateWithoutSeriesesInput } from "../inputs/ModelCreateWithoutSeriesesInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelCreateNestedOneWithoutSeriesesInput", {})
export class ModelCreateNestedOneWithoutSeriesesInput {
  @Field(_type => ModelCreateWithoutSeriesesInput, {
    nullable: true
  })
  create?: ModelCreateWithoutSeriesesInput | undefined;

  @Field(_type => ModelCreateOrConnectWithoutSeriesesInput, {
    nullable: true
  })
  connectOrCreate?: ModelCreateOrConnectWithoutSeriesesInput | undefined;

  @Field(_type => ModelWhereUniqueInput, {
    nullable: true
  })
  connect?: ModelWhereUniqueInput | undefined;
}
