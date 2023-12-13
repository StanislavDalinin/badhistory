import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Model } from "../../../models/Model";
import { Series } from "../../../models/Series";
import { Vehicle } from "../../../models/Vehicle";
import { SeriesVehiclesArgs } from "./args/SeriesVehiclesArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@Resolver(_of => Series)
export class SeriesRelationsResolver {
  @ResolveField(_type => Model, {
    nullable: false
  })
  async model(@Root() series: Series, @Context() ctx: any, @Info() info: GraphQLResolveInfo): Promise<Model> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findUniqueOrThrow({
      where: {
        id: series.id,
      },
    }).model({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @ResolveField(_type => [Vehicle], {
    nullable: false
  })
  async vehicles(@Root() series: Series, @Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: SeriesVehiclesArgs): Promise<Vehicle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findUniqueOrThrow({
      where: {
        id: series.id,
      },
    }).vehicles({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
