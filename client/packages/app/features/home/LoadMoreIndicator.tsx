import { FC } from "react";
import { HStack, Text } from "@gluestack-ui/themed";

export const LoadMoreIndicator: FC = () => (
  <HStack space="sm" justifyContent={"center"} alignItems="center" p="$4">
    <Text>Load More</Text>
  </HStack>
);
