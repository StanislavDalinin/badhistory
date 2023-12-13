import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCountLotsArgs } from "./args/VehicleCountLotsArgs";

@ObjectType("VehicleCount", {})
export class VehicleCount {
  lots!: number;

  @Field(_type => Int, {
    name: "lots",
    nullable: false
  })
  getLots(@Root() root: VehicleCount, @Args() args: VehicleCountLotsArgs): number {
    return root.lots;
  }
}
