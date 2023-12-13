import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateVehicleArgs } from "./args/AggregateVehicleArgs";
import { CreateManyVehicleArgs } from "./args/CreateManyVehicleArgs";
import { CreateOneVehicleArgs } from "./args/CreateOneVehicleArgs";
import { DeleteManyVehicleArgs } from "./args/DeleteManyVehicleArgs";
import { DeleteOneVehicleArgs } from "./args/DeleteOneVehicleArgs";
import { FindFirstVehicleArgs } from "./args/FindFirstVehicleArgs";
import { FindFirstVehicleOrThrowArgs } from "./args/FindFirstVehicleOrThrowArgs";
import { FindManyVehicleArgs } from "./args/FindManyVehicleArgs";
import { FindUniqueVehicleArgs } from "./args/FindUniqueVehicleArgs";
import { FindUniqueVehicleOrThrowArgs } from "./args/FindUniqueVehicleOrThrowArgs";
import { GroupByVehicleArgs } from "./args/GroupByVehicleArgs";
import { UpdateManyVehicleArgs } from "./args/UpdateManyVehicleArgs";
import { UpdateOneVehicleArgs } from "./args/UpdateOneVehicleArgs";
import { UpsertOneVehicleArgs } from "./args/UpsertOneVehicleArgs";
import { transformArgsIntoPrismaArgs, transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { Vehicle } from "../../../models/Vehicle";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVehicle } from "../../outputs/AggregateVehicle";
import { VehicleGroupBy } from "../../outputs/VehicleGroupBy";

@Resolver(_of => Vehicle)
export class VehicleCrudResolver {
  @Query(_returns => AggregateVehicle, {
    nullable: false
  })
  async aggregateVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: AggregateVehicleArgs): Promise<AggregateVehicle> {
    return getPrismaFromContext(ctx).vehicle.aggregate({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateManyVehicleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.createMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Vehicle, {
    nullable: false
  })
  async createOneVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: CreateOneVehicleArgs): Promise<Vehicle> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.create({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteManyVehicleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.deleteMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Vehicle, {
    nullable: true
  })
  async deleteOneVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: DeleteOneVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.delete({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Vehicle, {
    nullable: true
  })
  async findFirstVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findFirst({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Vehicle, {
    nullable: true
  })
  async findFirstVehicleOrThrow(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindFirstVehicleOrThrowArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findFirstOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [Vehicle], {
    nullable: false
  })
  async vehicles(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindManyVehicleArgs): Promise<Vehicle[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Vehicle, {
    nullable: true
  })
  async vehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUnique({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => Vehicle, {
    nullable: true
  })
  async getVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: FindUniqueVehicleOrThrowArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.findUniqueOrThrow({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Query(_returns => [VehicleGroupBy], {
    nullable: false
  })
  async groupByVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: GroupByVehicleArgs): Promise<VehicleGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.groupBy({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateManyVehicleArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.updateMany({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Vehicle, {
    nullable: true
  })
  async updateOneVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpdateOneVehicleArgs): Promise<Vehicle | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.update({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @Mutation(_returns => Vehicle, {
    nullable: false
  })
  async upsertOneVehicle(@Context() ctx: any, @Info() info: GraphQLResolveInfo, @Args() args: UpsertOneVehicleArgs): Promise<Vehicle> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).vehicle.upsert({
      ...(await transformArgsIntoPrismaArgs(info, args, ctx)),
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
