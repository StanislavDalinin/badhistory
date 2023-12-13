import { FC } from "react";
import { Card } from "app/features/Card";
import { Box, HStack, Text, VStack, Image } from "@gluestack-ui/themed";
import { Make, Model, Vehicle, Lot } from "app/src/__generated__/graphql";
import { Link } from "solito/link";

type LotCardLot = Omit<
  Lot,
  "createdAt" | "deleted" | "updatedAt" | "unprocessed" | "vehicle"
> & {
  unprocessed: Pick<Lot["unprocessed"], "imgs">;
  vehicle: Pick<Vehicle, "id" | "year" | "vin"> & {
    model: Pick<Model, "id" | "name"> & {
      make: Pick<Make, "id" | "name">;
    };
  };
};
export const LotCard: FC<{ lot: LotCardLot }> = ({ lot }) => {
  const { vehicle } = lot;

  return (
    <Card>
      <HStack>
        <Box mr="$4">
          <Image
            w={200}
            height={200}
            source={{
              uri: lot.unprocessed.imgs[0],
            }}
            alt={`${lot.auction}/${lot.lotNumber}`}
          />
        </Box>
        <VStack>
          <Text>
            {vehicle.year}, {vehicle.model.make.name} {vehicle.model.name}
          </Text>
          <Box>
            <Text>Lot number: </Text>
            <Link href={`/lots/${lot.id}`}>
              <Text>
                {lot.lotNumber} ({lot.auction})
              </Text>
            </Link>
          </Box>
          <Text>VIN: {vehicle.vin}</Text>
          <Text>Final bid: ${lot.finalBid}</Text>
        </VStack>
      </HStack>
    </Card>
  );
};
