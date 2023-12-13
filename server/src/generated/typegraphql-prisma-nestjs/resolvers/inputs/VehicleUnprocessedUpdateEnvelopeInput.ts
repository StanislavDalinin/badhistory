import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUnprocessedCreateInput } from "../inputs/VehicleUnprocessedCreateInput";
import { VehicleUnprocessedUpdateInput } from "../inputs/VehicleUnprocessedUpdateInput";

@InputType("VehicleUnprocessedUpdateEnvelopeInput", {})
export class VehicleUnprocessedUpdateEnvelopeInput {
  @Field(_type => VehicleUnprocessedCreateInput, {
    nullable: true
  })
  set?: VehicleUnprocessedCreateInput | undefined;

  @Field(_type => VehicleUnprocessedUpdateInput, {
    nullable: true
  })
  update?: VehicleUnprocessedUpdateInput | undefined;
}
