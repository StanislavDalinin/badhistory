import { StoredMakeAggregate, ToolbarItem } from "./toolbarItems.types";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma.service";
import { Make, Model, VehicleType } from "@prisma/client";
import { pushInRecord } from "./toolbarItems.utils";
import { get } from "lodash";

const addInRecord = (
  record: Record<string, Set<Model["name"]>>,
  key: string,
  value: Model["name"],
) => {
  let set = record[key];

  if (set === undefined) {
    record[key] = new Set([value]);

    return;
  }

  return set.add(value);
};

@Injectable()
class ToolbarItemsSaver {
  constructor(private readonly prismaService: PrismaService) {}
  async save(toolbarItems: ToolbarItem[]) {
    const vehicleTypeNameSet: Set<VehicleType["name"]> = new Set();

    toolbarItems.forEach(({ vehicleTypeName }) => {
      vehicleTypeNameSet.add(vehicleTypeName);
    });

    const storedVehicleTypes = await this.prismaService.vehicleType.findMany({
      select: {
        id: true,
        name: true,
      },
    });

    const storedVehicleTypeByIdMap = Object.fromEntries(
      storedVehicleTypes.map((vehicleType) => [vehicleType.id, vehicleType]),
    );

    const storedVehicleTypeByNameMap = Object.fromEntries(
      storedVehicleTypes.map((vehicleType) => [vehicleType.name, vehicleType]),
    );

    await Promise.all(
      [...vehicleTypeNameSet].map(async (vehicleTypeName) => {
        if (Object.hasOwn(storedVehicleTypeByNameMap, vehicleTypeName)) {
          return;
        }

        const vehicleType = await this.prismaService.vehicleType.create({
          data: {
            name: vehicleTypeName,
          },
          select: {
            id: true,
            name: true,
          },
        });

        storedVehicleTypeByNameMap[vehicleType.name] = vehicleType;
        storedVehicleTypeByIdMap[vehicleType.id] = vehicleType;
        storedVehicleTypes.push(vehicleType);
      }),
    );

    const makes = await this.prismaService.make.findMany({
      select: {
        id: true,
        name: true,
        models: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    const storedMakeByNameMap: Record<Make["name"], StoredMakeAggregate> =
      Object.fromEntries(
        makes.map((make) => {
          const modelByNameMap: StoredMakeAggregate["modelByNameMap"] =
            Object.fromEntries(make.models.map((model) => [model.name, model]));

          return [
            make.name,
            {
              ...make,
              modelByNameMap,
            },
          ];
        }),
      );

    const makesToCreateByNameMap: Record<Make["name"], Set<Model["name"]>> = {};

    const modelsToCreateByMakeIdMap: Record<
      Make["id"],
      Set<Model["name"]>
    > = {};

    toolbarItems.forEach((toolbarItem) => {
      const storedMake = storedMakeByNameMap[toolbarItem.makeName];

      if (storedMake === undefined) {
        addInRecord(
          makesToCreateByNameMap,
          toolbarItem.makeName,
          toolbarItem.modelName,
        );

        return;
      }

      const storedModel = storedMake.modelByNameMap[toolbarItem.modelName];

      if (storedModel === undefined) {
        addInRecord(
          modelsToCreateByMakeIdMap,
          storedMake.id,
          toolbarItem.modelName,
        );

        return;
      }
    });

    try {
      await Promise.all([
        ...Object.entries(makesToCreateByNameMap).map(
          ([makeName, modelNames]) =>
            this.prismaService.make.create({
              data: {
                name: makeName,
                models: {
                  create: [...modelNames].map((modelName) => ({
                    name: modelName,
                  })),
                },
              },
              include: {
                models: true,
              },
            }),
        ),
        ...Object.entries(modelsToCreateByMakeIdMap).flatMap(
          ([makeId, modelNames]) =>
            [...modelNames].map((modelName) =>
              this.prismaService.model.create({
                data: {
                  makeId,
                  name: modelName,
                },
              }),
            ),
        ),
      ]);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ToolbarItemsSaver;
