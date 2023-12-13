import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelUpdateWithoutVehiclesInput } from "../inputs/ModelUpdateWithoutVehiclesInput";
import { ModelWhereInput } from "../inputs/ModelWhereInput";

@InputType("ModelUpdateToOneWithWhereWithoutVehiclesInput", {})
export class ModelUpdateToOneWithWhereWithoutVehiclesInput {
  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;

  @Field(_type => ModelUpdateWithoutVehiclesInput, {
    nullable: false
  })
  data!: ModelUpdateWithoutVehiclesInput;
}
