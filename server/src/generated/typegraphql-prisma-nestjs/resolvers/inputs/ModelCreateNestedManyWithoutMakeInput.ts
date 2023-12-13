import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateManyMakeInputEnvelope } from "../inputs/ModelCreateManyMakeInputEnvelope";
import { ModelCreateOrConnectWithoutMakeInput } from "../inputs/ModelCreateOrConnectWithoutMakeInput";
import { ModelCreateWithoutMakeInput } from "../inputs/ModelCreateWithoutMakeInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelCreateNestedManyWithoutMakeInput", {})
export class ModelCreateNestedManyWithoutMakeInput {
  @Field(_type => [ModelCreateWithoutMakeInput], {
    nullable: true
  })
  create?: ModelCreateWithoutMakeInput[] | undefined;

  @Field(_type => [ModelCreateOrConnectWithoutMakeInput], {
    nullable: true
  })
  connectOrCreate?: ModelCreateOrConnectWithoutMakeInput[] | undefined;

  @Field(_type => ModelCreateManyMakeInputEnvelope, {
    nullable: true
  })
  createMany?: ModelCreateManyMakeInputEnvelope | undefined;

  @Field(_type => [ModelWhereUniqueInput], {
    nullable: true
  })
  connect?: ModelWhereUniqueInput[] | undefined;
}
