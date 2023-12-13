import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotCreateWithoutVehicleInput } from "../inputs/LotCreateWithoutVehicleInput";
import { LotWhereUniqueInput } from "../inputs/LotWhereUniqueInput";

@InputType("LotCreateOrConnectWithoutVehicleInput", {})
export class LotCreateOrConnectWithoutVehicleInput {
  @Field(_type => LotWhereUniqueInput, {
    nullable: false
  })
  where!: LotWhereUniqueInput;

  @Field(_type => LotCreateWithoutVehicleInput, {
    nullable: false
  })
  create!: LotCreateWithoutVehicleInput;
}
