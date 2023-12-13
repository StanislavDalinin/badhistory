import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneSeriesArgs } from "./args/DeleteOneSeriesArgs";
import { Series } from "../../../models/Series";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Series)
export class DeleteOneSeriesResolver {
  @Mutation(_returns => Series, {
    nullable: true
  })
  async deleteOneSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneSeriesArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
