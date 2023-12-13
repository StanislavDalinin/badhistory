import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Make } from "../../../models/Make";
import { Model } from "../../../models/Model";
import { MakeModelsArgs } from "./args/MakeModelsArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Make)
export class MakeRelationsResolver {
  @ResolveField(_type => [Model], {
    nullable: false
  })
  async models(@Root() make: Make, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: MakeModelsArgs): Promise<Model[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findUniqueOrThrow({
      where: {
        id: make.id,
      },
    }).models({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
