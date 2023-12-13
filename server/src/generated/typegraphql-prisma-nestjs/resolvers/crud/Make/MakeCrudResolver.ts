import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateMakeArgs } from "./args/AggregateMakeArgs";
import { CreateManyMakeArgs } from "./args/CreateManyMakeArgs";
import { CreateOneMakeArgs } from "./args/CreateOneMakeArgs";
import { DeleteManyMakeArgs } from "./args/DeleteManyMakeArgs";
import { DeleteOneMakeArgs } from "./args/DeleteOneMakeArgs";
import { FindFirstMakeArgs } from "./args/FindFirstMakeArgs";
import { FindFirstMakeOrThrowArgs } from "./args/FindFirstMakeOrThrowArgs";
import { FindManyMakeArgs } from "./args/FindManyMakeArgs";
import { FindUniqueMakeArgs } from "./args/FindUniqueMakeArgs";
import { FindUniqueMakeOrThrowArgs } from "./args/FindUniqueMakeOrThrowArgs";
import { GroupByMakeArgs } from "./args/GroupByMakeArgs";
import { UpdateManyMakeArgs } from "./args/UpdateManyMakeArgs";
import { UpdateOneMakeArgs } from "./args/UpdateOneMakeArgs";
import { UpsertOneMakeArgs } from "./args/UpsertOneMakeArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Make } from "../../../models/Make";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateMake } from "../../outputs/AggregateMake";
import { MakeGroupBy } from "../../outputs/MakeGroupBy";

@Resolver(_of => Make)
export class MakeCrudResolver {
  @Query(_returns => AggregateMake, {
    nullable: false
  })
  async aggregateMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateMakeArgs): Promise<AggregateMake> {
    return getPrismaFromContext(ctx).make.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyMakeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Make, {
    nullable: false
  })
  async createOneMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneMakeArgs): Promise<Make> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyMakeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Make, {
    nullable: true
  })
  async deleteOneMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneMakeArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Make, {
    nullable: true
  })
  async findFirstMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstMakeArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Make, {
    nullable: true
  })
  async findFirstMakeOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstMakeOrThrowArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [Make], {
    nullable: false
  })
  async makes(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyMakeArgs): Promise<Make[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Make, {
    nullable: true
  })
  async make(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueMakeArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Make, {
    nullable: true
  })
  async getMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueMakeOrThrowArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [MakeGroupBy], {
    nullable: false
  })
  async groupByMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByMakeArgs): Promise<MakeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyMakeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Make, {
    nullable: true
  })
  async updateOneMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneMakeArgs): Promise<Make | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Make, {
    nullable: false
  })
  async upsertOneMake(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneMakeArgs): Promise<Make> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).make.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
