import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMakeArgs } from "./args/GroupByMakeArgs";
import { Make } from "../../../models/Make";
import { MakeGroupBy } from "../../outputs/MakeGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Make)
export class GroupByMakeResolver {
  @Query(_returns => [MakeGroupBy], {
    nullable: false
  })
  async groupByMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByMakeArgs): Promise<MakeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
