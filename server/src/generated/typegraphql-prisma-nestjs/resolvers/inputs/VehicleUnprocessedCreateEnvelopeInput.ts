import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUnprocessedCreateInput } from "../inputs/VehicleUnprocessedCreateInput";

@InputType("VehicleUnprocessedCreateEnvelopeInput", {})
export class VehicleUnprocessedCreateEnvelopeInput {
  @Field(_type => VehicleUnprocessedCreateInput, {
    nullable: true
  })
  set?: VehicleUnprocessedCreateInput | undefined;
}
