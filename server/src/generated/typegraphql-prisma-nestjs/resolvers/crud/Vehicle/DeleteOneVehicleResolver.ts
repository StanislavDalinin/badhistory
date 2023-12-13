import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneVehicleArgs } from "./args/DeleteOneVehicleArgs";
import { Vehicle } from "../../../models/Vehicle";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class DeleteOneVehicleResolver {
  @Mutation(_returns => Vehicle, {
    nullable: true
  })
  async deleteOneVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
