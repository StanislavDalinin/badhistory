import { Make, Model, Series, VehicleType } from "@prisma/client";

export type RawToolbarItem = {
  generations: string;
  make: string;
  model: string;
  type: string;
  type_translated: string;
  year_count: string;
};

export type RawGeneration = {
  name: string;
  min_year: number | string;
  max_year: number | string;
};

export type RawYearCount = {
  year: string;
  lot_type_0: number;
  lot_type_1: number;
};

export type Generation = Pick<Series, "name" | "minYear" | "maxYear">;

export type YearCount = { year: number; lotType0: number; lotType1: number };

export type ToolbarItem = {
  generations: Generation[];
  makeName: Make["name"];
  vehicleTypeName: VehicleType["name"];
  modelName: Model["name"];
  yearCount: YearCount[];
};

export type StoredModelAggregate = Pick<Model, "id" | "name">;

export type StoredMakeAggregate = Pick<Make, "id" | "name"> & {
  modelByNameMap: Record<string, StoredModelAggregate>;
};
