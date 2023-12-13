import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstResumableProcessMirrorArgs } from "./args/FindFirstResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class FindFirstResumableProcessMirrorResolver {
  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async findFirstResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
