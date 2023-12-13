import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVehicleArgs } from "./args/FindFirstVehicleArgs";
import { Vehicle } from "../../../models/Vehicle";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class FindFirstVehicleResolver {
  @Query(_returns => Vehicle, {
    nullable: true
  })
  async findFirstVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
