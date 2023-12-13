import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateResumableProcessMirrorArgs } from "./args/AggregateResumableProcessMirrorArgs";
import { CreateManyResumableProcessMirrorArgs } from "./args/CreateManyResumableProcessMirrorArgs";
import { CreateOneResumableProcessMirrorArgs } from "./args/CreateOneResumableProcessMirrorArgs";
import { DeleteManyResumableProcessMirrorArgs } from "./args/DeleteManyResumableProcessMirrorArgs";
import { DeleteOneResumableProcessMirrorArgs } from "./args/DeleteOneResumableProcessMirrorArgs";
import { FindFirstResumableProcessMirrorArgs } from "./args/FindFirstResumableProcessMirrorArgs";
import { FindFirstResumableProcessMirrorOrThrowArgs } from "./args/FindFirstResumableProcessMirrorOrThrowArgs";
import { FindManyResumableProcessMirrorArgs } from "./args/FindManyResumableProcessMirrorArgs";
import { FindUniqueResumableProcessMirrorArgs } from "./args/FindUniqueResumableProcessMirrorArgs";
import { FindUniqueResumableProcessMirrorOrThrowArgs } from "./args/FindUniqueResumableProcessMirrorOrThrowArgs";
import { GroupByResumableProcessMirrorArgs } from "./args/GroupByResumableProcessMirrorArgs";
import { UpdateManyResumableProcessMirrorArgs } from "./args/UpdateManyResumableProcessMirrorArgs";
import { UpdateOneResumableProcessMirrorArgs } from "./args/UpdateOneResumableProcessMirrorArgs";
import { UpsertOneResumableProcessMirrorArgs } from "./args/UpsertOneResumableProcessMirrorArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { ResumableProcessMirror } from "../../../models/ResumableProcessMirror";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateResumableProcessMirror } from "../../outputs/AggregateResumableProcessMirror";
import { ResumableProcessMirrorGroupBy } from "../../outputs/ResumableProcessMirrorGroupBy";

@Resolver(_of => ResumableProcessMirror)
export class ResumableProcessMirrorCrudResolver {
  @Query(_returns => AggregateResumableProcessMirror, {
    nullable: false
  })
  async aggregateResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateResumableProcessMirrorArgs): Promise<AggregateResumableProcessMirror> {
    return getPrismaFromContext(ctx).resumableProcessMirror.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyResumableProcessMirrorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => ResumableProcessMirror, {
    nullable: false
  })
  async createOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyResumableProcessMirrorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async deleteOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async findFirstResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async findFirstResumableProcessMirrorOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstResumableProcessMirrorOrThrowArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [ResumableProcessMirror], {
    nullable: false
  })
  async resumableProcessMirrors(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyResumableProcessMirrorArgs): Promise<ResumableProcessMirror[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async resumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async getResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueResumableProcessMirrorOrThrowArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [ResumableProcessMirrorGroupBy], {
    nullable: false
  })
  async groupByResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByResumableProcessMirrorArgs): Promise<ResumableProcessMirrorGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyResumableProcessMirrorArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => ResumableProcessMirror, {
    nullable: true
  })
  async updateOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => ResumableProcessMirror, {
    nullable: false
  })
  async upsertOneResumableProcessMirror(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneResumableProcessMirrorArgs): Promise<ResumableProcessMirror> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resumableProcessMirror.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
