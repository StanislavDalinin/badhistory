import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@ObjectType("VehicleUnprocessed", {})
export class VehicleUnprocessed {
  @Field(_type => String, {
    nullable: false
  })
  name!: string;
}
