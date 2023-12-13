import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUpdateWithoutLotsInput } from "../inputs/VehicleUpdateWithoutLotsInput";
import { VehicleWhereInput } from "../inputs/VehicleWhereInput";

@InputType("VehicleUpdateToOneWithWhereWithoutLotsInput", {})
export class VehicleUpdateToOneWithWhereWithoutLotsInput {
  @Field(_type => VehicleWhereInput, {
    nullable: true
  })
  where?: VehicleWhereInput | undefined;

  @Field(_type => VehicleUpdateWithoutLotsInput, {
    nullable: false
  })
  data!: VehicleUpdateWithoutLotsInput;
}
