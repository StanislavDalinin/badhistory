import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVehicleTypeArgs } from "./args/FindUniqueVehicleTypeArgs";
import { VehicleType } from "../../../models/VehicleType";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class FindUniqueVehicleTypeResolver {
  @Query(_returns => VehicleType, {
    nullable: true
  })
  async vehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleTypeArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
