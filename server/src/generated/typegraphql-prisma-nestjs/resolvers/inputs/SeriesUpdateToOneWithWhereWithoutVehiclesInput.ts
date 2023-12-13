import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesUpdateWithoutVehiclesInput } from "../inputs/SeriesUpdateWithoutVehiclesInput";
import { SeriesWhereInput } from "../inputs/SeriesWhereInput";

@InputType("SeriesUpdateToOneWithWhereWithoutVehiclesInput", {})
export class SeriesUpdateToOneWithWhereWithoutVehiclesInput {
  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  where?: SeriesWhereInput | undefined;

  @Field(_type => SeriesUpdateWithoutVehiclesInput, {
    nullable: false
  })
  data!: SeriesUpdateWithoutVehiclesInput;
}
