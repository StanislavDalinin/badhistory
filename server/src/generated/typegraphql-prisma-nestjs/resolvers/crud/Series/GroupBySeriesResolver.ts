import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupBySeriesArgs } from "./args/GroupBySeriesArgs";
import { Series } from "../../../models/Series";
import { SeriesGroupBy } from "../../outputs/SeriesGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Series)
export class GroupBySeriesResolver {
  @Query(_returns => [SeriesGroupBy], {
    nullable: false
  })
  async groupBySeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupBySeriesArgs): Promise<SeriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
