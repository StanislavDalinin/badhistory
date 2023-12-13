import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueLotArgs } from "./args/FindUniqueLotArgs";
import { Lot } from "../../../models/Lot";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Lot)
export class FindUniqueLotResolver {
  @Query(_returns => Lot, {
    nullable: true
  })
  async lot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueLotArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
