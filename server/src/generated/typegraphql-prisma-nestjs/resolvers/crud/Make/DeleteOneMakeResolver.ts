import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneMakeArgs } from "./args/DeleteOneMakeArgs";
import { Make } from "../../../models/Make";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Make)
export class DeleteOneMakeResolver {
  @Mutation(_returns => Make, {
    nullable: true
  })
  async deleteOneMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneMakeArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
