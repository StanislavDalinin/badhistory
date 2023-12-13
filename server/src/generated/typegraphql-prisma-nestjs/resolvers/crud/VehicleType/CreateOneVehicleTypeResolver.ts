import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneVehicleTypeArgs } from "./args/CreateOneVehicleTypeArgs";
import { VehicleType } from "../../../models/VehicleType";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => VehicleType)
export class CreateOneVehicleTypeResolver {
  @Mutation(_returns => VehicleType, {
    nullable: false
  })
  async createOneVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneVehicleTypeArgs): Promise<VehicleType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
