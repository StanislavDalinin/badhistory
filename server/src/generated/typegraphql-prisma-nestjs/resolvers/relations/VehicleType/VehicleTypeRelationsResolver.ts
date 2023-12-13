import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Vehicle } from "../../../models/Vehicle";
import { VehicleType } from "../../../models/VehicleType";
import { VehicleTypeVehicleArgs } from "./args/VehicleTypeVehicleArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class VehicleTypeRelationsResolver {
  @ResolveField(_type => [Vehicle], {
    nullable: false
  })
  async Vehicle(@Root() vehicleType: VehicleType, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: VehicleTypeVehicleArgs): Promise<Vehicle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findUniqueOrThrow({
      where: {
        id: vehicleType.id,
      },
    }).Vehicle({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
