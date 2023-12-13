import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyVehicleTypeArgs } from "./args/FindManyVehicleTypeArgs";
import { VehicleType } from "../../../models/VehicleType";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class FindManyVehicleTypeResolver {
  @Query(_returns => [VehicleType], {
    nullable: false
  })
  async vehicleTypes(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyVehicleTypeArgs): Promise<VehicleType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
