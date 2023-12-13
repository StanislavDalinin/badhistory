import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateNestedOneWithoutSeriesesInput } from "../inputs/ModelCreateNestedOneWithoutSeriesesInput";
import { VehicleCreateNestedManyWithoutSeriesInput } from "../inputs/VehicleCreateNestedManyWithoutSeriesInput";

@InputType("SeriesCreateInput", {})
export class SeriesCreateInput {
  @Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => Int, {
    nullable: false
  })
  minYear!: number;

  @Field(_type => Int, {
    nullable: false
  })
  maxYear!: number;

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

  @Field(_type => ModelCreateNestedOneWithoutSeriesesInput, {
    nullable: false
  })
  model!: ModelCreateNestedOneWithoutSeriesesInput;

  @Field(_type => VehicleCreateNestedManyWithoutSeriesInput, {
    nullable: true
  })
  vehicles?: VehicleCreateNestedManyWithoutSeriesInput | undefined;
}
