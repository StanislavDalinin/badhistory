import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Make } from "../../../models/Make";
import { Model } from "../../../models/Model";
import { Series } from "../../../models/Series";
import { Vehicle } from "../../../models/Vehicle";
import { ModelSeriesesArgs } from "./args/ModelSeriesesArgs";
import { ModelVehiclesArgs } from "./args/ModelVehiclesArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Model)
export class ModelRelationsResolver {
  @ResolveField(_type => Make, {
    nullable: false
  })
  async make(@Root() model: Model, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Make> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findUniqueOrThrow({
      where: {
        id: model.id,
      },
    }).make({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => [Vehicle], {
    nullable: false
  })
  async vehicles(@Root() model: Model, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: ModelVehiclesArgs): Promise<Vehicle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findUniqueOrThrow({
      where: {
        id: model.id,
      },
    }).vehicles({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => [Series], {
    nullable: false
  })
  async serieses(@Root() model: Model, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: ModelSeriesesArgs): Promise<Series[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findUniqueOrThrow({
      where: {
        id: model.id,
      },
    }).serieses({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
