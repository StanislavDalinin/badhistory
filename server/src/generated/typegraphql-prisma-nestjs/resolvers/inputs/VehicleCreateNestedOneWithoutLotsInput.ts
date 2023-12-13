import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateOrConnectWithoutLotsInput } from "../inputs/VehicleCreateOrConnectWithoutLotsInput";
import { VehicleCreateWithoutLotsInput } from "../inputs/VehicleCreateWithoutLotsInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleCreateNestedOneWithoutLotsInput", {})
export class VehicleCreateNestedOneWithoutLotsInput {
  @Field(_type => VehicleCreateWithoutLotsInput, {
    nullable: true
  })
  create?: VehicleCreateWithoutLotsInput | undefined;

  @Field(_type => VehicleCreateOrConnectWithoutLotsInput, {
    nullable: true
  })
  connectOrCreate?: VehicleCreateOrConnectWithoutLotsInput | undefined;

  @Field(_type => VehicleWhereUniqueInput, {
    nullable: true
  })
  connect?: VehicleWhereUniqueInput | undefined;
}
