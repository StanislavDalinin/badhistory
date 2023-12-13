import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ModelOrderByWithRelationInput } from "../../../inputs/ModelOrderByWithRelationInput";
import { ModelWhereInput } from "../../../inputs/ModelWhereInput";
import { ModelWhereUniqueInput } from "../../../inputs/ModelWhereUniqueInput";
import { ModelScalarFieldEnum } from "../../../../enums/ModelScalarFieldEnum";

@ArgsType()
export class FindFirstModelArgs {
  @Field(_type => ModelWhereInput, {
    nullable: true
  })
  where?: ModelWhereInput | undefined;

  @Field(_type => [ModelOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ModelOrderByWithRelationInput[] | undefined;

  @Field(_type => ModelWhereUniqueInput, {
    nullable: true
  })
  cursor?: ModelWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [ModelScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "makeId" | "name" | "createdAt" | "updatedAt" | "deleted"> | undefined;
}
