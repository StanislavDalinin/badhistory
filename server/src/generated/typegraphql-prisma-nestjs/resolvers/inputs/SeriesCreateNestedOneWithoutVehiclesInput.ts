import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateOrConnectWithoutVehiclesInput } from "../inputs/SeriesCreateOrConnectWithoutVehiclesInput";
import { SeriesCreateWithoutVehiclesInput } from "../inputs/SeriesCreateWithoutVehiclesInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@InputType("SeriesCreateNestedOneWithoutVehiclesInput", {})
export class SeriesCreateNestedOneWithoutVehiclesInput {
  @Field(_type => SeriesCreateWithoutVehiclesInput, {
    nullable: true
  })
  create?: SeriesCreateWithoutVehiclesInput | undefined;

  @Field(_type => SeriesCreateOrConnectWithoutVehiclesInput, {
    nullable: true
  })
  connectOrCreate?: SeriesCreateOrConnectWithoutVehiclesInput | undefined;

  @Field(_type => SeriesWhereUniqueInput, {
    nullable: true
  })
  connect?: SeriesWhereUniqueInput | undefined;
}
