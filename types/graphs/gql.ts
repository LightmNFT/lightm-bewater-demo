/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query GetOwnerTokens($owner: String!, $collection: String) {\n    tokens(\n      where: { owner: { id_eq: $owner }, collection: { id_eq: $collection } }\n    ) {\n      tokenId\n      collection {\n        id\n        name\n      }\n    }\n  }\n": types.GetOwnerTokensDocument,
    "\n  query GetOwnerMintHistory($collection: String!, $owner: String!) {\n    tokens(\n      where: {\n        collection: { id_eq: $collection }\n        transfers_some: {\n          from: { id_eq: \"0x0000000000000000000000000000000000000000\" }\n          to: { id_eq: $owner }\n        }\n      }\n    ) {\n      tokenId\n      owner {\n        id\n      }\n    }\n  }\n": types.GetOwnerMintHistoryDocument,
    "\n  query GetAllTokensInCollection($collection: String!) {\n    collectionById(id: $collection) {\n      tokens(orderBy: tokenId_ASC) {\n        tokenId\n      }\n    }\n  }\n": types.GetAllTokensInCollectionDocument,
    "\n  query GetAllAssetEntriesInCollection($collection: String!) {\n    collectionById(id: $collection) {\n      assetEntries(orderBy: assetId_ASC) {\n        assetId\n      }\n    }\n  }\n": types.GetAllAssetEntriesInCollectionDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOwnerTokens($owner: String!, $collection: String) {\n    tokens(\n      where: { owner: { id_eq: $owner }, collection: { id_eq: $collection } }\n    ) {\n      tokenId\n      collection {\n        id\n        name\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOwnerTokens($owner: String!, $collection: String) {\n    tokens(\n      where: { owner: { id_eq: $owner }, collection: { id_eq: $collection } }\n    ) {\n      tokenId\n      collection {\n        id\n        name\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetOwnerMintHistory($collection: String!, $owner: String!) {\n    tokens(\n      where: {\n        collection: { id_eq: $collection }\n        transfers_some: {\n          from: { id_eq: \"0x0000000000000000000000000000000000000000\" }\n          to: { id_eq: $owner }\n        }\n      }\n    ) {\n      tokenId\n      owner {\n        id\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetOwnerMintHistory($collection: String!, $owner: String!) {\n    tokens(\n      where: {\n        collection: { id_eq: $collection }\n        transfers_some: {\n          from: { id_eq: \"0x0000000000000000000000000000000000000000\" }\n          to: { id_eq: $owner }\n        }\n      }\n    ) {\n      tokenId\n      owner {\n        id\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllTokensInCollection($collection: String!) {\n    collectionById(id: $collection) {\n      tokens(orderBy: tokenId_ASC) {\n        tokenId\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllTokensInCollection($collection: String!) {\n    collectionById(id: $collection) {\n      tokens(orderBy: tokenId_ASC) {\n        tokenId\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query GetAllAssetEntriesInCollection($collection: String!) {\n    collectionById(id: $collection) {\n      assetEntries(orderBy: assetId_ASC) {\n        assetId\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAllAssetEntriesInCollection($collection: String!) {\n    collectionById(id: $collection) {\n      assetEntries(orderBy: assetId_ASC) {\n        assetId\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;