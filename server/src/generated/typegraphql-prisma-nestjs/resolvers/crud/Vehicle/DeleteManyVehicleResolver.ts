import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteManyVehicleArgs } from "./args/DeleteManyVehicleArgs";
import { Vehicle } from "../../../models/Vehicle";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Vehicle)
export class DeleteManyVehicleResolver {
  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyVehicleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
