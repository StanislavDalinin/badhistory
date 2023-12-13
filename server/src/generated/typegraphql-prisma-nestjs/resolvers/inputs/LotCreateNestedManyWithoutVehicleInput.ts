import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotCreateManyVehicleInputEnvelope } from "../inputs/LotCreateManyVehicleInputEnvelope";
import { LotCreateOrConnectWithoutVehicleInput } from "../inputs/LotCreateOrConnectWithoutVehicleInput";
import { LotCreateWithoutVehicleInput } from "../inputs/LotCreateWithoutVehicleInput";
import { LotWhereUniqueInput } from "../inputs/LotWhereUniqueInput";

@InputType("LotCreateNestedManyWithoutVehicleInput", {})
export class LotCreateNestedManyWithoutVehicleInput {
  @Field(_type => [LotCreateWithoutVehicleInput], {
    nullable: true
  })
  create?: LotCreateWithoutVehicleInput[] | undefined;

  @Field(_type => [LotCreateOrConnectWithoutVehicleInput], {
    nullable: true
  })
  connectOrCreate?: LotCreateOrConnectWithoutVehicleInput[] | undefined;

  @Field(_type => LotCreateManyVehicleInputEnvelope, {
    nullable: true
  })
  createMany?: LotCreateManyVehicleInputEnvelope | undefined;

  @Field(_type => [LotWhereUniqueInput], {
    nullable: true
  })
  connect?: LotWhereUniqueInput[] | undefined;
}
