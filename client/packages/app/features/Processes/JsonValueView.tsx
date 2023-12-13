import { FC } from "react";
import { HStack, Text, VStack } from "@gluestack-ui/themed";
import { JsonValue } from "app/src/generated/client/runtime/library";

export const JsonValueView: FC<{ jsonValue?: JsonValue }> = ({ jsonValue }) => {
  if (typeof jsonValue === "object" && jsonValue !== null) {
    if (Array.isArray(jsonValue)) {
      return (
        <HStack>
          {jsonValue.map((value) => (
            <JsonValueView jsonValue={value} />
          ))}
        </HStack>
      );
    }

    return (
      <VStack>
        {Object.entries(jsonValue).map(([key, value]) => (
          <HStack key={key} px="$2" py="$1">
            <Text>{key}: </Text>
            <JsonValueView jsonValue={value} />
          </HStack>
        ))}
      </VStack>
    );
  }

  return <Text>{jsonValue}</Text>;
};
