import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByResumableProcessMirrorArgs } from "./args/GroupByResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { ResumableProcessMirrorGroupBy } from "../../outputs/ResumableProcessMirrorGroupBy";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class GroupByResumableProcessMirrorResolver {
  @Query(_returns => [ResumableProcessMirrorGroupBy], {
    nullable: false
  })
  async groupByResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByResumableProcessMirrorArgs): Promise<ResumableProcessMirrorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
