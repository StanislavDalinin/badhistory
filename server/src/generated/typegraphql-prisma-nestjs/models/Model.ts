import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Make } from "../models/Make";
import { Series } from "../models/Series";
import { Vehicle } from "../models/Vehicle";
import { ModelCount } from "../resolvers/outputs/ModelCount";

@ObjectType("Model", {})
export class Model {
  @Field(_type => String, {
    nullable: false
  })
  id!: string;

  make?: Make;

  @Field(_type => String, {
    nullable: false
  })
  makeId!: string;

  @Field(_type => String, {
    nullable: false
  })
  name!: string;

  vehicles?: Vehicle[];

  serieses?: Series[];

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
  deleted?: Date | null;

  @Field(_type => ModelCount, {
    nullable: true
  })
  _count?: ModelCount | null;
}
