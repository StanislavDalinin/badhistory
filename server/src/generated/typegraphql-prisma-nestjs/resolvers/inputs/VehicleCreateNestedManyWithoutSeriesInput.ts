import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManySeriesInputEnvelope } from "../inputs/VehicleCreateManySeriesInputEnvelope";
import { VehicleCreateOrConnectWithoutSeriesInput } from "../inputs/VehicleCreateOrConnectWithoutSeriesInput";
import { VehicleCreateWithoutSeriesInput } from "../inputs/VehicleCreateWithoutSeriesInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleCreateNestedManyWithoutSeriesInput", {})
export class VehicleCreateNestedManyWithoutSeriesInput {
  @Field(_type => [VehicleCreateWithoutSeriesInput], {
    nullable: true
  })
  create?: VehicleCreateWithoutSeriesInput[] | undefined;

  @Field(_type => [VehicleCreateOrConnectWithoutSeriesInput], {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutSeriesInput[] | undefined;

  @Field(_type => VehicleCreateManySeriesInputEnvelope, {
    nullable: true
  })
  createMany?: VehicleCreateManySeriesInputEnvelope | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  connect?: VehicleWhereUniqueInput[] | undefined;
}
