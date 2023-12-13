import {
  AlertCircleIcon,
  Box,
  Button,
  ButtonIcon,
  ButtonText,
  FlatList,
  Heading,
  HStack,
  PlayIcon,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { FC, useState, useTransition } from "react";
import { createParam } from "solito";
import { ServerProcessMirrorItem } from "app/features/Processes/ServerProcessMirrorItem";
import { skipToken, useMutation, useSuspenseQuery } from "@apollo/client";
import { Link } from "solito/link";
import { gql } from "app/src/__generated__";
import { SortOrder, Status } from "app/src/__generated__/graphql";
import { JsonValueView } from "../JsonValueView";
import { LoadIndicator } from "app/features/home/LoadIndicator";
import { LoadMoreIndicator } from "app/features/home/LoadMoreIndicator";

const { useParam } = createParam<{ id: string }>();

const GET_RESUMABLE_PROCESS_MIRRORS = gql(/* GraphQL */ `
  query ProcessScreen(
    $where: ResumableProcessMirrorWhereInput
    $orderBy: [ResumableProcessMirrorOrderByWithRelationInput!]
    $take: Int
    $skip: Int
    $resumableProcessMirrorWhere: ResumableProcessMirrorWhereUniqueInput!
  ) {
    resumableProcessMirror(where: $resumableProcessMirrorWhere) {
      id
      parentProcessId
      parentProcessStep
      parentProcessStepKey
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
      props
      createdAt
      updatedAt
    }
  }
`);

const ABORT_PROCESS = gql(/* GraphQL */ `
  mutation Mutation2($abortProcessId: String!) {
    abortProcess(id: $abortProcessId)
  }
`);

const RESUME_PROCESS = gql(/* GraphQL */ `
  mutation Mutation3($abortProcessId: String!) {
    resumeProcess(id: $abortProcessId)
  }
`);

export const ProcessScreen: FC = () => {
  const [id] = useParam("id");

  const { data, fetchMore } = useSuspenseQuery(
    GET_RESUMABLE_PROCESS_MIRRORS,
    id === undefined
      ? skipToken
      : {
          variables: {
            resumableProcessMirrorWhere: {
              id,
            },
            orderBy: [
              {
                createdAt: SortOrder.Desc,
              },
            ],
            where: {
              parentProcessId: {
                equals: id,
              },
            },
            take: 5,
            skip: 0,
          },
        },
  );

  const [fetchMorePending, startTransition] = useTransition();

  const resumableProcessMirror = data?.resumableProcessMirror;
  const resumableProcessMirrors = data?.resumableProcessMirrors || [];
  const processCount = data?.aggregateResumableProcessMirror?._count?.id || 0;

  const [mutateFunction, { data: data2, loading: loading1, error }] =
    useMutation(ABORT_PROCESS);

  const [
    resumeProcessMutateFunction,
    { data: data3, loading: loading2, error: error2 },
  ] = useMutation(RESUME_PROCESS);

  // console.log(data2, loading1, error);
  // console.log(data3, loading2, error2);

  const [loading, setLoading] = useState(false);

  return (
    <FlatList
      flexGrow={1}
      alignSelf="stretch"
      data={resumableProcessMirrors}
      ListHeaderComponent={
        resumableProcessMirror !== undefined &&
        resumableProcessMirror !== null ? (
          <VStack p="$4">
            <Link href={`/processes`}>
              <Text
                $dark-color="$textLight200"
                fontSize="$sm"
                my="$1.5"
                px="$6"
                pt="$4"
                pb="$6"
              >
                Processes
              </Text>
            </Link>
            <Heading
              $dark-color="$textLight200"
              size="sm"
              px="$6"
              pt="$4"
              pb="$6"
            >
              Process
            </Heading>
            <VStack>
              <HStack>
                {resumableProcessMirror.parentProcessId !== null && (
                  <Link
                    href={`/processes/${resumableProcessMirror.parentProcessId}`}
                  >
                    <Text
                      $dark-color="$textLight200"
                      fontSize="$sm"
                      my="$1.5"
                      px="$6"
                      pt="$4"
                      pb="$6"
                    >
                      Parent process: {resumableProcessMirror.parentProcessId}
                    </Text>
                  </Link>
                )}

                <Text
                  $dark-color="$textLight200"
                  fontSize="$sm"
                  my="$1.5"
                  px="$6"
                  pt="$4"
                  pb="$6"
                >
                  {resumableProcessMirror.id}
                </Text>
                <Heading
                  $dark-color="$textLight200"
                  size="sm"
                  px="$6"
                  pt="$4"
                  pb="$6"
                >
                  {resumableProcessMirror.type}
                </Heading>
                <Text
                  $dark-color="$textLight200"
                  fontSize="$sm"
                  my="$1.5"
                  px="$6"
                  pt="$4"
                  pb="$6"
                >
                  {resumableProcessMirror.status}
                </Text>
                {resumableProcessMirror.parentProcessId === null &&
                  resumableProcessMirror.status === Status.Pending && (
                    <Button
                      onPress={() => {
                        console.log("abort");
                        mutateFunction({
                          variables: {
                            abortProcessId: resumableProcessMirror.id,
                          },
                        });
                      }}
                      size="md"
                      variant="solid"
                      action="primary"
                      isDisabled={false}
                      isFocusVisible={false}
                    >
                      <ButtonText>Abort process </ButtonText>
                      <ButtonIcon as={AlertCircleIcon} />
                    </Button>
                  )}
                {resumableProcessMirror.parentProcessId === null &&
                  (resumableProcessMirror.status === Status.Aborted ||
                    resumableProcessMirror.status === Status.Failed) && (
                    <Button
                      onPress={() => {
                        console.log("Resume");
                        resumeProcessMutateFunction({
                          variables: {
                            abortProcessId: resumableProcessMirror.id,
                          },
                        });
                      }}
                      size="md"
                      variant="solid"
                      action="primary"
                      isDisabled={false}
                      isFocusVisible={false}
                    >
                      <ButtonText>Resume process </ButtonText>
                      <ButtonIcon as={PlayIcon} />
                    </Button>
                  )}
              </HStack>
              <Box px="$6" pt="$4" pb="$6">
                <JsonValueView jsonValue={resumableProcessMirror.props} />
              </Box>
              <Box px="$6" pt="$4" pb="$6">
                <JsonValueView jsonValue={resumableProcessMirror.state} />
              </Box>
              <Box>
                {resumableProcessMirror.log.map((m, index) => (
                  <Box key={index} px="$6" pt="$4" pb="$6">
                    <JsonValueView jsonValue={m} />
                  </Box>
                ))}
              </Box>
            </VStack>
            <Heading
              $dark-color="$textLight200"
              size="sm"
              px="$6"
              pt="$4"
              pb="$6"
            >
              Child Processes
            </Heading>
            <Box>
              <Text>
                resumableProcessMirrors {resumableProcessMirrors.length}
              </Text>
              <Text>processCount {processCount}</Text>
            </Box>
          </VStack>
        ) : undefined
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
          : async () => {
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
