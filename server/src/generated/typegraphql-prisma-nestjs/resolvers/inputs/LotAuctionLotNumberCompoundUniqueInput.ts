import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Auction } from "../../enums/Auction";

@InputType("LotAuctionLotNumberCompoundUniqueInput", {})
export class LotAuctionLotNumberCompoundUniqueInput {
  @Field(_type => Auction, {
    nullable: false
  })
  auction!: "iaai" | "copart";

  @Field(_type => Int, {
    nullable: false
  })
  lotNumber!: number;
}
