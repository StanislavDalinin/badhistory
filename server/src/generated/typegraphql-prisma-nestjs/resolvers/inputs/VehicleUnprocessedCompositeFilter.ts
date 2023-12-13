import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VehicleUnprocessedObjectEqualityInput } from "../inputs/VehicleUnprocessedObjectEqualityInput";
import { VehicleUnprocessedWhereInput } from "../inputs/VehicleUnprocessedWhereInput";

@InputType("VehicleUnprocessedCompositeFilter", {})
export class VehicleUnprocessedCompositeFilter {
  @Field(_type => VehicleUnprocessedObjectEqualityInput, {
    nullable: true
  })
  equals?: VehicleUnprocessedObjectEqualityInput | undefined;

  @Field(_type => VehicleUnprocessedWhereInput, {
    nullable: true
  })
  is?: VehicleUnprocessedWhereInput | undefined;

  @Field(_type => VehicleUnprocessedWhereInput, {
    nullable: true
  })
  isNot?: VehicleUnprocessedWhereInput | undefined;
}
