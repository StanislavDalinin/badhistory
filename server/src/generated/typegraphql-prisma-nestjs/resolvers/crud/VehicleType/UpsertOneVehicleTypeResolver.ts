import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneVehicleTypeArgs } from "./args/UpsertOneVehicleTypeArgs";
import { VehicleType } from "../../../models/VehicleType";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class UpsertOneVehicleTypeResolver {
  @Mutation(_returns => VehicleType, {
    nullable: false
  })
  async upsertOneVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneVehicleTypeArgs): Promise<VehicleType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
