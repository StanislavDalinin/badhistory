import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLotArgs } from "./args/AggregateLotArgs";
import { Lot } from "../../../models/Lot";
import { AggregateLot } from "../../outputs/AggregateLot";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Lot)
export class AggregateLotResolver {
  @Query(_returns => AggregateLot, {
    nullable: false
  })
  async aggregateLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateLotArgs): Promise<AggregateLot> {
    return getPrismaFromContext(ctx).lot.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
