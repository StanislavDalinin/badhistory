import {
  RawGeneration,
  RawToolbarItem,
  RawYearCount,
  ToolbarItem,
} from "./toolbarItems.types";
import { mapRawToGeneration, mapRawToYearCount } from "./toolbarItems.mappers";
import {
  generationElementsSchema,
  toolbarItemsSchema,
  yearCountElementsSchema,
} from "./toolbarItems.schemas";
import { Injectable } from "@nestjs/common";
import ContentLoadService from "../../content-load/content-load.interface";
import { plusInRecord } from "./toolbarItems.utils";
import { AjvService } from "../../ajv/ajv.service";

@Injectable()
export class ToolbarItemsScraper {
  constructor(
    private readonly ajv: AjvService,
    private readonly contentLoadService: ContentLoadService,
  ) {}

  async scrape(): Promise<ToolbarItem[]> {
    const validateToolbarElements = this.ajv.compile(toolbarItemsSchema);
    const validateGenerationElements = this.ajv.compile(
      generationElementsSchema,
    );
    const validateYearCountElements = this.ajv.compile(yearCountElementsSchema);

    const response = await this.contentLoadService.load(
      "https://bid.cars/app/search/toolbar/ru",
    );

    const firstStageData: RawToolbarItem[] = JSON.parse(response);

    if (!validateToolbarElements(firstStageData)) {
      console.log(validateToolbarElements.errors);
    }

    const secondStageData: ToolbarItem[] = firstStageData.map(
      ({
        make: makeName,
        type: vehicleTypeName,
        model: modelName,
        generations: generationsString,
        year_count: yearCountString,
      }) => {
        const rawGenerations: RawGeneration[] =
          generationsString === "[null]" ||
          generationsString === "null" ||
          generationsString === ""
            ? []
            : JSON.parse(generationsString);

        if (!validateGenerationElements(rawGenerations)) {
          console.log("err generations");
          console.log(rawGenerations);
          console.log(validateGenerationElements.errors);
        }

        const generationCountByNameMap: Record<string, number> = {};

        const generations = rawGenerations.map((rawGeneration) => {
          const generation = mapRawToGeneration(rawGeneration);

          const count = plusInRecord(
            generationCountByNameMap,
            generation.name,
            1,
          );

          if (count > 1) {
            return {
              ...generation,
              name: `${generation.name} - duplicate ${count - 1}`,
            };
          }

          return generation;
        });

        const generationNameDuplicates = Object.keys(
          generationCountByNameMap,
        ).filter(
          (generationName) => generationCountByNameMap[generationName] > 1,
        );

        if (generationNameDuplicates.length > 0) {
          console.log(
            `generationNameDuplicates makeName: ${makeName} vehicleTypeName: ${vehicleTypeName} modelName: ${modelName}`,
            generationNameDuplicates,
          );
        }

        const rawYearCount: RawYearCount[] =
          yearCountString === "[null]" ||
          yearCountString === "null" ||
          yearCountString === ""
            ? []
            : JSON.parse(yearCountString);

        if (!validateYearCountElements(rawYearCount)) {
          console.log("err year_count");
          console.log(rawYearCount);
          console.log(validateYearCountElements.errors);
        }

        const yearCount = rawYearCount.map(mapRawToYearCount);

        return {
          makeName,
          modelName,
          vehicleTypeName,
          generations,
          yearCount,
        };
      },
    );

    return secondStageData;
  }
}
