import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCountVehiclesArgs } from "./args/SeriesCountVehiclesArgs";

@ObjectType("SeriesCount", {})
export class SeriesCount {
  vehicles!: number;

  @Field(_type => Int, {
    name: "vehicles",
    nullable: false
  })
  getVehicles(@Root() root: SeriesCount, @Args() args: SeriesCountVehiclesArgs): number {
    return root.vehicles;
  }
}
