import { Box, VStack, Text, FlatList } from "@gluestack-ui/themed";
import { ServerProcessMirrorItem } from "app/features/Processes/ServerProcessMirrorItem";
import { gql } from "app/src/__generated__";
import { useSuspenseQuery } from "@apollo/client";
import { SortOrder } from "app/src/__generated__/graphql";
import { LoadIndicator } from "app/features/home/LoadIndicator";
import { useTransition } from "react";
import { LoadMoreIndicator } from "app/features/home/LoadMoreIndicator";

const GET_RESUMABLE_PROCESS_MIRRORS = gql(/* GraphQL */ `
  query ProcessesScreen(
    $where: ResumableProcessMirrorWhereInput
    $orderBy: [ResumableProcessMirrorOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
    aggregateResumableProcessMirror(where: $where) {
      _count {
        id
      }
    }
    resumableProcessMirrors(
      where: $where
      orderBy: $orderBy
      take: $take
      skip: $skip
    ) {
      id
      type
      status
      currentStep
      props
      state
      result
      log {
        type
        value
      }
      createdAt
      updatedAt
    }
  }
`);

// const RUN_TOOLBARITEMS_SCRAPER = gql(/* GraphQL */ `
//   mutation runToolbarItemsScraper {
//     runToolbarItemsScraper
//   }
// `);

export const ProcessesScreen = () => {
  // const [mutateFunction, { data, loading, error }] = useMutation(
  //   RUN_TOOLBARITEMS_SCRAPER,
  // );
  //
  // console.log(data, loading, error);

  const { data, fetchMore } = useSuspenseQuery(GET_RESUMABLE_PROCESS_MIRRORS, {
    variables: {
      orderBy: [
        {
          createdAt: SortOrder.Desc,
        },
      ],
      where: {
        parentProcessId: {
          isSet: false,
        },
      },
      take: 10,
      skip: 0,
    },
  });

  const [fetchMorePending, startTransition] = useTransition();

  const resumableProcessMirrors = data?.resumableProcessMirrors || [];
  const processCount = data?.aggregateResumableProcessMirror?._count?.id;

  return (
    <FlatList
      flexGrow={1}
      alignItems="center"
      alignSelf="stretch"
      data={resumableProcessMirrors}
      ListHeaderComponent={
        <VStack flexGrow={1} p="$4">
          <Box px={32}>
            <Text>Processes</Text>
          </Box>
          <Text>processCount: {processCount}</Text>
          <Text>
            resumableProcessMirrors.length: {resumableProcessMirrors.length}
          </Text>
          <Box px={32}>
            {/*<Button*/}
            {/*  onPress={() => {*/}
            {/*    console.log("start");*/}
            {/*    mutateFunction();*/}
            {/*  }}*/}
            {/*  size="md"*/}
            {/*  variant="solid"*/}
            {/*  action="primary"*/}
            {/*  isDisabled={false}*/}
            {/*  isFocusVisible={false}*/}
            {/*>*/}
            {/*  <ButtonText>Run process</ButtonText>*/}
            {/*  <ButtonIcon as={PlayIcon} />*/}
            {/*</Button>*/}
          </Box>
        </VStack>
      }
      ListEmptyComponent={<Text>No Processes</Text>}
      ListFooterComponent={
        processCount ===
        resumableProcessMirrors.length ? undefined : fetchMorePending ? (
          LoadIndicator
        ) : (
          <LoadMoreIndicator />
        )
      }
      renderItem={({ item }) => (
        // @ts-ignore
        <ServerProcessMirrorItem serverProcessMirror={item} />
      )}
      // @ts-ignore
      keyExtractor={(item) => item.id}
      onEndReached={
        fetchMorePending || processCount === resumableProcessMirrors.length
          ? undefined
          : () => {
              startTransition(() => {
                fetchMore({
                  variables: {
                    skip: resumableProcessMirrors.length,
                  },
                });
              });
            }
      }
      onEndReachedThreshold={0}
    />
  );
};
