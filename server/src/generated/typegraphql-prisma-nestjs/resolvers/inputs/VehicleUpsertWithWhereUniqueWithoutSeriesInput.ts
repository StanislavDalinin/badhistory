import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateWithoutSeriesInput } from "../inputs/VehicleCreateWithoutSeriesInput";
import { VehicleUpdateWithoutSeriesInput } from "../inputs/VehicleUpdateWithoutSeriesInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpsertWithWhereUniqueWithoutSeriesInput", {})
export class VehicleUpsertWithWhereUniqueWithoutSeriesInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleUpdateWithoutSeriesInput, {
    nullable: false
  })
  update!: VehicleUpdateWithoutSeriesInput;

  @Field(_type => VehicleCreateWithoutSeriesInput, {
    nullable: false
  })
  create!: VehicleCreateWithoutSeriesInput;
}
