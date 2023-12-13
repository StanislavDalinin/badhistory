import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneResumableProcessMirrorArgs } from "./args/UpsertOneResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class UpsertOneResumableProcessMirrorResolver {
  @Mutation(_returns => ResumableProcessMirror, {
    nullable: false
  })
  async upsertOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
