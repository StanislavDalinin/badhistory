import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueVehicleArgs } from "./args/FindUniqueVehicleArgs";
import { Vehicle } from "../../../models/Vehicle";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class FindUniqueVehicleResolver {
  @Query(_returns => Vehicle, {
    nullable: true
  })
  async vehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
