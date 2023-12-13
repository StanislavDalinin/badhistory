import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateManyMakeInput } from "../inputs/ModelCreateManyMakeInput";

@InputType("ModelCreateManyMakeInputEnvelope", {})
export class ModelCreateManyMakeInputEnvelope {
  @Field(_type => [ModelCreateManyMakeInput], {
    nullable: false
  })
  data!: ModelCreateManyMakeInput[];
}
