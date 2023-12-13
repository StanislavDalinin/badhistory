import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesCreateOrConnectWithoutVehiclesInput } from "../inputs/SeriesCreateOrConnectWithoutVehiclesInput";
import { SeriesCreateWithoutVehiclesInput } from "../inputs/SeriesCreateWithoutVehiclesInput";
import { SeriesUpdateToOneWithWhereWithoutVehiclesInput } from "../inputs/SeriesUpdateToOneWithWhereWithoutVehiclesInput";
import { SeriesUpsertWithoutVehiclesInput } from "../inputs/SeriesUpsertWithoutVehiclesInput";
import { SeriesWhereInput } from "../inputs/SeriesWhereInput";
import { SeriesWhereUniqueInput } from "../inputs/SeriesWhereUniqueInput";

@InputType("SeriesUpdateOneWithoutVehiclesNestedInput", {})
export class SeriesUpdateOneWithoutVehiclesNestedInput {
  @Field(_type => SeriesCreateWithoutVehiclesInput, {
    nullable: true
  })
  create?: SeriesCreateWithoutVehiclesInput | undefined;

  @Field(_type => SeriesCreateOrConnectWithoutVehiclesInput, {
    nullable: true
  })
  connectOrCreate?: SeriesCreateOrConnectWithoutVehiclesInput | undefined;

  @Field(_type => SeriesUpsertWithoutVehiclesInput, {
    nullable: true
  })
  upsert?: SeriesUpsertWithoutVehiclesInput | undefined;

  @Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @Field(_type => SeriesWhereInput, {
    nullable: true
  })
  delete?: SeriesWhereInput | undefined;

  @Field(_type => SeriesWhereUniqueInput, {
    nullable: true
  })
  connect?: SeriesWhereUniqueInput | undefined;

  @Field(_type => SeriesUpdateToOneWithWhereWithoutVehiclesInput, {
    nullable: true
  })
  update?: SeriesUpdateToOneWithWhereWithoutVehiclesInput | undefined;
}
