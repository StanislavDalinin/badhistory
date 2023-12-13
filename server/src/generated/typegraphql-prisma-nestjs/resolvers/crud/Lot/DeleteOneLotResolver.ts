import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneLotArgs } from "./args/DeleteOneLotArgs";
import { Lot } from "../../../models/Lot";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Lot)
export class DeleteOneLotResolver {
  @Mutation(_returns => Lot, {
    nullable: true
  })
  async deleteOneLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneLotArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
