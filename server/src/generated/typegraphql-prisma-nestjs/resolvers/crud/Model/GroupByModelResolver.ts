import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByModelArgs } from "./args/GroupByModelArgs";
import { Model } from "../../../models/Model";
import { ModelGroupBy } from "../../outputs/ModelGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Model)
export class GroupByModelResolver {
  @Query(_returns => [ModelGroupBy], {
    nullable: false
  })
  async groupByModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByModelArgs): Promise<ModelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
