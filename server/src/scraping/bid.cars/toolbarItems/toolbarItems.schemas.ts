import { JSONSchemaType } from "ajv";
import {
  RawGeneration,
  RawToolbarItem,
  RawYearCount,
} from "./toolbarItems.types";

const toolbarItemSchema: JSONSchemaType<RawToolbarItem> = {
  type: "object",
  properties: {
    generations: { type: "string" },
    make: { type: "string" },
    model: { type: "string" },
    type: { type: "string" },
    type_translated: { type: "string" },
    year_count: { type: "string" },
  },
  required: [
    "generations",
    "make",
    "model",
    "type",
    "type_translated",
    "year_count",
  ],
  additionalProperties: false,
};

export const toolbarItemsSchema: JSONSchemaType<RawToolbarItem[]> = {
  type: "array",
  items: toolbarItemSchema,
};

const generationSchema: JSONSchemaType<RawGeneration> = {
  type: "object",
  properties: {
    name: { type: "string" },
    min_year: { type: ["integer", "string"] },
    max_year: { type: ["integer", "string"] },
  },
  required: ["name", "min_year", "max_year"],
  additionalProperties: false,
};

export const generationElementsSchema: JSONSchemaType<RawGeneration[]> = {
  type: "array",
  items: generationSchema,
};

const yearCountSchema: JSONSchemaType<RawYearCount> = {
  type: "object",
  properties: {
    year: { type: "string" },
    lot_type_0: { type: "integer" },
    lot_type_1: { type: "integer" },
  },
  required: ["year", "lot_type_0", "lot_type_1"],
  additionalProperties: false,
};

export const yearCountElementsSchema: JSONSchemaType<RawYearCount[]> = {
  type: "array",
  items: yearCountSchema,
};
