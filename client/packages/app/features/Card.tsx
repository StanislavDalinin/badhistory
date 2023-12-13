import { Box } from "@gluestack-ui/themed";
import { FC, ReactNode } from "react";

export const Card: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <Box
    borderColor="$borderLight200"
    borderRadius="$lg"
    borderWidth="$1"
    my="$4"
    overflow="hidden"
    $base-mx="$5"
    $dark-bg="$backgroundDark900"
    $dark-borderColor="$borderDark800"
  >
    {children}
  </Box>
);
