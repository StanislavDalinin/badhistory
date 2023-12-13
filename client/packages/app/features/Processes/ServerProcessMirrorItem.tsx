import { FC } from "react";
import { ResumableProcessMirror } from "app/src/__generated__/graphql";
import { Card } from "app/features/Card";
import { Box, Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Link } from "solito/link";
import { JsonValueView } from "./JsonValueView";

export const ServerProcessMirrorItem: FC<{
  serverProcessMirror: Pick<
    ResumableProcessMirror,
    "id" | "type" | "status" | "props" | "updatedAt" | "createdAt"
  >;
}> = ({ serverProcessMirror }) => {
  return (
    <Card>
      <VStack>
        <HStack>
          <Link href={`/processes/${serverProcessMirror.id}`}>
            <Text
              $dark-color="$textLight200"
              fontSize="$sm"
              my="$1.5"
              px="$6"
              pt="$4"
              pb="$6"
            >
              {serverProcessMirror.id}
            </Text>
          </Link>
          <Heading
            $dark-color="$textLight200"
            size="sm"
            px="$6"
            pt="$4"
            pb="$6"
          >
            {serverProcessMirror.type}
          </Heading>
          <Text
            $dark-color="$textLight200"
            fontSize="$sm"
            my="$1.5"
            px="$6"
            pt="$4"
            pb="$6"
          >
            {serverProcessMirror.status}
          </Text>
        </HStack>
        <Box px="$6" pt="$4" pb="$6">
          <JsonValueView jsonValue={serverProcessMirror.props} />
        </Box>
        <Box px="$6" pt="$4" pb="$6">
          <Text>updatedAt: {serverProcessMirror.updatedAt}</Text>
          <Text>createdAt: {serverProcessMirror.createdAt}</Text>
        </Box>
      </VStack>
    </Card>
  );
};
