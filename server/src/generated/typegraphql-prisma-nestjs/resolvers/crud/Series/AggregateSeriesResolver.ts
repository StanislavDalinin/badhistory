import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSeriesArgs } from "./args/AggregateSeriesArgs";
import { Series } from "../../../models/Series";
import { AggregateSeries } from "../../outputs/AggregateSeries";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Series)
export class AggregateSeriesResolver {
  @Query(_returns => AggregateSeries, {
    nullable: false
  })
  async aggregateSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateSeriesArgs): Promise<AggregateSeries> {
    return getPrismaFromContext(ctx).series.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
