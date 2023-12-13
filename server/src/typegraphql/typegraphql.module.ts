import { Module, DynamicModule } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { PrismaService } from "../prisma.service";
import TypeGraphQLOptionsFactory from "./typegraphql-options.factory";
import { GqlModuleOptions } from "@nestjs/graphql/dist/interfaces/gql-module-options.interface";
import { TYPEGRAPHQL_ROOT_MODULE_OPTIONS } from "./typegraphql.constants";

@Module({})
export class TypeGraphQLModule {
  static forRoot<TOptions extends Record<string, any> = GqlModuleOptions>(
    options?: TOptions,
  ): DynamicModule {
    const dynamicGraphQLModule = GraphQLModule.forRootAsync({
      driver: options?.driver,
      useClass: TypeGraphQLOptionsFactory,
    });

    return {
      ...dynamicGraphQLModule,
      providers: [
        PrismaService,
        ...dynamicGraphQLModule.providers!,
        {
          provide: TYPEGRAPHQL_ROOT_MODULE_OPTIONS,
          useValue: options,
        },
      ],
    };
  }
}
