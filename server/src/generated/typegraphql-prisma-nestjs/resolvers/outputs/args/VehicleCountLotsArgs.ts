import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotWhereInput } from "../../inputs/LotWhereInput";

@ArgsType()
export class VehicleCountLotsArgs {
  @Field(_type => LotWhereInput, {
    nullable: true
  })
  where?: LotWhereInput | undefined;
}
