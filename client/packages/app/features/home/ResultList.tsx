import React, { FC, ReactNode } from "react";
import { LoadIndicator } from "app/features/home/LoadIndicator";
import { FlatList, Text } from "@gluestack-ui/themed";
import type { ListRenderItem } from "@react-native/virtualized-lists";

type ResultListFC<T = unknown> = FC<{
  items: T[];
  totalCount: number;
  loadMore: () => void;
  children: ListRenderItem<T>;
}>;

const ResultList: ResultListFC = ({
  items,
  totalCount,
  loadMore,
  children,
}) => {
  if (totalCount === 0) {
    return <Text>No lots</Text>;
  }

  return (
    <FlatList
      h={400}
      data={items}
      ListFooterComponent={
        totalCount === items.length ? undefined : LoadIndicator
      }
      // @ts-ignore
      renderItem={children}
      // @ts-ignore
      keyExtractor={(item) => item.id}
      onEndReached={totalCount === items.length ? undefined : loadMore}
      onEndReachedThreshold={0}
    />
  );
};

export default ResultList;
