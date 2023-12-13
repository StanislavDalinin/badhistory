import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVehicleTypeOrThrowArgs } from "./args/FindUniqueVehicleTypeOrThrowArgs";
import { VehicleType } from "../../../models/VehicleType";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class FindUniqueVehicleTypeOrThrowResolver {
  @Query(_returns => VehicleType, {
    nullable: true
  })
  async getVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleTypeOrThrowArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
