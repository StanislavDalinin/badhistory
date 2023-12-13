import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResumableProcessMirrorScalarWhereInput } from "../inputs/ResumableProcessMirrorScalarWhereInput";
import { ResumableProcessMirrorUpdateManyMutationInput } from "../inputs/ResumableProcessMirrorUpdateManyMutationInput";

@InputType("ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput", {})
export class ResumableProcessMirrorUpdateManyWithWhereWithoutParentProcessInput {
  @Field(_type => ResumableProcessMirrorScalarWhereInput, {
    nullable: false
  })
  where!: ResumableProcessMirrorScalarWhereInput;

  @Field(_type => ResumableProcessMirrorUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResumableProcessMirrorUpdateManyMutationInput;
}
