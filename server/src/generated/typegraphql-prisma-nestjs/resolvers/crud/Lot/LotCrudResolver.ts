import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateLotArgs } from "./args/AggregateLotArgs";
import { CreateManyLotArgs } from "./args/CreateManyLotArgs";
import { CreateOneLotArgs } from "./args/CreateOneLotArgs";
import { DeleteManyLotArgs } from "./args/DeleteManyLotArgs";
import { DeleteOneLotArgs } from "./args/DeleteOneLotArgs";
import { FindFirstLotArgs } from "./args/FindFirstLotArgs";
import { FindFirstLotOrThrowArgs } from "./args/FindFirstLotOrThrowArgs";
import { FindManyLotArgs } from "./args/FindManyLotArgs";
import { FindUniqueLotArgs } from "./args/FindUniqueLotArgs";
import { FindUniqueLotOrThrowArgs } from "./args/FindUniqueLotOrThrowArgs";
import { GroupByLotArgs } from "./args/GroupByLotArgs";
import { UpdateManyLotArgs } from "./args/UpdateManyLotArgs";
import { UpdateOneLotArgs } from "./args/UpdateOneLotArgs";
import { UpsertOneLotArgs } from "./args/UpsertOneLotArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Lot } from "../../../models/Lot";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateLot } from "../../outputs/AggregateLot";
import { LotGroupBy } from "../../outputs/LotGroupBy";

@Resolver(_of => Lot)
export class LotCrudResolver {
  @Query(_returns => AggregateLot, {
    nullable: false
  })
  async aggregateLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateLotArgs): Promise<AggregateLot> {
    return getPrismaFromContext(ctx).lot.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyLotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Lot, {
    nullable: false
  })
  async createOneLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneLotArgs): Promise<Lot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyLotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Query(_returns => Lot, {
    nullable: true
  })
  async findFirstLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstLotArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Lot, {
    nullable: true
  })
  async findFirstLotOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstLotOrThrowArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [Lot], {
    nullable: false
  })
  async lots(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyLotArgs): Promise<Lot[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @Query(_returns => Lot, {
    nullable: true
  })
  async getLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueLotOrThrowArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [LotGroupBy], {
    nullable: false
  })
  async groupByLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByLotArgs): Promise<LotGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyLotArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Lot, {
    nullable: true
  })
  async updateOneLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneLotArgs): Promise<Lot | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Lot, {
    nullable: false
  })
  async upsertOneLot(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneLotArgs): Promise<Lot> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).lot.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
