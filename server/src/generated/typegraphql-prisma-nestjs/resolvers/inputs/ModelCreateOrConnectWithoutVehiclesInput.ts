import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateWithoutVehiclesInput } from "../inputs/ModelCreateWithoutVehiclesInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelCreateOrConnectWithoutVehiclesInput", {})
export class ModelCreateOrConnectWithoutVehiclesInput {
  @Field(_type => ModelWhereUniqueInput, {
    nullable: false
  })
  where!: ModelWhereUniqueInput;

  @Field(_type => ModelCreateWithoutVehiclesInput, {
    nullable: false
  })
  create!: ModelCreateWithoutVehiclesInput;
}