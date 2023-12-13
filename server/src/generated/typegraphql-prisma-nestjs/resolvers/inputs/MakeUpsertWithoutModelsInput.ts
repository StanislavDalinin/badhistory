import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeCreateWithoutModelsInput } from "../inputs/MakeCreateWithoutModelsInput";
import { MakeUpdateWithoutModelsInput } from "../inputs/MakeUpdateWithoutModelsInput";
import { MakeWhereInput } from "../inputs/MakeWhereInput";

@InputType("MakeUpsertWithoutModelsInput", {})
export class MakeUpsertWithoutModelsInput {
  @Field(_type => MakeUpdateWithoutModelsInput, {
    nullable: false
  })
  update!: MakeUpdateWithoutModelsInput;

  @Field(_type => MakeCreateWithoutModelsInput, {
    nullable: false
  })
  create!: MakeCreateWithoutModelsInput;

  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  where?: MakeWhereInput | undefined;
}
