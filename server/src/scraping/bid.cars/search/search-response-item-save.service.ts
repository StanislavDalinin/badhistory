import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma.service";
import { Vehicle } from "@prisma/client";
import { SearchResponseItem } from "./search.types";

@Injectable()
class SearchResponseItemSaveService {
  constructor(private readonly prisma: PrismaService) {}
  save = async ({ vehicleData, lotData }: SearchResponseItem) => {
    const vehicle = await this.prisma.vehicle.findFirst({
      where: {
        vin: vehicleData.vin,
      },
    });

    if (vehicle === null) {
      const { makeName, modelName, ...vehicle } = vehicleData;

      const { id: modelId } = await this.prisma.model.findFirstOrThrow({
        where: {
          name: {
            equals: modelName,
            mode: "insensitive",
          },
          make: {
            name: {
              equals: makeName,
              mode: "insensitive",
            },
          },
        },
        select: {
          id: true,
        },
      });

      const { id: vehicleId } = await this.prisma.vehicle.create({
        data: {
          ...vehicle,
          modelId: modelId,
        },
        select: {
          id: true,
        },
      });

      await this.createLot(vehicleId, lotData);

      return;
    }

    await this.createLot(vehicle.id, lotData);
  };

  private createLot = async (
    vehicleId: Vehicle["id"],
    lotData: SearchResponseItem["lotData"],
  ) => {
    await this.prisma.lot.create({
      data: {
        sellingBranch: "",
        saleLocation: "",
        preAccidentValue: "",
        actualCashValue: "",
        estimatedRepairCost: "",
        saleStatus: "",
        titleBrand: "",
        titleNotes: "",
        secondaryDamage: "",
        highlights: "",
        key: "",
        engine: "",
        fuelType: "",
        transmission: "",
        drivelineType: "",
        interiorColor: "",
        exteriorColor: "",
        bodyStyle: "",
        airbagsStatus: "",
        manufacturedIn: "",
        sourceLastUpdated: "",
        ...lotData,
        vehicleId,
      },
      select: {
        id: true,
      },
    });
  };
}

export default SearchResponseItemSaveService;
