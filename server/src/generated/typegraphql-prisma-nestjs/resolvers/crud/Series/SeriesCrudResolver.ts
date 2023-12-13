import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSeriesArgs } from "./args/AggregateSeriesArgs";
import { CreateManySeriesArgs } from "./args/CreateManySeriesArgs";
import { CreateOneSeriesArgs } from "./args/CreateOneSeriesArgs";
import { DeleteManySeriesArgs } from "./args/DeleteManySeriesArgs";
import { DeleteOneSeriesArgs } from "./args/DeleteOneSeriesArgs";
import { FindFirstSeriesArgs } from "./args/FindFirstSeriesArgs";
import { FindFirstSeriesOrThrowArgs } from "./args/FindFirstSeriesOrThrowArgs";
import { FindManySeriesArgs } from "./args/FindManySeriesArgs";
import { FindUniqueSeriesArgs } from "./args/FindUniqueSeriesArgs";
import { FindUniqueSeriesOrThrowArgs } from "./args/FindUniqueSeriesOrThrowArgs";
import { GroupBySeriesArgs } from "./args/GroupBySeriesArgs";
import { UpdateManySeriesArgs } from "./args/UpdateManySeriesArgs";
import { UpdateOneSeriesArgs } from "./args/UpdateOneSeriesArgs";
import { UpsertOneSeriesArgs } from "./args/UpsertOneSeriesArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Series } from "../../../models/Series";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSeries } from "../../outputs/AggregateSeries";
import { SeriesGroupBy } from "../../outputs/SeriesGroupBy";

@Resolver(_of => Series)
export class SeriesCrudResolver {
  @Query(_returns => AggregateSeries, {
    nullable: false
  })
  async aggregateSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateSeriesArgs): Promise<AggregateSeries> {
    return getPrismaFromContext(ctx).series.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManySeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManySeriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Series, {
    nullable: false
  })
  async createOneSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneSeriesArgs): Promise<Series> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManySeriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Query(_returns => Series, {
    nullable: true
  })
  async findFirstSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstSeriesArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Series, {
    nullable: true
  })
  async findFirstSeriesOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstSeriesOrThrowArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [Series], {
    nullable: false
  })
  async findManySeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManySeriesArgs): Promise<Series[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Series, {
    nullable: true
  })
  async findUniqueSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueSeriesArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Series, {
    nullable: true
  })
  async findUniqueSeriesOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueSeriesOrThrowArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [SeriesGroupBy], {
    nullable: false
  })
  async groupBySeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupBySeriesArgs): Promise<SeriesGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManySeriesArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Series, {
    nullable: true
  })
  async updateOneSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneSeriesArgs): Promise<Series | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Series, {
    nullable: false
  })
  async upsertOneSeries(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneSeriesArgs): Promise<Series> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).series.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
