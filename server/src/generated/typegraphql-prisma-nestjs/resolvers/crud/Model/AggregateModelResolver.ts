import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateModelArgs } from "./args/AggregateModelArgs";
import { Model } from "../../../models/Model";
import { AggregateModel } from "../../outputs/AggregateModel";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Model)
export class AggregateModelResolver {
  @Query(_returns => AggregateModel, {
    nullable: false
  })
  async aggregateModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateModelArgs): Promise<AggregateModel> {
    return getPrismaFromContext(ctx).model.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
