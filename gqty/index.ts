/**
 * GQty: You can safely modify this file based on your needs.
 */

import { createReactClient } from "@gqty/react";
import type { QueryFetcher } from "gqty";
import { Cache, createClient } from "gqty";
import type { GeneratedSchema } from "./schema.generated";
import { generatedSchema, scalarsEnumsHash } from "./schema.generated";

const queryFetcher: QueryFetcher = async function (
  { query, variables, operationName },
  fetchOptions
) {
  // Modify "https://api.github.com/graphql" if needed
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      authorization: `Bearer ${process.env.GITHUB_PAT}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
      operationName,
    }),
    mode: "cors",
    ...fetchOptions,
  });

  const json = await response.json();

  return json;
};

const cache = new Cache(
  undefined,
  /**
   * Default cache options immediate expiry with a 5 minutes window of
   * stale-while-revalidate.
   */
  {
    maxAge: 3600,
    staleWhileRevalidate: 86400,
    normalization: true,
  }
);

export const client = createClient<GeneratedSchema>({
  schema: generatedSchema,
  scalars: scalarsEnumsHash,
  cache,
  fetchOptions: {
    fetcher: queryFetcher,
  },
});

// Core functions
export const { resolve, subscribe, schema } = client;

// Legacy functions
export const {
  query,
  mutation,
  mutate,
  subscription,
  resolved,
  refetch,
  track,
} = client;

export const {
  graphql,
  useQuery,
  usePaginatedQuery,
  useTransactionQuery,
  useLazyQuery,
  useRefetch,
  useMutation,
  useMetaState,
  prepareReactRender,
  useHydrateCache,
  prepareQuery,
} = createReactClient<GeneratedSchema>(client, {
  defaults: {
    // Enable Suspense, you can override this option at hooks.
    suspense: false,
  },
});

export * from "./schema.generated";
