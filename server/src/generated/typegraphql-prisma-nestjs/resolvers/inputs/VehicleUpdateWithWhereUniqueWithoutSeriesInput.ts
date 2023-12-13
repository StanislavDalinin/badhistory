import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUpdateWithoutSeriesInput } from "../inputs/VehicleUpdateWithoutSeriesInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpdateWithWhereUniqueWithoutSeriesInput", {})
export class VehicleUpdateWithWhereUniqueWithoutSeriesInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleUpdateWithoutSeriesInput, {
    nullable: false
  })
  data!: VehicleUpdateWithoutSeriesInput;
}
