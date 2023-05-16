import { ApolloClient, InMemoryCache } from "@apollo/client";

export const graphUri = import.meta.env.DEV
  ? import.meta.env.VITE_THE_GRAPH_URL_LOCAL
  : import.meta.env.VITE_THE_GRAPH_URL;

export const graphClient = new ApolloClient({
  uri: graphUri,
  cache: new InMemoryCache(),
});

/* The GraphQL comment is needed to let `graphql-codegen` know this is a GraphQL document
  when running `yarn dev`, `graphql-codegen` will watch the change of GraphQL document and re generate automatically
*/

export const GET_OWNER_TOKENS_GRAPH = /* GraphQL */ `
  query GetOwnerTokens($owner: String!, $collection: String) {
    tokens(
      where: { owner: { id_eq: $owner }, collection: { id_eq: $collection } }
    ) {
      tokenId
      collection {
        id
        name
      }
    }
  }
`;

export const GET_OWNER_MINT_HISTORY = /* GraphQL */ `
  query GetOwnerMintHistory($collection: String!, $owner: String!) {
    tokens(
      where: {
        collection: { id_eq: $collection }
        transfers_some: {
          from: { id_eq: "0x0000000000000000000000000000000000000000" }
          to: { id_eq: $owner }
        }
      }
    ) {
      tokenId
      owner {
        id
      }
    }
  }
`;

export const GET_ALL_TOKENS_IN_COLLECTION = /* GraphQL */ `
  query GetAllTokensInCollection($collection: String!) {
    collectionById(id: $collection) {
      tokens(orderBy: tokenId_ASC) {
        tokenId
      }
    }
  }
`;

export const GET_ALL_ASSET_ENTRIES_IN_COLLECTION = /* GraphQL */ `
  query GetAllAssetEntriesInCollection($collection: String!) {
    collectionById(id: $collection) {
      assetEntries(orderBy: assetId_ASC) {
        assetId
      }
    }
  }
`;
