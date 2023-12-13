import { PubSub } from "graphql-subscriptions";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PubSubService extends PubSub {}
