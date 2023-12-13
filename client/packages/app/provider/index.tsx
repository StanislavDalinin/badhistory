import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Dripsy } from "./dripsy";
import { NavigationProvider } from "./navigation";
import { config } from "@gluestack-ui/config";
import { FC, Suspense } from "react";
import { GluestackUIStyledProvider } from "@gluestack-ui/themed";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        lots: {
          keyArgs: ["where"],
          // @ts-ignore
          merge(existing, incoming, { args: { skip = 0 } }) {
            // Slicing is necessary because the existing data is
            // immutable, and frozen in development.
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[skip + i] = incoming[i];
            }
            return merged;
          },
        },
        resumableProcessMirrors: {
          keyArgs: ["where"],
          // @ts-ignore
          merge(existing, incoming, { args: { skip = 0 } }) {
            console.log("ProcessesScreen merge", existing, incoming);
            // Slicing is necessary because the existing data is
            // immutable, and frozen in development.
            const merged = existing ? existing.slice(0) : [];
            for (let i = 0; i < incoming.length; ++i) {
              merged[skip + i] = incoming[i];
            }
            return merged;
          },
        },
      },
    },
  },
});

const client = new ApolloClient({
  uri: "/graphql",
  cache,
});

export const Provider: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ApolloProvider client={client}>
      <NavigationProvider>
        <GluestackUIStyledProvider config={config}>
          <Dripsy>
            <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
          </Dripsy>
        </GluestackUIStyledProvider>
      </NavigationProvider>
    </ApolloProvider>
  );
};
