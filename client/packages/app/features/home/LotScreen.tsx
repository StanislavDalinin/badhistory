import { FC } from "react";
import { createParam } from "solito";
import { gql } from "app/src/__generated__";
import { skipToken, useSuspenseQuery } from "@apollo/client";
import { JsonValueView } from "app/features/Processes/JsonValueView";
import { VStack, Text } from "@gluestack-ui/themed";

const { useParam } = createParam<{ id: string }>();

const GET_LOT = gql(/* GraphQL */ `
  query LotScreen($where: LotWhereUniqueInput!) {
    lot(where: $where) {
      id
      auction
      lotNumber
      sellingBranch
      saleLocation
      location
      auctionDateTime
      seller
      preAccidentValue
      actualCashValue
      estimatedRepairCost
      lastPreBid
      finalBid
      saleStatus
      titleType
      titleBrand
      titleNotes
      primaryDamage
      secondaryDamage
      loss
      startCode
      highlights
      key
      odometer
      engine
      fuelType
      transmission
      drivelineType
      interiorColor
      exteriorColor
      buyNowPrice
      bodyStyle
      airbagsStatus
      cylinders
      manufacturedIn
      sourceLastUpdated
      createdAt
      updatedAt
      unprocessed {
        imgs
        status
        soldBefore
        buyNowCloseTime
        prebidClosedTrans
        leftTrans
      }
      vehicle {
        id
        vin
        createdAt
        model {
          id
          name
          make {
            id
            name
          }
        }
        unprocessed {
          name
        }
        updatedAt
        year
      }
    }
  }
`);

export const LotScreen: FC = () => {
  const [id] = useParam("id");

  const { data } = useSuspenseQuery(
    GET_LOT,
    id === undefined
      ? skipToken
      : {
          variables: {
            where: {
              id,
            },
          },
        },
  );

  const { vehicle, ...lot } = data!.lot!;

  return (
    <VStack>
      <Text>LotScreen</Text>

      <JsonValueView jsonValue={lot} />
      <JsonValueView jsonValue={vehicle} />
    </VStack>
  );
};
