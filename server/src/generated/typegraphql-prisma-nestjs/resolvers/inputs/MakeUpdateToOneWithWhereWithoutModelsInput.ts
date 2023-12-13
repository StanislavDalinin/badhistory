import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeUpdateWithoutModelsInput } from "../inputs/MakeUpdateWithoutModelsInput";
import { MakeWhereInput } from "../inputs/MakeWhereInput";

@InputType("MakeUpdateToOneWithWhereWithoutModelsInput", {})
export class MakeUpdateToOneWithWhereWithoutModelsInput {
  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  where?: MakeWhereInput | undefined;

  @Field(_type => MakeUpdateWithoutModelsInput, {
    nullable: false
  })
  data!: MakeUpdateWithoutModelsInput;
}
