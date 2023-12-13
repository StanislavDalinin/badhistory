import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstVehicleOrThrowArgs } from "./args/FindFirstVehicleOrThrowArgs";
import { Vehicle } from "../../../models/Vehicle";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class FindFirstVehicleOrThrowResolver {
  @Query(_returns => Vehicle, {
    nullable: true
  })
  async findFirstVehicleOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstVehicleOrThrowArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
