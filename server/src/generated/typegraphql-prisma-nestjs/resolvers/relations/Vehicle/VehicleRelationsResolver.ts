import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Lot } from "../../../models/Lot";
import { Model } from "../../../models/Model";
import { Series } from "../../../models/Series";
import { Vehicle } from "../../../models/Vehicle";
import { VehicleType } from "../../../models/VehicleType";
import { VehicleLotsArgs } from "./args/VehicleLotsArgs";
import { VehicleSeriesArgs } from "./args/VehicleSeriesArgs";
import { VehicleVehicleTypeArgs } from "./args/VehicleVehicleTypeArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class VehicleRelationsResolver {
  @ResolveField(_type => Model, {
    nullable: false
  })
  async model(@Root() vehicle: Vehicle, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Model> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUniqueOrThrow({
      where: {
        id: vehicle.id,
      },
    }).model({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => Series, {
    nullable: true
  })
  async series(@Root() vehicle: Vehicle, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: VehicleSeriesArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUniqueOrThrow({
      where: {
        id: vehicle.id,
      },
    }).series({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => VehicleType, {
    nullable: true
  })
  async vehicleType(@Root() vehicle: Vehicle, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: VehicleVehicleTypeArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUniqueOrThrow({
      where: {
        id: vehicle.id,
      },
    }).vehicleType({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => [Lot], {
    nullable: false
  })
  async lots(@Root() vehicle: Vehicle, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: VehicleLotsArgs): Promise<Lot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUniqueOrThrow({
      where: {
        id: vehicle.id,
      },
    }).lots({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
