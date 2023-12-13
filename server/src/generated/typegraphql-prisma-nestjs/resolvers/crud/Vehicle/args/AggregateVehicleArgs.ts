import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { VehicleOrderByWithRelationInput } from "../../../inputs/VehicleOrderByWithRelationInput";
import { VehicleWhereInput } from "../../../inputs/VehicleWhereInput";
import { VehicleWhereUniqueInput } from "../../../inputs/VehicleWhereUniqueInput";

@ArgsType()
export class AggregateVehicleArgs {
  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  where?: VehicleWhereInput | undefined;

  @Field(_type => [VehicleOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: VehicleOrderByWithRelationInput[] | undefined;

  @Field(_type => VehicleWhereUniqueInput, {
    nullable: true
  })
  cursor?: VehicleWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
