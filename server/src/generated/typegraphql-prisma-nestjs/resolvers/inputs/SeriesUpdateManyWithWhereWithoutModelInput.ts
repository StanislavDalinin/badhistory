import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SeriesScalarWhereInput } from "../inputs/SeriesScalarWhereInput";
import { SeriesUpdateManyMutationInput } from "../inputs/SeriesUpdateManyMutationInput";

@InputType("SeriesUpdateManyWithWhereWithoutModelInput", {})
export class SeriesUpdateManyWithWhereWithoutModelInput {
  @Field(_type => SeriesScalarWhereInput, {
    nullable: false
  })
  where!: SeriesScalarWhereInput;

  @Field(_type => SeriesUpdateManyMutationInput, {
    nullable: false
  })
  data!: SeriesUpdateManyMutationInput;
}
