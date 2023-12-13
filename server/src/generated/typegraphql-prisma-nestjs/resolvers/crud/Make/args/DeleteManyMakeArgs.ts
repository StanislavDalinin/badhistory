import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MakeWhereInput } from "../../../inputs/MakeWhereInput";

@ArgsType()
export class DeleteManyMakeArgs {
  @Field(_type => MakeWhereInput, {
    nullable: true
  })
  where?: MakeWhereInput | undefined;
}
