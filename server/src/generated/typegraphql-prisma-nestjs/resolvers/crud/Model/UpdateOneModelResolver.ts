import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneModelArgs } from "./args/UpdateOneModelArgs";
import { Model } from "../../../models/Model";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Model)
export class UpdateOneModelResolver {
  @Mutation(_returns => Model, {
    nullable: true
  })
  async updateOneModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneModelArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
