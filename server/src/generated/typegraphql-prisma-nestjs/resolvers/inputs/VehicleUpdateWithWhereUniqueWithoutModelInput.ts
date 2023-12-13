import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUpdateWithoutModelInput } from "../inputs/VehicleUpdateWithoutModelInput";
import { VehicleWhereUniqueInput } from "../inputs/VehicleWhereUniqueInput";

@InputType("VehicleUpdateWithWhereUniqueWithoutModelInput", {})
export class VehicleUpdateWithWhereUniqueWithoutModelInput {
  @Field(_type => VehicleWhereUniqueInput, {
    nullable: false
  })
  where!: VehicleWhereUniqueInput;

  @Field(_type => VehicleUpdateWithoutModelInput, {
    nullable: false
  })
  data!: VehicleUpdateWithoutModelInput;
}
