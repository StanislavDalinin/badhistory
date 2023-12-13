import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueResumableProcessMirrorArgs } from "./args/FindUniqueResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class FindUniqueResumableProcessMirrorResolver {
  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async resumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
