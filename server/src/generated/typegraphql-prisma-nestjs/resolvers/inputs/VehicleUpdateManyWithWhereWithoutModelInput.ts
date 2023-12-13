import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleScalarWhereInput } from "../inputs/VehicleScalarWhereInput";
import { VehicleUpdateManyMutationInput } from "../inputs/VehicleUpdateManyMutationInput";

@InputType("VehicleUpdateManyWithWhereWithoutModelInput", {})
export class VehicleUpdateManyWithWhereWithoutModelInput {
  @Field(_type => VehicleScalarWhereInput, {
    nullable: false
  })
  where!: VehicleScalarWhereInput;

  @Field(_type => VehicleUpdateManyMutationInput, {
    nullable: false
  })
  data!: VehicleUpdateManyMutationInput;
}
