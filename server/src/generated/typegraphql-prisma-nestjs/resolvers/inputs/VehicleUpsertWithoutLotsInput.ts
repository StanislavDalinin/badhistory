import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateWithoutLotsInput } from "../inputs/VehicleCreateWithoutLotsInput";
import { VehicleUpdateWithoutLotsInput } from "../inputs/VehicleUpdateWithoutLotsInput";
import { VehicleWhereInput } from "../inputs/VehicleWhereInput";

@InputType("VehicleUpsertWithoutLotsInput", {})
export class VehicleUpsertWithoutLotsInput {
  @Field(_type => VehicleUpdateWithoutLotsInput, {
    nullable: false
  })
  update!: VehicleUpdateWithoutLotsInput;

  @Field(_type => VehicleCreateWithoutLotsInput, {
    nullable: false
  })
  create!: VehicleCreateWithoutLotsInput;

  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  where?: VehicleWhereInput | undefined;
}
