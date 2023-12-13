import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateManyMakeInputEnvelope } from "../inputs/ModelCreateManyMakeInputEnvelope";
import { ModelCreateOrConnectWithoutMakeInput } from "../inputs/ModelCreateOrConnectWithoutMakeInput";
import { ModelCreateWithoutMakeInput } from "../inputs/ModelCreateWithoutMakeInput";
import { ModelScalarWhereInput } from "../inputs/ModelScalarWhereInput";
import { ModelUpdateManyWithWhereWithoutMakeInput } from "../inputs/ModelUpdateManyWithWhereWithoutMakeInput";
import { ModelUpdateWithWhereUniqueWithoutMakeInput } from "../inputs/ModelUpdateWithWhereUniqueWithoutMakeInput";
import { ModelUpsertWithWhereUniqueWithoutMakeInput } from "../inputs/ModelUpsertWithWhereUniqueWithoutMakeInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelUpdateManyWithoutMakeNestedInput", {})
export class ModelUpdateManyWithoutMakeNestedInput {
  @Field(_type => [ModelCreateWithoutMakeInput], {
    nullable: true
  })
  create?: ModelCreateWithoutMakeInput[] | undefined;

  @Field(_type => [ModelCreateOrConnectWithoutMakeInput], {
    nullable: true
  })
  connectOrCreate?: ModelCreateOrConnectWithoutMakeInput[] | undefined;

  @Field(_type => [ModelUpsertWithWhereUniqueWithoutMakeInput], {
    nullable: true
  })
  upsert?: ModelUpsertWithWhereUniqueWithoutMakeInput[] | undefined;

  @Field(_type => ModelCreateManyMakeInputEnvelope, {
    nullable: true
  })
  createMany?: ModelCreateManyMakeInputEnvelope | undefined;

  @Field(_type => [ModelWhereUniqueInput], {
    nullable: true
  })
  set?: ModelWhereUniqueInput[] | undefined;

  @Field(_type => [ModelWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ModelWhereUniqueInput[] | undefined;

  @Field(_type => [ModelWhereUniqueInput], {
    nullable: true
  })
  delete?: ModelWhereUniqueInput[] | undefined;

  @Field(_type => [ModelWhereUniqueInput], {
    nullable: true
  })
  connect?: ModelWhereUniqueInput[] | undefined;

  @Field(_type => [ModelUpdateWithWhereUniqueWithoutMakeInput], {
    nullable: true
  })
  update?: ModelUpdateWithWhereUniqueWithoutMakeInput[] | undefined;

  @Field(_type => [ModelUpdateManyWithWhereWithoutMakeInput], {
    nullable: true
  })
  updateMany?: ModelUpdateManyWithWhereWithoutMakeInput[] | undefined;

  @Field(_type => [ModelScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ModelScalarWhereInput[] | undefined;
}
