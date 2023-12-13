import { Injectable } from "@nestjs/common";
import { PrismaService } from "../../../prisma.service";
import { Lot } from "@prisma/client";

@Injectable()
export class SearchResponseItemCheckService {
  constructor(private readonly prisma: PrismaService) {}
  check = async ({
    auction,
    lotNumber,
  }: Pick<Lot, "auction" | "lotNumber">) => {
    const lotCount = await this.prisma.lot.count({
      where: {
        auction,
        lotNumber,
      },
    });

    return lotCount > 0;
  };
}
