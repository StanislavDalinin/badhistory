import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneResumableProcessMirrorArgs } from "./args/DeleteOneResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class DeleteOneResumableProcessMirrorResolver {
  @Mutation(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async deleteOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
