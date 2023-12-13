import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVehicleArgs } from "./args/GroupByVehicleArgs";
import { Vehicle } from "../../../models/Vehicle";
import { VehicleGroupBy } from "../../outputs/VehicleGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class GroupByVehicleResolver {
  @Query(_returns => [VehicleGroupBy], {
    nullable: false
  })
  async groupByVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByVehicleArgs): Promise<VehicleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
