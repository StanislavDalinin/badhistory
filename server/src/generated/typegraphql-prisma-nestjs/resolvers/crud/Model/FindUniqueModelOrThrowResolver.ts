import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueModelOrThrowArgs } from "./args/FindUniqueModelOrThrowArgs";
import { Model } from "../../../models/Model";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Model)
export class FindUniqueModelOrThrowResolver {
  @Query(_returns => Model, {
    nullable: true
  })
  async getModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueModelOrThrowArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
