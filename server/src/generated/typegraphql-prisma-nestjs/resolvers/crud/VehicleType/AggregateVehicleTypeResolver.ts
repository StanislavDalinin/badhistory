import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVehicleTypeArgs } from "./args/AggregateVehicleTypeArgs";
import { VehicleType } from "../../../models/VehicleType";
import { AggregateVehicleType } from "../../outputs/AggregateVehicleType";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class AggregateVehicleTypeResolver {
  @Query(_returns => AggregateVehicleType, {
    nullable: false
  })
  async aggregateVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateVehicleTypeArgs): Promise<AggregateVehicleType> {
    return getPrismaFromContext(ctx).vehicleType.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
