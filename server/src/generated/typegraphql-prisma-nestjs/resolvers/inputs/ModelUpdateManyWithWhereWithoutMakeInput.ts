import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelScalarWhereInput } from "../inputs/ModelScalarWhereInput";
import { ModelUpdateManyMutationInput } from "../inputs/ModelUpdateManyMutationInput";

@InputType("ModelUpdateManyWithWhereWithoutMakeInput", {})
export class ModelUpdateManyWithWhereWithoutMakeInput {
  @Field(_type => ModelScalarWhereInput, {
    nullable: false
  })
  where!: ModelScalarWhereInput;

  @Field(_type => ModelUpdateManyMutationInput, {
    nullable: false
  })
  data!: ModelUpdateManyMutationInput;
}
