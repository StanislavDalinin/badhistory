import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@InputType("VehicleUnprocessedWhereInput", {})
export class VehicleUnprocessedWhereInput {
  @Field(_type => [VehicleUnprocessedWhereInput], {
    nullable: true
  })
  AND?: VehicleUnprocessedWhereInput[] | undefined;

  @Field(_type => [VehicleUnprocessedWhereInput], {
    nullable: true
  })
  OR?: VehicleUnprocessedWhereInput[] | undefined;

  @Field(_type => [VehicleUnprocessedWhereInput], {
    nullable: true
  })
  NOT?: VehicleUnprocessedWhereInput[] | undefined;

  @Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;
}
