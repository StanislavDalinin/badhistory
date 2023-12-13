import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstLotArgs } from "./args/FindFirstLotArgs";
import { Lot } from "../../../models/Lot";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Lot)
export class FindFirstLotResolver {
  @Query(_returns => Lot, {
    nullable: true
  })
  async findFirstLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstLotArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
