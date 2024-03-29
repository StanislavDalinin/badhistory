import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeCreateNestedOneWithoutModelsInput } from "../inputs/MakeCreateNestedOneWithoutModelsInput";
import { SeriesCreateNestedManyWithoutModelInput } from "../inputs/SeriesCreateNestedManyWithoutModelInput";

@InputType("ModelCreateWithoutVehiclesInput", {})
export class ModelCreateWithoutVehiclesInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @Field(_type => Date, {
    nullable: true
  })
  deleted?: Date | undefined;

  @Field(_type => MakeCreateNestedOneWithoutModelsInput, {
    nullable: false
  })
  make!: MakeCreateNestedOneWithoutModelsInput;

  @Field(_type => SeriesCreateNestedManyWithoutModelInput, {
    nullable: true
  })
  serieses?: SeriesCreateNestedManyWithoutModelInput | undefined;
}
