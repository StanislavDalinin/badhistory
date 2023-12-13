import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyMakeArgs } from "./args/FindManyMakeArgs";
import { Make } from "../../../models/Make";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Make)
export class FindManyMakeResolver {
  @Query(_returns => [Make], {
    nullable: false
  })
  async makes(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyMakeArgs): Promise<Make[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
