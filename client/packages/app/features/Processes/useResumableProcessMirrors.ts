import { gql } from "app/src/__generated__";
import { useSuspenseQuery } from "@apollo/client";
import { SortOrder } from "app/src/__generated__/graphql";

const GET_RESUMABLE_PROCESS_MIRRORS = gql(/* GraphQL */ `
  query ResumableProcessMirrors12(
    $where: ResumableProcessMirrorWhereInput
    $orderBy: [ResumableProcessMirrorOrderByWithRelationInput!]
    $take: Int
    $skip: Int
  ) {
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

// const SUBSCRIBE_SERVER_PROCESS_MIRROR_UPDATED = gql(/* GraphQL */ `
//   subscription ServerProcessMirrorUpdated {
//     serverProcessMirrorUpdated {
//       id
//       parentProcessId
//       status
//       type
//       state
//       props
//       log {
//         value
//         type
//       }
//       createdAt
//       updatedAt
//       deleted
//     }
//   }
// `);

export const useResumableProcessMirrors = ({
  parentProcessId = null,
  skip = 0,
  take,
}: {
  parentProcessId?: null | string;
  skip?: number;
  take: number;
}) => {
  const { subscribeToMore, data } = useSuspenseQuery(
    GET_RESUMABLE_PROCESS_MIRRORS,
    {
      variables: {
        orderBy: [
          {
            createdAt: SortOrder.Desc,
          },
        ],
        where: {
          parentProcessId:
            parentProcessId === null
              ? {
                  isSet: false,
                }
              : {
                  equals: parentProcessId,
                },
        },
        take,
        skip,
      },
    },
  );

  // useEffect(() => {
  //   subscribeToMore({
  //     document: SUBSCRIBE_SERVER_PROCESS_MIRROR_UPDATED,
  //     updateQuery: (prev, a) => {
  //       console.log(prev, a);
  //
  //       return prev;
  //
  //       // if (!subscriptionData.data) return prev;
  //       // const newFeedItem = subscriptionData.data.commentAdded;
  //
  //       // return Object.assign({}, prev, {
  //       //   post: {
  //       //     comments: [newFeedItem, ...prev.post.comments],
  //       //   },
  //       // });
  //     },
  //   });
  // }, [subscribeToMore]);

  return data!.resumableProcessMirrors;
};
