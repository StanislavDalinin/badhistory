import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeOrderByWithRelationInput } from "../../../inputs/MakeOrderByWithRelationInput";
import { MakeWhereInput } from "../../../inputs/MakeWhereInput";
import { MakeWhereUniqueInput } from "../../../inputs/MakeWhereUniqueInput";
import { MakeScalarFieldEnum } from "../../../../enums/MakeScalarFieldEnum";

@ArgsType()
export class FindFirstMakeOrThrowArgs {
  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  where?: MakeWhereInput | undefined;

  @Field(_type => [MakeOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MakeOrderByWithRelationInput[] | undefined;

  @Field(_type => MakeWhereUniqueInput, {
    nullable: true
  })
  cursor?: MakeWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;

  @Field(_type => [MakeScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "createdAt" | "updatedAt" | "deletedAt"> | undefined;
}
