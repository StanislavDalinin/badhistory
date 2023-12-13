import { Module } from "@nestjs/common";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { resolvers } from "./generated/typegraphql-prisma-nestjs";
import { TypeGraphQLModule } from "./typegraphql/typegraphql.module";
import { MongoDbWatcher } from "./MongoDbWatcher";
import ServerProcessModule from "./server-process/server-process.module";
import { PubSubService } from "./pub-sub.service";
import { PrismaService } from "./prisma.service";

@Module({
  imports: [
    ServerProcessModule,
    TypeGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      // @ts-ignore
      playground: false,
      autoSchemaFile: "src/schema.gql",
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      subscriptions: {
        "graphql-ws": true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    MongoDbWatcher,
    PrismaService,
    PubSubService,
    AppService,
    // @ts-ignore
    ...resolvers,
  ],
})
export default class AppModule {}
