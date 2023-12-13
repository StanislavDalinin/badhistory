import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstResumableProcessMirrorOrThrowArgs } from "./args/FindFirstResumableProcessMirrorOrThrowArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class FindFirstResumableProcessMirrorOrThrowResolver {
  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async findFirstResumableProcessMirrorOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstResumableProcessMirrorOrThrowArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
