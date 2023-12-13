import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateWithoutVehiclesInput } from "../inputs/ModelCreateWithoutVehiclesInput";
import { ModelUpdateWithoutVehiclesInput } from "../inputs/ModelUpdateWithoutVehiclesInput";
import { ModelWhereInput } from "../inputs/ModelWhereInput";

@InputType("ModelUpsertWithoutVehiclesInput", {})
export class ModelUpsertWithoutVehiclesInput {
  @Field(_type => ModelUpdateWithoutVehiclesInput, {
    nullable: false
  })
  update!: ModelUpdateWithoutVehiclesInput;

  @Field(_type => ModelCreateWithoutVehiclesInput, {
    nullable: false
  })
  create!: ModelCreateWithoutVehiclesInput;

  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;
}
