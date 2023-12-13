import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Lot } from "../../../models/Lot";
import { Vehicle } from "../../../models/Vehicle";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Lot)
export class LotRelationsResolver {
  @ResolveField(_type => Vehicle, {
    nullable: false
  })
  async vehicle(@Root() lot: Lot, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Vehicle> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findUniqueOrThrow({
      where: {
        id: lot.id,
      },
    }).vehicle({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
