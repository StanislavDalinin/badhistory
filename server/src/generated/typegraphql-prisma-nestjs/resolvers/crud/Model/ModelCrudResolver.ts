import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateModelArgs } from "./args/AggregateModelArgs";
import { CreateManyModelArgs } from "./args/CreateManyModelArgs";
import { CreateOneModelArgs } from "./args/CreateOneModelArgs";
import { DeleteManyModelArgs } from "./args/DeleteManyModelArgs";
import { DeleteOneModelArgs } from "./args/DeleteOneModelArgs";
import { FindFirstModelArgs } from "./args/FindFirstModelArgs";
import { FindFirstModelOrThrowArgs } from "./args/FindFirstModelOrThrowArgs";
import { FindManyModelArgs } from "./args/FindManyModelArgs";
import { FindUniqueModelArgs } from "./args/FindUniqueModelArgs";
import { FindUniqueModelOrThrowArgs } from "./args/FindUniqueModelOrThrowArgs";
import { GroupByModelArgs } from "./args/GroupByModelArgs";
import { UpdateManyModelArgs } from "./args/UpdateManyModelArgs";
import { UpdateOneModelArgs } from "./args/UpdateOneModelArgs";
import { UpsertOneModelArgs } from "./args/UpsertOneModelArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Model } from "../../../models/Model";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateModel } from "../../outputs/AggregateModel";
import { ModelGroupBy } from "../../outputs/ModelGroupBy";

@Resolver(_of => Model)
export class ModelCrudResolver {
  @Query(_returns => AggregateModel, {
    nullable: false
  })
  async aggregateModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateModelArgs): Promise<AggregateModel> {
    return getPrismaFromContext(ctx).model.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Model, {
    nullable: false
  })
  async createOneModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneModelArgs): Promise<Model> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Model, {
    nullable: true
  })
  async deleteOneModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneModelArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Model, {
    nullable: true
  })
  async findFirstModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstModelArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Model, {
    nullable: true
  })
  async findFirstModelOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstModelOrThrowArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [Model], {
    nullable: false
  })
  async models(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyModelArgs): Promise<Model[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Model, {
    nullable: true
  })
  async model(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueModelArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Model, {
    nullable: true
  })
  async getModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueModelOrThrowArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [ModelGroupBy], {
    nullable: false
  })
  async groupByModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByModelArgs): Promise<ModelGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyModelArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Model, {
    nullable: true
  })
  async updateOneModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneModelArgs): Promise<Model | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Model, {
    nullable: false
  })
  async upsertOneModel(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneModelArgs): Promise<Model> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).model.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
