import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVehicleArgs } from "./args/AggregateVehicleArgs";
import { Vehicle } from "../../../models/Vehicle";
import { AggregateVehicle } from "../../outputs/AggregateVehicle";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class AggregateVehicleResolver {
  @Query(_returns => AggregateVehicle, {
    nullable: false
  })
  async aggregateVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateVehicleArgs): Promise<AggregateVehicle> {
    return getPrismaFromContext(ctx).vehicle.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
