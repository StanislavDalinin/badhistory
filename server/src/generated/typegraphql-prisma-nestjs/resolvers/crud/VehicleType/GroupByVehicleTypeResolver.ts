import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByVehicleTypeArgs } from "./args/GroupByVehicleTypeArgs";
import { VehicleType } from "../../../models/VehicleType";
import { VehicleTypeGroupBy } from "../../outputs/VehicleTypeGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class GroupByVehicleTypeResolver {
  @Query(_returns => [VehicleTypeGroupBy], {
    nullable: false
  })
  async groupByVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByVehicleTypeArgs): Promise<VehicleTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
