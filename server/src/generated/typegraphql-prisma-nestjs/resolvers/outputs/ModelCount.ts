import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCountSeriesesArgs } from "./args/ModelCountSeriesesArgs";
import { ModelCountVehiclesArgs } from "./args/ModelCountVehiclesArgs";

@ObjectType("ModelCount", {})
export class ModelCount {
  vehicles!: number;
  serieses!: number;

  @Field(_type => Int, {
    name: "vehicles",
    nullable: false
  })
  getVehicles(@Root() root: ModelCount, @Args() args: ModelCountVehiclesArgs): number {
    return root.vehicles;
  }

  @Field(_type => Int, {
    name: "serieses",
    nullable: false
  })
  getSerieses(@Root() root: ModelCount, @Args() args: ModelCountSeriesesArgs): number {
    return root.serieses;
  }
}
