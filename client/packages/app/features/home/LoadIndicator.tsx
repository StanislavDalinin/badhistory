import { FC } from "react";
import { HStack, Spinner, Text } from "@gluestack-ui/themed";

export const LoadIndicator: FC = () => (
  <HStack space="sm" justifyContent={"center"} alignItems="center" p="$4">
    <Spinner size="small" />
    <Text>Loading...</Text>
  </HStack>
);
