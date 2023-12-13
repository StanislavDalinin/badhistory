import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVehicleTypeArgs } from "./args/AggregateVehicleTypeArgs";
import { CreateManyVehicleTypeArgs } from "./args/CreateManyVehicleTypeArgs";
import { CreateOneVehicleTypeArgs } from "./args/CreateOneVehicleTypeArgs";
import { DeleteManyVehicleTypeArgs } from "./args/DeleteManyVehicleTypeArgs";
import { DeleteOneVehicleTypeArgs } from "./args/DeleteOneVehicleTypeArgs";
import { FindFirstVehicleTypeArgs } from "./args/FindFirstVehicleTypeArgs";
import { FindFirstVehicleTypeOrThrowArgs } from "./args/FindFirstVehicleTypeOrThrowArgs";
import { FindManyVehicleTypeArgs } from "./args/FindManyVehicleTypeArgs";
import { FindUniqueVehicleTypeArgs } from "./args/FindUniqueVehicleTypeArgs";
import { FindUniqueVehicleTypeOrThrowArgs } from "./args/FindUniqueVehicleTypeOrThrowArgs";
import { GroupByVehicleTypeArgs } from "./args/GroupByVehicleTypeArgs";
import { UpdateManyVehicleTypeArgs } from "./args/UpdateManyVehicleTypeArgs";
import { UpdateOneVehicleTypeArgs } from "./args/UpdateOneVehicleTypeArgs";
import { UpsertOneVehicleTypeArgs } from "./args/UpsertOneVehicleTypeArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VehicleType } from "../../../models/VehicleType";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVehicleType } from "../../outputs/AggregateVehicleType";
import { VehicleTypeGroupBy } from "../../outputs/VehicleTypeGroupBy";

@Resolver(_of => VehicleType)
export class VehicleTypeCrudResolver {
  @Query(_returns => AggregateVehicleType, {
    nullable: false
  })
  async aggregateVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateVehicleTypeArgs): Promise<AggregateVehicleType> {
    return getPrismaFromContext(ctx).vehicleType.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyVehicleTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => VehicleType, {
    nullable: false
  })
  async createOneVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneVehicleTypeArgs): Promise<VehicleType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyVehicleTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => VehicleType, {
    nullable: true
  })
  async deleteOneVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneVehicleTypeArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => VehicleType, {
    nullable: true
  })
  async findFirstVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstVehicleTypeArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => VehicleType, {
    nullable: true
  })
  async findFirstVehicleTypeOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstVehicleTypeOrThrowArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [VehicleType], {
    nullable: false
  })
  async vehicleTypes(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyVehicleTypeArgs): Promise<VehicleType[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => VehicleType, {
    nullable: true
  })
  async vehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleTypeArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => VehicleType, {
    nullable: true
  })
  async getVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleTypeOrThrowArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [VehicleTypeGroupBy], {
    nullable: false
  })
  async groupByVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByVehicleTypeArgs): Promise<VehicleTypeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyVehicleTypeArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => VehicleType, {
    nullable: true
  })
  async updateOneVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneVehicleTypeArgs): Promise<VehicleType | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => VehicleType, {
    nullable: false
  })
  async upsertOneVehicleType(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneVehicleTypeArgs): Promise<VehicleType> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicleType.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
