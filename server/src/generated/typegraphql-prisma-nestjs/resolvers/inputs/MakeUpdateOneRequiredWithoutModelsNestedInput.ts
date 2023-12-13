import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MakeCreateOrConnectWithoutModelsInput } from "../inputs/MakeCreateOrConnectWithoutModelsInput";
import { MakeCreateWithoutModelsInput } from "../inputs/MakeCreateWithoutModelsInput";
import { MakeUpdateToOneWithWhereWithoutModelsInput } from "../inputs/MakeUpdateToOneWithWhereWithoutModelsInput";
import { MakeUpsertWithoutModelsInput } from "../inputs/MakeUpsertWithoutModelsInput";
import { MakeWhereUniqueInput } from "../inputs/MakeWhereUniqueInput";

@InputType("MakeUpdateOneRequiredWithoutModelsNestedInput", {})
export class MakeUpdateOneRequiredWithoutModelsNestedInput {
  @Field(_type => MakeCreateWithoutModelsInput, {
    nullable: true
  })
  create?: MakeCreateWithoutModelsInput | undefined;

  @Field(_type => MakeCreateOrConnectWithoutModelsInput, {
    nullable: true
  })
  connectOrCreate?: MakeCreateOrConnectWithoutModelsInput | undefined;

  @Field(_type => MakeUpsertWithoutModelsInput, {
    nullable: true
  })
  upsert?: MakeUpsertWithoutModelsInput | undefined;

  @Field(_type => MakeWhereUniqueInput, {
    nullable: true
  })
  connect?: MakeWhereUniqueInput | undefined;

  @Field(_type => MakeUpdateToOneWithWhereWithoutModelsInput, {
    nullable: true
  })
  update?: MakeUpdateToOneWithWhereWithoutModelsInput | undefined;
}
