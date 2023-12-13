import {
  Generation,
  RawGeneration,
  RawToolbarItem,
  RawYearCount,
  ToolbarItem,
  YearCount,
} from "./toolbarItems.types";
import { plusInRecord } from "./toolbarItems.utils";

export const mapRawToGeneration = ({
  name,
  min_year: minYear,
  max_year: maxYear,
}: RawGeneration): Generation => ({
  name,
  minYear: typeof minYear === "string" ? parseInt(minYear) : minYear,
  maxYear: typeof maxYear === "string" ? parseInt(maxYear) : maxYear,
});

export const mapRawToYearCount = ({
  year,
  lot_type_0: lotType0,
  lot_type_1: lotType1,
}: RawYearCount): YearCount => ({
  year: parseInt(year),
  lotType0,
  lotType1,
});
