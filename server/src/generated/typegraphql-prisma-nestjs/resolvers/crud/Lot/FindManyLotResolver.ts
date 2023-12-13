import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyLotArgs } from "./args/FindManyLotArgs";
import { Lot } from "../../../models/Lot";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Lot)
export class FindManyLotResolver {
  @Query(_returns => [Lot], {
    nullable: false
  })
  async lots(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyLotArgs): Promise<Lot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
