import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateWithoutVehiclesInput } from "../inputs/SeriesCreateWithoutVehiclesInput";
import { SeriesUpdateWithoutVehiclesInput } from "../inputs/SeriesUpdateWithoutVehiclesInput";
import { SeriesWhereInput } from "../inputs/SeriesWhereInput";

@InputType("SeriesUpsertWithoutVehiclesInput", {})
export class SeriesUpsertWithoutVehiclesInput {
  @Field(_type => SeriesUpdateWithoutVehiclesInput, {
    nullable: false
  })
  update!: SeriesUpdateWithoutVehiclesInput;

  @Field(_type => SeriesCreateWithoutVehiclesInput, {
    nullable: false
  })
  create!: SeriesCreateWithoutVehiclesInput;

  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  where?: SeriesWhereInput | undefined;
}
