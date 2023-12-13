import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstSeriesArgs } from "./args/FindFirstSeriesArgs";
import { Series } from "../../../models/Series";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Series)
export class FindFirstSeriesResolver {
  @Query(_returns => Series, {
    nullable: true
  })
  async findFirstSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstSeriesArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
