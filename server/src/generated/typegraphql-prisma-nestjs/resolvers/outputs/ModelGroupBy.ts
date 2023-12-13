import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ModelCountAggregate } from "../outputs/ModelCountAggregate";
import { ModelMaxAggregate } from "../outputs/ModelMaxAggregate";
import { ModelMinAggregate } from "../outputs/ModelMinAggregate";

@ObjectType("ModelGroupBy", {})
export class ModelGroupBy {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  @Field(_type => String, {
    nullable: false
  })
  makeId!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  @Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @Field(_type => Date, {
    nullable: true
  })
  deleted!: Date | null;

  @Field(_type => ModelCountAggregate, {
    nullable: true
  })
  _count!: ModelCountAggregate | null;

  @Field(_type => ModelMinAggregate, {
    nullable: true
  })
  _min!: ModelMinAggregate | null;

  @Field(_type => ModelMaxAggregate, {
    nullable: true
  })
  _max!: ModelMaxAggregate | null;
}
