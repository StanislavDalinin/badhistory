import { Injectable, Inject } from "@nestjs/common";
import { GqlOptionsFactory, GqlModuleOptions } from "@nestjs/graphql";
import { PrismaService } from "../prisma.service";
import { TYPEGRAPHQL_ROOT_MODULE_OPTIONS } from "./typegraphql.constants";

@Injectable()
export default class TypeGraphQLOptionsFactory implements GqlOptionsFactory {
  constructor(
    @Inject(TYPEGRAPHQL_ROOT_MODULE_OPTIONS)
    private readonly rootModuleOptions: Record<string, any>,
    private readonly prismaService: PrismaService,
  ) {}

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      ...this.rootModuleOptions,
      context: () => ({ prisma: this.prismaService }),
    };
  }
}
