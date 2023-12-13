import { JSONSchemaType } from "ajv";
import {
  Count,
  RawSearchResponseItem,
  RawSearchResponsePage,
} from "./search.types";

// TODO https://github.com/ajv-validator/ajv/issues/2163
// @ts-ignore
export const countSchema: JSONSchemaType<Count> = {
  type: "object",
  properties: {
    active: { type: ["string", "null"] },
    live: { type: ["string", "null"] },
    ended: { type: ["string", "null"] },
    "fast-buy": { type: ["string", "null"] },
    upcoming: { type: ["string", "null"] },
  },
  required: ["active", "live", "ended", "fast-buy", "upcoming"],
  additionalProperties: false,
};

// @ts-ignore
export const searchResponseItemSchema: JSONSchemaType<RawSearchResponseItem> = {
  type: "object",
  properties: {
    need_login: { type: "integer" },
    number_trans: { type: "string" },
    vin_trans: { type: "string" },
    milage_trans: { type: "string" },
    location_trans: { type: "string" },
    miles_trans: { type: "string" },
    prebid_closed_trans: { type: "string" },
    prebid_closed_info_trans: { type: "string" },
    sold_by_buy_now_trans: { type: "string" },
    buy_now_trans: { type: "string" },
    left_trans: { type: "string" },
    seller_trans: { type: "string" },
    final_bid_trans: { type: "string" },
    document_trans: { type: "string" },
    status_trans: { type: "string" },
    damage_trans: { type: "string" },
    seller: { type: "string" },
    has_video: { type: "boolean" },
    has_360_view: { type: "boolean" },
    language: { type: "string", nullable: true },
    name: { type: "string" },
    need_login_trans: { type: "string" },
    tag: { type: "string" },
    lot: { type: "string" },
    vin: { type: "string" },
    sold_before: { type: "integer" },
    odometer: { type: "integer" },
    odometer_substr: { type: "integer" },
    odometer_km_substr: { type: "integer" },
    location: { type: "string" },
    see_price_trans: { type: "string" },
    sale_document: { type: "string" },
    sale_document_state: { type: "string" },
    sale_document_split: { type: "string" },
    loss_type: { type: "string" },
    primary_damage: { type: "string" },
    start_code: { type: "string" },
    prebid_close_time: { type: "string" },
    time_left: { type: ["string", "number"] },
    time_left_formatted: { type: ["string", "number"] },
    prebid_price: { type: "string" },
    final_bid: {
      type: ["integer", "object"],
      properties: {},
      required: [],
      additionalProperties: false,
    },
    final_bid_formatted: { type: "string" },
    buy_now_close_time: { type: "integer" },
    buy_now_price: { type: "string" },
    status: { type: "integer" },
    watchlist: { type: "boolean" },
    img: {
      type: "object",
      patternProperties: {
        "^img_\\d+$": { type: "string" },
      },
      required: [],
      additionalProperties: false,
    },
  },
  required: [
    "number_trans",
    "vin_trans",
    "milage_trans",
    "location_trans",
    "miles_trans",
    "prebid_closed_trans",
    "prebid_closed_info_trans",
    "sold_by_buy_now_trans",
    "buy_now_trans",
    "left_trans",
    "seller_trans",
    "final_bid_trans",
    "document_trans",
    "status_trans",
    "damage_trans",
    "seller",
    "has_video",
    "has_360_view",
    "language",
    "name",
    "need_login_trans",
    "need_login",
    "tag",
    "lot",
    "vin",
    "odometer",
    "odometer_substr",
    "odometer_km_substr",
    "location",
    "see_price_trans",
    "sale_document",
    "sale_document_state",
    "sale_document_split",
    "loss_type",
    "primary_damage",
    "start_code",
    "prebid_close_time",
    "time_left",
    "time_left_formatted",
    "prebid_price",
    "final_bid",
    "final_bid_formatted",
    "buy_now_price",
    "status",
    "watchlist",
    "img",
  ],
  additionalProperties: false,
};

// TODO https://github.com/ajv-validator/ajv/issues/2163
// @ts-ignore
export const searchResponseSchema: JSONSchemaType<RawSearchResponsePage> = {
  type: "object",
  properties: {
    current_page: { type: "integer" },
    data: {
      type: "array",
      items: searchResponseItemSchema,
    },
    first_page_url: { type: "string" },
    from: { type: "integer", nullable: true },
    next_page_url: { type: "string", nullable: true },
    path: {
      type: ["string", "array"],
    }, // ???
    per_page: { type: "integer" },
    prev_page_url: { type: "string", nullable: true },
    to: { type: "integer", nullable: true },
    count: countSchema,
  },
  required: [
    "current_page",
    "data",
    "first_page_url",
    "from",
    "next_page_url",
    "path",
    "per_page",
    "prev_page_url",
    "to",
  ],
  additionalProperties: false,
};
