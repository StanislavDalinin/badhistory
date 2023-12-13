import {
  ChangeStream,
  ChangeStreamDeleteDocument,
  ChangeStreamDocument,
  ChangeStreamInsertDocument,
  ChangeStreamReplaceDocument,
  ChangeStreamUpdateDocument,
  Document,
  MongoClient,
} from "mongodb";
import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaService } from "./prisma.service";
import { PubSubService } from "./pub-sub.service";
import * as process from "process";

const toLowerCaseFirstChar = (string: string) =>
  string.charAt(0).toLowerCase() + string.substring(1);

const toUpperCaseFirstChar = (string: string) =>
  string.charAt(0).toUpperCase() + string.substring(1);

@Injectable()
export class MongoDbWatcher implements OnModuleInit {
  constructor(
    private readonly prisma: PrismaService,
    private readonly pubSub: PubSubService,
  ) {}

  async onModuleInit() {
    console.log("MongoDbWatcher");

    //mongodb://root:example@localhost:27018/badhistory?authSource=admin
    // const url = "mongodb://localhost:27018";
    const url = process.env.DATABASE_URL!;
    const client = new MongoClient(url);

    // Database Name
    const dbName = "badhistory";

    // Use connect method to connect to the server
    await client.connect();
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    console.log("Connected successfully to BD");

    const dbChangeStream = db.watch();

    this.run(dbChangeStream);
  }

  async run(
    dbChangeStream: ChangeStream<Document, ChangeStreamDocument<Document>>,
  ) {
    while (true) {
      const event = await dbChangeStream.next();

      if (event.operationType === "update") {
        event;
      }

      switch (event.operationType) {
        case "delete": {
          event as ChangeStreamDeleteDocument;

          const { coll: collectionName } = event.ns;

          const triggerName = `${toLowerCaseFirstChar(collectionName)}Deleted`;

          const { _id } = event.documentKey;

          this.pubSub.publish(triggerName, {
            [triggerName]: {
              id: _id.toString(),
            },
          });

          break;
        }
        case "insert": {
          event as ChangeStreamInsertDocument;

          const { coll: collectionName } = event.ns;

          const triggerName = `${toLowerCaseFirstChar(collectionName)}Added`;

          const { _id } = event.documentKey;

          const entity = await this.prisma[
            toLowerCaseFirstChar(collectionName)
          ].findUnique({
            where: {
              id: _id.toString(),
            },
          });

          this.pubSub.publish(triggerName, {
            [triggerName]: entity,
          });

          break;
        }
        case "replace": {
          event as ChangeStreamReplaceDocument;
          break;
        }
        case "update": {
          event as ChangeStreamUpdateDocument;

          // console.log(event);

          const { coll: collectionName } = event.ns;

          // const { updatedFields, removedFields } = event.updateDescription;

          const triggerName = `${toLowerCaseFirstChar(collectionName)}Updated`;

          const { _id } = event.documentKey;

          const entity = await this.prisma[
            toLowerCaseFirstChar(collectionName)
          ].findUnique({
            where: {
              id: _id.toString(),
            },
          });

          this.pubSub.publish(triggerName, {
            [triggerName]: entity,
            // [triggerName]: event.updateDescription,
          });

          break;
        }
        default:
          console.log(event);
      }
    }
  }
}
