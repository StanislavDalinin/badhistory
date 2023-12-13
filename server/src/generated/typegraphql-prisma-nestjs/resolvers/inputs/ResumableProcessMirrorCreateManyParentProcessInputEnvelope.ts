import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorCreateManyParentProcessInput } from "../inputs/ResumableProcessMirrorCreateManyParentProcessInput";

@InputType("ResumableProcessMirrorCreateManyParentProcessInputEnvelope", {})
export class ResumableProcessMirrorCreateManyParentProcessInputEnvelope {
  @Field(_type => [ResumableProcessMirrorCreateManyParentProcessInput], {
    nullable: false
  })
  data!: ResumableProcessMirrorCreateManyParentProcessInput[];
}
