import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleCreateWithoutModelInput } from "../inputs/VehicleCreateWithoutModelInput";
import { VehicleUpdateWithoutModelInput } from "../inputs/VehicleUpdateWithoutModelInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpsertWithWhereUniqueWithoutModelInput", {})
export class VehicleUpsertWithWhereUniqueWithoutModelInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleUpdateWithoutModelInput, {
    nullable: false
  })
  update!: VehicleUpdateWithoutModelInput;

  @Field(_type => VehicleCreateWithoutModelInput, {
    nullable: false
  })
  create!: VehicleCreateWithoutModelInput;
}
