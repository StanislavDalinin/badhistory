import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { LotOrderByWithRelationInput } from "../../../inputs/LotOrderByWithRelationInput";
import { LotWhereInput } from "../../../inputs/LotWhereInput";
import { LotWhereUniqueInput } from "../../../inputs/LotWhereUniqueInput";

@ArgsType()
export class AggregateLotArgs {
  @Field(_type => LotWhereInput, {
    nullable: true
  })
  where?: LotWhereInput | undefined;

  @Field(_type => [LotOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: LotOrderByWithRelationInput[] | undefined;

  @Field(_type => LotWhereUniqueInput, {
    nullable: true
  })
  cursor?: LotWhereUniqueInput | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  take?: number | undefined;

  @Field(_type => Int, {
    nullable: true
  })
  skip?: number | undefined;
}
