import { View, FlatList, Text, Box, VStack } from "@gluestack-ui/themed";
import { gql } from "app/src/__generated__/gql";
import { useQuery } from "@apollo/client";
import { FC, useState } from "react";
import { SortOrder } from "app/src/__generated__/graphql";
import { LotCard } from "./LotCard";
import { LoadIndicator } from "./LoadIndicator";
import { FilterParams, LotsFilter } from "./LotsFilter";
import { LoadMoreIndicator } from "app/features/home/LoadMoreIndicator";

const GET_LOTS = gql(/* GraphQL */ `
  query Query(
    $take: Int
    $skip: Int
    $orderBy: [LotOrderByWithRelationInput!]
    $where: LotWhereInput
  ) {
    aggregateLot(where: $where) {
      _count {
        id
      }
    }
    lots(take: $take, skip: $skip, orderBy: $orderBy, where: $where) {
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
      vehicleId
      unprocessed {
        imgs
      }
      vehicle {
        id
        vin
        modelId
        seriesId
        vehicleTypeId
        year
        model {
          id
          name
          make {
            id
            name
          }
        }
      }
    }
  }
`);

export const HomeScreen: FC = () => {
  const [filterParams, setFilterParams] = useState<FilterParams>({});

  const { makeId, modelId } = filterParams;

  const {
    data,
    fetchMore,
    loading: initialLoading,
  } = useQuery(GET_LOTS, {
    variables: {
      take: 10,
      skip: 0,
      orderBy: [
        {
          auctionDateTime: SortOrder.Desc,
        },
      ],
      where:
        modelId !== undefined
          ? {
              vehicle: {
                is: {
                  modelId: {
                    equals: modelId,
                  },
                },
              },
            }
          : makeId !== ""
            ? {
                vehicle: {
                  is: {
                    model: {
                      is: {
                        makeId: {
                          equals: makeId,
                        },
                      },
                    },
                  },
                },
              }
            : {},
    },
  });

  const lots = data?.lots || [];
  const lotCount = data?.aggregateLot._count?.id;

  const [moreLoading, setMoreLoading] = useState(false);

  return (
    <FlatList
      height={"100%"}
      flexGrow={1}
      alignItems="center"
      p="$4"
      alignSelf="stretch"
      data={lots}
      ListHeaderComponent={
        <LotsFilter
          filterParams={filterParams}
          setFilterParams={setFilterParams}
        />
      }
      ListEmptyComponent={
        initialLoading ? <LoadIndicator /> : <Text>No lots</Text>
      }
      ListFooterComponent={
        initialLoading || lotCount === lots.length ? undefined : moreLoading ? (
          <LoadIndicator />
        ) : (
          <LoadMoreIndicator />
        )
      }
      // @ts-ignore
      renderItem={({ item }) => <LotCard lot={item} />}
      // @ts-ignore
      keyExtractor={(item) => item.id}
      onEndReached={
        initialLoading || moreLoading || lotCount === lots.length
          ? undefined
          : async () => {
              console.log("EndReached");
              setMoreLoading(true);

              try {
                await fetchMore({
                  variables: {
                    skip: lots.length,
                  },
                });
              } finally {
                setMoreLoading(false);
              }
            }
      }
      onEndReachedThreshold={0}
    />
  );
};
