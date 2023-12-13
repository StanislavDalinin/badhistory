import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { LotScalarWhereInput } from "../inputs/LotScalarWhereInput";
import { LotUpdateManyMutationInput } from "../inputs/LotUpdateManyMutationInput";

@InputType("LotUpdateManyWithWhereWithoutVehicleInput", {})
export class LotUpdateManyWithWhereWithoutVehicleInput {
  @Field(_type => LotScalarWhereInput, {
    nullable: false
  })
  where!: LotScalarWhereInput;

  @Field(_type => LotUpdateManyMutationInput, {
    nullable: false
  })
  data!: LotUpdateManyMutationInput;
}
