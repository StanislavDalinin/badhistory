import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateManyModelInputEnvelope } from "../inputs/VehicleCreateManyModelInputEnvelope";
import { VehicleCreateOrConnectWithoutModelInput } from "../inputs/VehicleCreateOrConnectWithoutModelInput";
import { VehicleCreateWithoutModelInput } from "../inputs/VehicleCreateWithoutModelInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleCreateNestedManyWithoutModelInput", {})
export class VehicleCreateNestedManyWithoutModelInput {
  @Field(_type => [VehicleCreateWithoutModelInput], {
    nullable: true
  })
  create?: VehicleCreateWithoutModelInput[] | undefined;

  @Field(_type => [VehicleCreateOrConnectWithoutModelInput], {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutModelInput[] | undefined;

  @Field(_type => VehicleCreateManyModelInputEnvelope, {
    nullable: true
  })
  createMany?: VehicleCreateManyModelInputEnvelope | undefined;

  @Field(_type => [VehicleWhereUniqueInput], {
    nullable: true
  })
  connect?: VehicleWhereUniqueInput[] | undefined;
}
