import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstMakeArgs } from "./args/FindFirstMakeArgs";
import { Make } from "../../../models/Make";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Make)
export class FindFirstMakeResolver {
  @Query(_returns => Make, {
    nullable: true
  })
  async findFirstMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstMakeArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
