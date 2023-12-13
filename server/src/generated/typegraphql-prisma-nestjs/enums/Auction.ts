import { Args, ArgsType, Context, Field, Float, ID, Info, InputType, Int, Mutation, ObjectType, Query, ResolveField, Resolver, Root, registerEnumType } from "@nestjs/graphql";

export enum Auction {
  iaai = "iaai",
  copart = "copart"
}
registerEnumType(Auction, {
  name: "Auction",
  description: undefined,
});
