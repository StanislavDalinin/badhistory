import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneResumableProcessMirrorArgs } from "./args/CreateOneResumableProcessMirrorArgs";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => ResumableProcessMirror)
export class CreateOneResumableProcessMirrorResolver {
  @Mutation(_returns => ResumableProcessMirror, {
    nullable: false
  })
  async createOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
