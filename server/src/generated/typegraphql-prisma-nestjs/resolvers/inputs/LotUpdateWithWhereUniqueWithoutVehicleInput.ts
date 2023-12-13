import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotUpdateWithoutVehicleInput } from "../inputs/LotUpdateWithoutVehicleInput";
import { LotWhereUniqueInput } from "../inputs/LotWhereUniqueInput";

@InputType("LotUpdateWithWhereUniqueWithoutVehicleInput", {})
export class LotUpdateWithWhereUniqueWithoutVehicleInput {
  @Field(_type => LotWhereUniqueInput, {
    nullable: false
  })
  where!: LotWhereUniqueInput;

  @Field(_type => LotUpdateWithoutVehicleInput, {
    nullable: false
  })
  data!: LotUpdateWithoutVehicleInput;
}
