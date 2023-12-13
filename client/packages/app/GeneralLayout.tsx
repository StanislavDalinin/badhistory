import { FC, ReactNode } from "react";
import { Box, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "solito/link";

const NavigationItem: FC<{ href: string; children: string }> = ({
  href,
  children,
}) => (
  <Link href={href}>
    <Box py={8} px={16}>
      <Text fontSize="$md">{children}</Text>
    </Box>
  </Link>
);

export const GeneralLayout: FC<{
  children: ReactNode;
}> = ({ children }) => (
  <HStack h={"100%"} flexGrow={1}>
    <VStack
      sx={{
        w: 200,
        h: "auto",
        borderRightWidth: 1,
        borderRightColor: "gray",
        borderStyle: "solid",
      }}
    >
      <NavigationItem href="/">Home</NavigationItem>
      <NavigationItem href="/processes">Processes</NavigationItem>
    </VStack>
    {children}
  </HStack>
);
