import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateResumableProcessMirrorArgs } from "./args/AggregateResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { AggregateResumableProcessMirror } from "../../outputs/AggregateResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class AggregateResumableProcessMirrorResolver {
  @Query(_returns => AggregateResumableProcessMirror, {
    nullable: false
  })
  async aggregateResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateResumableProcessMirrorArgs): Promise<AggregateResumableProcessMirror> {
    return getPrismaFromContext(ctx).resumableProcessMirror.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
