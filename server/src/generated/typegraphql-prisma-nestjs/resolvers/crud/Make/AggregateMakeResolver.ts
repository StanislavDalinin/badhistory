import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMakeArgs } from "./args/AggregateMakeArgs";
import { Make } from "../../../models/Make";
import { AggregateMake } from "../../outputs/AggregateMake";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Make)
export class AggregateMakeResolver {
  @Query(_returns => AggregateMake, {
    nullable: false
  })
  async aggregateMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateMakeArgs): Promise<AggregateMake> {
    return getPrismaFromContext(ctx).make.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
