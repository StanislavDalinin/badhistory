import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCreateOrConnectWithoutVehiclesInput } from "../inputs/ModelCreateOrConnectWithoutVehiclesInput";
import { ModelCreateWithoutVehiclesInput } from "../inputs/ModelCreateWithoutVehiclesInput";
import { ModelUpdateToOneWithWhereWithoutVehiclesInput } from "../inputs/ModelUpdateToOneWithWhereWithoutVehiclesInput";
import { ModelUpsertWithoutVehiclesInput } from "../inputs/ModelUpsertWithoutVehiclesInput";
import { ModelWhereUniqueInput } from "../inputs/ModelWhereUniqueInput";

@InputType("ModelUpdateOneRequiredWithoutVehiclesNestedInput", {})
export class ModelUpdateOneRequiredWithoutVehiclesNestedInput {
  @Field(_type => ModelCreateWithoutVehiclesInput, {
    nullable: true
  })
  create?: ModelCreateWithoutVehiclesInput | undefined;

  @Field(_type => ModelCreateOrConnectWithoutVehiclesInput, {
    nullable: true
  })
  connectOrCreate?: ModelCreateOrConnectWithoutVehiclesInput | undefined;

  @Field(_type => ModelUpsertWithoutVehiclesInput, {
    nullable: true
  })
  upsert?: ModelUpsertWithoutVehiclesInput | undefined;

  @Field(_type => ModelWhereUniqueInput, {
    nullable: true
  })
  connect?: ModelWhereUniqueInput | undefined;

  @Field(_type => ModelUpdateToOneWithWhereWithoutVehiclesInput, {
    nullable: true
  })
  update?: ModelUpdateToOneWithWhereWithoutVehiclesInput | undefined;
}
