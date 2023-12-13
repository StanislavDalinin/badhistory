import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { ResumableProcessMirrorParentProcessArgs } from "./args/ResumableProcessMirrorParentProcessArgs";
import { ResumableProcessMirrorSubProcessesArgs } from "./args/ResumableProcessMirrorSubProcessesArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class ResumableProcessMirrorRelationsResolver {
  @ResolveField(_type => ResumableProcessMirror, {
    nullable: true
  })
  async parentProcess(@Root() resumableProcessMirror: ResumableProcessMirror, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: ResumableProcessMirrorParentProcessArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findUniqueOrThrow({
      where: {
        id: resumableProcessMirror.id,
      },
    }).parentProcess({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => [ResumableProcessMirror], {
    nullable: false
  })
  async subProcesses(@Root() resumableProcessMirror: ResumableProcessMirror, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: ResumableProcessMirrorSubProcessesArgs): Promise<ResumableProcessMirror[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findUniqueOrThrow({
      where: {
        id: resumableProcessMirror.id,
      },
    }).subProcesses({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
