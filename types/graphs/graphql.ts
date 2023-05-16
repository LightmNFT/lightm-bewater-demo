/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Big number integer */
  BigInt: any;
};

export type AssetEntriesConnection = {
  __typename?: 'AssetEntriesConnection';
  edges: Array<AssetEntryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type AssetEntry = {
  __typename?: 'AssetEntry';
  assetId: Scalars['BigInt'];
  collection: Collection;
  createAtBlock: Scalars['BigInt'];
  id: Scalars['String'];
  transactionHash: Scalars['String'];
};

export type AssetEntryEdge = {
  __typename?: 'AssetEntryEdge';
  cursor: Scalars['String'];
  node: AssetEntry;
};

export enum AssetEntryOrderByInput {
  AssetIdAsc = 'assetId_ASC',
  AssetIdDesc = 'assetId_DESC',
  CollectionCreateAtBlockAsc = 'collection_createAtBlock_ASC',
  CollectionCreateAtBlockDesc = 'collection_createAtBlock_DESC',
  CollectionHasCustomCutsAsc = 'collection_hasCustomCuts_ASC',
  CollectionHasCustomCutsDesc = 'collection_hasCustomCuts_DESC',
  CollectionIdAsc = 'collection_id_ASC',
  CollectionIdDesc = 'collection_id_DESC',
  CollectionMetadataUriAsc = 'collection_metadataURI_ASC',
  CollectionMetadataUriDesc = 'collection_metadataURI_DESC',
  CollectionNameAsc = 'collection_name_ASC',
  CollectionNameDesc = 'collection_name_DESC',
  CollectionSymbolAsc = 'collection_symbol_ASC',
  CollectionSymbolDesc = 'collection_symbol_DESC',
  CollectionTotalSupplyAsc = 'collection_totalSupply_ASC',
  CollectionTotalSupplyDesc = 'collection_totalSupply_DESC',
  CollectionTransactionHashAsc = 'collection_transactionHash_ASC',
  CollectionTransactionHashDesc = 'collection_transactionHash_DESC',
  CreateAtBlockAsc = 'createAtBlock_ASC',
  CreateAtBlockDesc = 'createAtBlock_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC'
}

export type AssetEntryWhereInput = {
  AND?: InputMaybe<Array<AssetEntryWhereInput>>;
  OR?: InputMaybe<Array<AssetEntryWhereInput>>;
  assetId_eq?: InputMaybe<Scalars['BigInt']>;
  assetId_gt?: InputMaybe<Scalars['BigInt']>;
  assetId_gte?: InputMaybe<Scalars['BigInt']>;
  assetId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  assetId_isNull?: InputMaybe<Scalars['Boolean']>;
  assetId_lt?: InputMaybe<Scalars['BigInt']>;
  assetId_lte?: InputMaybe<Scalars['BigInt']>;
  assetId_not_eq?: InputMaybe<Scalars['BigInt']>;
  assetId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collection?: InputMaybe<CollectionWhereInput>;
  collection_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
};

export type Catalog = {
  __typename?: 'Catalog';
  createAtBlock: Scalars['BigInt'];
  id: Scalars['String'];
  metadataURI: Scalars['String'];
  owner: Owner;
  parts: Array<Part>;
  transactionHash: Scalars['String'];
  type: Scalars['String'];
};


export type CatalogPartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PartOrderByInput>>;
  where?: InputMaybe<PartWhereInput>;
};

export type CatalogEdge = {
  __typename?: 'CatalogEdge';
  cursor: Scalars['String'];
  node: Catalog;
};

export enum CatalogOrderByInput {
  CreateAtBlockAsc = 'createAtBlock_ASC',
  CreateAtBlockDesc = 'createAtBlock_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataUriAsc = 'metadataURI_ASC',
  MetadataUriDesc = 'metadataURI_DESC',
  OwnerBalanceAsc = 'owner_balance_ASC',
  OwnerBalanceDesc = 'owner_balance_DESC',
  OwnerCatalogBalanceAsc = 'owner_catalogBalance_ASC',
  OwnerCatalogBalanceDesc = 'owner_catalogBalance_DESC',
  OwnerCollectionBalanceAsc = 'owner_collectionBalance_ASC',
  OwnerCollectionBalanceDesc = 'owner_collectionBalance_DESC',
  OwnerIdAsc = 'owner_id_ASC',
  OwnerIdDesc = 'owner_id_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC'
}

export type CatalogWhereInput = {
  AND?: InputMaybe<Array<CatalogWhereInput>>;
  OR?: InputMaybe<Array<CatalogWhereInput>>;
  createAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  metadataURI_contains?: InputMaybe<Scalars['String']>;
  metadataURI_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadataURI_endsWith?: InputMaybe<Scalars['String']>;
  metadataURI_eq?: InputMaybe<Scalars['String']>;
  metadataURI_gt?: InputMaybe<Scalars['String']>;
  metadataURI_gte?: InputMaybe<Scalars['String']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']>>;
  metadataURI_isNull?: InputMaybe<Scalars['Boolean']>;
  metadataURI_lt?: InputMaybe<Scalars['String']>;
  metadataURI_lte?: InputMaybe<Scalars['String']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']>;
  metadataURI_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadataURI_not_endsWith?: InputMaybe<Scalars['String']>;
  metadataURI_not_eq?: InputMaybe<Scalars['String']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataURI_not_startsWith?: InputMaybe<Scalars['String']>;
  metadataURI_startsWith?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<OwnerWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']>;
  parts_every?: InputMaybe<PartWhereInput>;
  parts_none?: InputMaybe<PartWhereInput>;
  parts_some?: InputMaybe<PartWhereInput>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
  type_contains?: InputMaybe<Scalars['String']>;
  type_containsInsensitive?: InputMaybe<Scalars['String']>;
  type_endsWith?: InputMaybe<Scalars['String']>;
  type_eq?: InputMaybe<Scalars['String']>;
  type_gt?: InputMaybe<Scalars['String']>;
  type_gte?: InputMaybe<Scalars['String']>;
  type_in?: InputMaybe<Array<Scalars['String']>>;
  type_isNull?: InputMaybe<Scalars['Boolean']>;
  type_lt?: InputMaybe<Scalars['String']>;
  type_lte?: InputMaybe<Scalars['String']>;
  type_not_contains?: InputMaybe<Scalars['String']>;
  type_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  type_not_endsWith?: InputMaybe<Scalars['String']>;
  type_not_eq?: InputMaybe<Scalars['String']>;
  type_not_in?: InputMaybe<Array<Scalars['String']>>;
  type_not_startsWith?: InputMaybe<Scalars['String']>;
  type_startsWith?: InputMaybe<Scalars['String']>;
};

export type CatalogsConnection = {
  __typename?: 'CatalogsConnection';
  edges: Array<CatalogEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Collection = {
  __typename?: 'Collection';
  assetEntries: Array<AssetEntry>;
  createAtBlock: Scalars['BigInt'];
  hasCustomCuts: Scalars['Boolean'];
  id: Scalars['String'];
  metadataURI: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  owner: Owner;
  symbol?: Maybe<Scalars['String']>;
  tokens: Array<Token>;
  totalSupply?: Maybe<Scalars['BigInt']>;
  transactionHash: Scalars['String'];
};


export type CollectionAssetEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AssetEntryOrderByInput>>;
  where?: InputMaybe<AssetEntryWhereInput>;
};


export type CollectionTokensArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TokenOrderByInput>>;
  where?: InputMaybe<TokenWhereInput>;
};

export type CollectionEdge = {
  __typename?: 'CollectionEdge';
  cursor: Scalars['String'];
  node: Collection;
};

export enum CollectionOrderByInput {
  CreateAtBlockAsc = 'createAtBlock_ASC',
  CreateAtBlockDesc = 'createAtBlock_DESC',
  HasCustomCutsAsc = 'hasCustomCuts_ASC',
  HasCustomCutsDesc = 'hasCustomCuts_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MetadataUriAsc = 'metadataURI_ASC',
  MetadataUriDesc = 'metadataURI_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  OwnerBalanceAsc = 'owner_balance_ASC',
  OwnerBalanceDesc = 'owner_balance_DESC',
  OwnerCatalogBalanceAsc = 'owner_catalogBalance_ASC',
  OwnerCatalogBalanceDesc = 'owner_catalogBalance_DESC',
  OwnerCollectionBalanceAsc = 'owner_collectionBalance_ASC',
  OwnerCollectionBalanceDesc = 'owner_collectionBalance_DESC',
  OwnerIdAsc = 'owner_id_ASC',
  OwnerIdDesc = 'owner_id_DESC',
  SymbolAsc = 'symbol_ASC',
  SymbolDesc = 'symbol_DESC',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyDesc = 'totalSupply_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC'
}

export type CollectionWhereInput = {
  AND?: InputMaybe<Array<CollectionWhereInput>>;
  OR?: InputMaybe<Array<CollectionWhereInput>>;
  assetEntries_every?: InputMaybe<AssetEntryWhereInput>;
  assetEntries_none?: InputMaybe<AssetEntryWhereInput>;
  assetEntries_some?: InputMaybe<AssetEntryWhereInput>;
  createAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  hasCustomCuts_eq?: InputMaybe<Scalars['Boolean']>;
  hasCustomCuts_isNull?: InputMaybe<Scalars['Boolean']>;
  hasCustomCuts_not_eq?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  metadataURI_contains?: InputMaybe<Scalars['String']>;
  metadataURI_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadataURI_endsWith?: InputMaybe<Scalars['String']>;
  metadataURI_eq?: InputMaybe<Scalars['String']>;
  metadataURI_gt?: InputMaybe<Scalars['String']>;
  metadataURI_gte?: InputMaybe<Scalars['String']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']>>;
  metadataURI_isNull?: InputMaybe<Scalars['Boolean']>;
  metadataURI_lt?: InputMaybe<Scalars['String']>;
  metadataURI_lte?: InputMaybe<Scalars['String']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']>;
  metadataURI_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadataURI_not_endsWith?: InputMaybe<Scalars['String']>;
  metadataURI_not_eq?: InputMaybe<Scalars['String']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataURI_not_startsWith?: InputMaybe<Scalars['String']>;
  metadataURI_startsWith?: InputMaybe<Scalars['String']>;
  name_contains?: InputMaybe<Scalars['String']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_endsWith?: InputMaybe<Scalars['String']>;
  name_eq?: InputMaybe<Scalars['String']>;
  name_gt?: InputMaybe<Scalars['String']>;
  name_gte?: InputMaybe<Scalars['String']>;
  name_in?: InputMaybe<Array<Scalars['String']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']>;
  name_lt?: InputMaybe<Scalars['String']>;
  name_lte?: InputMaybe<Scalars['String']>;
  name_not_contains?: InputMaybe<Scalars['String']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  name_not_endsWith?: InputMaybe<Scalars['String']>;
  name_not_eq?: InputMaybe<Scalars['String']>;
  name_not_in?: InputMaybe<Array<Scalars['String']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']>;
  name_startsWith?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<OwnerWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']>;
  symbol_contains?: InputMaybe<Scalars['String']>;
  symbol_containsInsensitive?: InputMaybe<Scalars['String']>;
  symbol_endsWith?: InputMaybe<Scalars['String']>;
  symbol_eq?: InputMaybe<Scalars['String']>;
  symbol_gt?: InputMaybe<Scalars['String']>;
  symbol_gte?: InputMaybe<Scalars['String']>;
  symbol_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_isNull?: InputMaybe<Scalars['Boolean']>;
  symbol_lt?: InputMaybe<Scalars['String']>;
  symbol_lte?: InputMaybe<Scalars['String']>;
  symbol_not_contains?: InputMaybe<Scalars['String']>;
  symbol_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  symbol_not_endsWith?: InputMaybe<Scalars['String']>;
  symbol_not_eq?: InputMaybe<Scalars['String']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
  symbol_not_startsWith?: InputMaybe<Scalars['String']>;
  symbol_startsWith?: InputMaybe<Scalars['String']>;
  tokens_every?: InputMaybe<TokenWhereInput>;
  tokens_none?: InputMaybe<TokenWhereInput>;
  tokens_some?: InputMaybe<TokenWhereInput>;
  totalSupply_eq?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigInt']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
};

export type CollectionsConnection = {
  __typename?: 'CollectionsConnection';
  edges: Array<CollectionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type NestTransfer = {
  __typename?: 'NestTransfer';
  block: Scalars['BigInt'];
  from?: Maybe<Owner>;
  fromToken?: Maybe<Token>;
  id: Scalars['String'];
  timestamp: Scalars['BigInt'];
  to?: Maybe<Owner>;
  toToken?: Maybe<Token>;
  token: Token;
  transactionHash: Scalars['String'];
};

export type NestTransferEdge = {
  __typename?: 'NestTransferEdge';
  cursor: Scalars['String'];
  node: NestTransfer;
};

export enum NestTransferOrderByInput {
  BlockAsc = 'block_ASC',
  BlockDesc = 'block_DESC',
  FromTokenCreateAtBlockAsc = 'fromToken_createAtBlock_ASC',
  FromTokenCreateAtBlockDesc = 'fromToken_createAtBlock_DESC',
  FromTokenIdAsc = 'fromToken_id_ASC',
  FromTokenIdDesc = 'fromToken_id_DESC',
  FromTokenTokenIdAsc = 'fromToken_tokenId_ASC',
  FromTokenTokenIdDesc = 'fromToken_tokenId_DESC',
  FromTokenTransactionHashAsc = 'fromToken_transactionHash_ASC',
  FromTokenTransactionHashDesc = 'fromToken_transactionHash_DESC',
  FromBalanceAsc = 'from_balance_ASC',
  FromBalanceDesc = 'from_balance_DESC',
  FromCatalogBalanceAsc = 'from_catalogBalance_ASC',
  FromCatalogBalanceDesc = 'from_catalogBalance_DESC',
  FromCollectionBalanceAsc = 'from_collectionBalance_ASC',
  FromCollectionBalanceDesc = 'from_collectionBalance_DESC',
  FromIdAsc = 'from_id_ASC',
  FromIdDesc = 'from_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  ToTokenCreateAtBlockAsc = 'toToken_createAtBlock_ASC',
  ToTokenCreateAtBlockDesc = 'toToken_createAtBlock_DESC',
  ToTokenIdAsc = 'toToken_id_ASC',
  ToTokenIdDesc = 'toToken_id_DESC',
  ToTokenTokenIdAsc = 'toToken_tokenId_ASC',
  ToTokenTokenIdDesc = 'toToken_tokenId_DESC',
  ToTokenTransactionHashAsc = 'toToken_transactionHash_ASC',
  ToTokenTransactionHashDesc = 'toToken_transactionHash_DESC',
  ToBalanceAsc = 'to_balance_ASC',
  ToBalanceDesc = 'to_balance_DESC',
  ToCatalogBalanceAsc = 'to_catalogBalance_ASC',
  ToCatalogBalanceDesc = 'to_catalogBalance_DESC',
  ToCollectionBalanceAsc = 'to_collectionBalance_ASC',
  ToCollectionBalanceDesc = 'to_collectionBalance_DESC',
  ToIdAsc = 'to_id_ASC',
  ToIdDesc = 'to_id_DESC',
  TokenCreateAtBlockAsc = 'token_createAtBlock_ASC',
  TokenCreateAtBlockDesc = 'token_createAtBlock_DESC',
  TokenIdAsc = 'token_id_ASC',
  TokenIdDesc = 'token_id_DESC',
  TokenTokenIdAsc = 'token_tokenId_ASC',
  TokenTokenIdDesc = 'token_tokenId_DESC',
  TokenTransactionHashAsc = 'token_transactionHash_ASC',
  TokenTransactionHashDesc = 'token_transactionHash_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC'
}

export type NestTransferWhereInput = {
  AND?: InputMaybe<Array<NestTransferWhereInput>>;
  OR?: InputMaybe<Array<NestTransferWhereInput>>;
  block_eq?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_isNull?: InputMaybe<Scalars['Boolean']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_not_eq?: InputMaybe<Scalars['BigInt']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<OwnerWhereInput>;
  fromToken?: InputMaybe<TokenWhereInput>;
  fromToken_isNull?: InputMaybe<Scalars['Boolean']>;
  from_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  timestamp_eq?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_eq?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<OwnerWhereInput>;
  toToken?: InputMaybe<TokenWhereInput>;
  toToken_isNull?: InputMaybe<Scalars['Boolean']>;
  to_isNull?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<TokenWhereInput>;
  token_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
};

export type NestTransfersConnection = {
  __typename?: 'NestTransfersConnection';
  edges: Array<NestTransferEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Owner = {
  __typename?: 'Owner';
  balance: Scalars['BigInt'];
  catalogBalance: Scalars['BigInt'];
  collectionBalance: Scalars['BigInt'];
  id: Scalars['String'];
  ownedCatalogs: Array<Catalog>;
  ownedCollections: Array<Collection>;
  ownedTokens: Array<Token>;
};


export type OwnerOwnedCatalogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CatalogOrderByInput>>;
  where?: InputMaybe<CatalogWhereInput>;
};


export type OwnerOwnedCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionOrderByInput>>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type OwnerOwnedTokensArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TokenOrderByInput>>;
  where?: InputMaybe<TokenWhereInput>;
};

export type OwnerEdge = {
  __typename?: 'OwnerEdge';
  cursor: Scalars['String'];
  node: Owner;
};

export enum OwnerOrderByInput {
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  CatalogBalanceAsc = 'catalogBalance_ASC',
  CatalogBalanceDesc = 'catalogBalance_DESC',
  CollectionBalanceAsc = 'collectionBalance_ASC',
  CollectionBalanceDesc = 'collectionBalance_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC'
}

export type OwnerWhereInput = {
  AND?: InputMaybe<Array<OwnerWhereInput>>;
  OR?: InputMaybe<Array<OwnerWhereInput>>;
  balance_eq?: InputMaybe<Scalars['BigInt']>;
  balance_gt?: InputMaybe<Scalars['BigInt']>;
  balance_gte?: InputMaybe<Scalars['BigInt']>;
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  balance_isNull?: InputMaybe<Scalars['Boolean']>;
  balance_lt?: InputMaybe<Scalars['BigInt']>;
  balance_lte?: InputMaybe<Scalars['BigInt']>;
  balance_not_eq?: InputMaybe<Scalars['BigInt']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  catalogBalance_eq?: InputMaybe<Scalars['BigInt']>;
  catalogBalance_gt?: InputMaybe<Scalars['BigInt']>;
  catalogBalance_gte?: InputMaybe<Scalars['BigInt']>;
  catalogBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  catalogBalance_isNull?: InputMaybe<Scalars['Boolean']>;
  catalogBalance_lt?: InputMaybe<Scalars['BigInt']>;
  catalogBalance_lte?: InputMaybe<Scalars['BigInt']>;
  catalogBalance_not_eq?: InputMaybe<Scalars['BigInt']>;
  catalogBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectionBalance_eq?: InputMaybe<Scalars['BigInt']>;
  collectionBalance_gt?: InputMaybe<Scalars['BigInt']>;
  collectionBalance_gte?: InputMaybe<Scalars['BigInt']>;
  collectionBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
  collectionBalance_isNull?: InputMaybe<Scalars['Boolean']>;
  collectionBalance_lt?: InputMaybe<Scalars['BigInt']>;
  collectionBalance_lte?: InputMaybe<Scalars['BigInt']>;
  collectionBalance_not_eq?: InputMaybe<Scalars['BigInt']>;
  collectionBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  ownedCatalogs_every?: InputMaybe<CatalogWhereInput>;
  ownedCatalogs_none?: InputMaybe<CatalogWhereInput>;
  ownedCatalogs_some?: InputMaybe<CatalogWhereInput>;
  ownedCollections_every?: InputMaybe<CollectionWhereInput>;
  ownedCollections_none?: InputMaybe<CollectionWhereInput>;
  ownedCollections_some?: InputMaybe<CollectionWhereInput>;
  ownedTokens_every?: InputMaybe<TokenWhereInput>;
  ownedTokens_none?: InputMaybe<TokenWhereInput>;
  ownedTokens_some?: InputMaybe<TokenWhereInput>;
};

export type OwnersConnection = {
  __typename?: 'OwnersConnection';
  edges: Array<OwnerEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor: Scalars['String'];
};

export type Part = {
  __typename?: 'Part';
  catalog: Catalog;
  createAtBlock: Scalars['BigInt'];
  equippableAddresses: Array<Scalars['String']>;
  equippableToAll: Scalars['Boolean'];
  id: Scalars['String'];
  itemType: Scalars['Int'];
  metadataURI: Scalars['String'];
  partId: Scalars['BigInt'];
  transactionHash: Scalars['String'];
  zIndex: Scalars['Int'];
};

export type PartEdge = {
  __typename?: 'PartEdge';
  cursor: Scalars['String'];
  node: Part;
};

export enum PartOrderByInput {
  CatalogCreateAtBlockAsc = 'catalog_createAtBlock_ASC',
  CatalogCreateAtBlockDesc = 'catalog_createAtBlock_DESC',
  CatalogIdAsc = 'catalog_id_ASC',
  CatalogIdDesc = 'catalog_id_DESC',
  CatalogMetadataUriAsc = 'catalog_metadataURI_ASC',
  CatalogMetadataUriDesc = 'catalog_metadataURI_DESC',
  CatalogTransactionHashAsc = 'catalog_transactionHash_ASC',
  CatalogTransactionHashDesc = 'catalog_transactionHash_DESC',
  CatalogTypeAsc = 'catalog_type_ASC',
  CatalogTypeDesc = 'catalog_type_DESC',
  CreateAtBlockAsc = 'createAtBlock_ASC',
  CreateAtBlockDesc = 'createAtBlock_DESC',
  EquippableToAllAsc = 'equippableToAll_ASC',
  EquippableToAllDesc = 'equippableToAll_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  ItemTypeAsc = 'itemType_ASC',
  ItemTypeDesc = 'itemType_DESC',
  MetadataUriAsc = 'metadataURI_ASC',
  MetadataUriDesc = 'metadataURI_DESC',
  PartIdAsc = 'partId_ASC',
  PartIdDesc = 'partId_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC',
  ZIndexAsc = 'zIndex_ASC',
  ZIndexDesc = 'zIndex_DESC'
}

export type PartWhereInput = {
  AND?: InputMaybe<Array<PartWhereInput>>;
  OR?: InputMaybe<Array<PartWhereInput>>;
  catalog?: InputMaybe<CatalogWhereInput>;
  catalog_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  equippableAddresses_containsAll?: InputMaybe<Array<Scalars['String']>>;
  equippableAddresses_containsAny?: InputMaybe<Array<Scalars['String']>>;
  equippableAddresses_containsNone?: InputMaybe<Array<Scalars['String']>>;
  equippableAddresses_isNull?: InputMaybe<Scalars['Boolean']>;
  equippableToAll_eq?: InputMaybe<Scalars['Boolean']>;
  equippableToAll_isNull?: InputMaybe<Scalars['Boolean']>;
  equippableToAll_not_eq?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  itemType_eq?: InputMaybe<Scalars['Int']>;
  itemType_gt?: InputMaybe<Scalars['Int']>;
  itemType_gte?: InputMaybe<Scalars['Int']>;
  itemType_in?: InputMaybe<Array<Scalars['Int']>>;
  itemType_isNull?: InputMaybe<Scalars['Boolean']>;
  itemType_lt?: InputMaybe<Scalars['Int']>;
  itemType_lte?: InputMaybe<Scalars['Int']>;
  itemType_not_eq?: InputMaybe<Scalars['Int']>;
  itemType_not_in?: InputMaybe<Array<Scalars['Int']>>;
  metadataURI_contains?: InputMaybe<Scalars['String']>;
  metadataURI_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadataURI_endsWith?: InputMaybe<Scalars['String']>;
  metadataURI_eq?: InputMaybe<Scalars['String']>;
  metadataURI_gt?: InputMaybe<Scalars['String']>;
  metadataURI_gte?: InputMaybe<Scalars['String']>;
  metadataURI_in?: InputMaybe<Array<Scalars['String']>>;
  metadataURI_isNull?: InputMaybe<Scalars['Boolean']>;
  metadataURI_lt?: InputMaybe<Scalars['String']>;
  metadataURI_lte?: InputMaybe<Scalars['String']>;
  metadataURI_not_contains?: InputMaybe<Scalars['String']>;
  metadataURI_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  metadataURI_not_endsWith?: InputMaybe<Scalars['String']>;
  metadataURI_not_eq?: InputMaybe<Scalars['String']>;
  metadataURI_not_in?: InputMaybe<Array<Scalars['String']>>;
  metadataURI_not_startsWith?: InputMaybe<Scalars['String']>;
  metadataURI_startsWith?: InputMaybe<Scalars['String']>;
  partId_eq?: InputMaybe<Scalars['BigInt']>;
  partId_gt?: InputMaybe<Scalars['BigInt']>;
  partId_gte?: InputMaybe<Scalars['BigInt']>;
  partId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  partId_isNull?: InputMaybe<Scalars['Boolean']>;
  partId_lt?: InputMaybe<Scalars['BigInt']>;
  partId_lte?: InputMaybe<Scalars['BigInt']>;
  partId_not_eq?: InputMaybe<Scalars['BigInt']>;
  partId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
  zIndex_eq?: InputMaybe<Scalars['Int']>;
  zIndex_gt?: InputMaybe<Scalars['Int']>;
  zIndex_gte?: InputMaybe<Scalars['Int']>;
  zIndex_in?: InputMaybe<Array<Scalars['Int']>>;
  zIndex_isNull?: InputMaybe<Scalars['Boolean']>;
  zIndex_lt?: InputMaybe<Scalars['Int']>;
  zIndex_lte?: InputMaybe<Scalars['Int']>;
  zIndex_not_eq?: InputMaybe<Scalars['Int']>;
  zIndex_not_in?: InputMaybe<Array<Scalars['Int']>>;
};

export type PartsConnection = {
  __typename?: 'PartsConnection';
  edges: Array<PartEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  assetEntries: Array<AssetEntry>;
  assetEntriesConnection: AssetEntriesConnection;
  assetEntryById?: Maybe<AssetEntry>;
  /** @deprecated Use assetEntryById */
  assetEntryByUniqueInput?: Maybe<AssetEntry>;
  catalogById?: Maybe<Catalog>;
  /** @deprecated Use catalogById */
  catalogByUniqueInput?: Maybe<Catalog>;
  catalogs: Array<Catalog>;
  catalogsConnection: CatalogsConnection;
  collectionById?: Maybe<Collection>;
  /** @deprecated Use collectionById */
  collectionByUniqueInput?: Maybe<Collection>;
  collections: Array<Collection>;
  collectionsConnection: CollectionsConnection;
  nestTransferById?: Maybe<NestTransfer>;
  /** @deprecated Use nestTransferById */
  nestTransferByUniqueInput?: Maybe<NestTransfer>;
  nestTransfers: Array<NestTransfer>;
  nestTransfersConnection: NestTransfersConnection;
  ownerById?: Maybe<Owner>;
  /** @deprecated Use ownerById */
  ownerByUniqueInput?: Maybe<Owner>;
  owners: Array<Owner>;
  ownersConnection: OwnersConnection;
  partById?: Maybe<Part>;
  /** @deprecated Use partById */
  partByUniqueInput?: Maybe<Part>;
  parts: Array<Part>;
  partsConnection: PartsConnection;
  squidStatus?: Maybe<SquidStatus>;
  tokenById?: Maybe<Token>;
  /** @deprecated Use tokenById */
  tokenByUniqueInput?: Maybe<Token>;
  tokens: Array<Token>;
  tokensConnection: TokensConnection;
  transferById?: Maybe<Transfer>;
  /** @deprecated Use transferById */
  transferByUniqueInput?: Maybe<Transfer>;
  transfers: Array<Transfer>;
  transfersConnection: TransfersConnection;
};


export type QueryAssetEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AssetEntryOrderByInput>>;
  where?: InputMaybe<AssetEntryWhereInput>;
};


export type QueryAssetEntriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<AssetEntryOrderByInput>;
  where?: InputMaybe<AssetEntryWhereInput>;
};


export type QueryAssetEntryByIdArgs = {
  id: Scalars['String'];
};


export type QueryAssetEntryByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCatalogByIdArgs = {
  id: Scalars['String'];
};


export type QueryCatalogByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCatalogsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CatalogOrderByInput>>;
  where?: InputMaybe<CatalogWhereInput>;
};


export type QueryCatalogsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<CatalogOrderByInput>;
  where?: InputMaybe<CatalogWhereInput>;
};


export type QueryCollectionByIdArgs = {
  id: Scalars['String'];
};


export type QueryCollectionByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryCollectionsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<CollectionOrderByInput>>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryCollectionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<CollectionOrderByInput>;
  where?: InputMaybe<CollectionWhereInput>;
};


export type QueryNestTransferByIdArgs = {
  id: Scalars['String'];
};


export type QueryNestTransferByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryNestTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NestTransferOrderByInput>>;
  where?: InputMaybe<NestTransferWhereInput>;
};


export type QueryNestTransfersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<NestTransferOrderByInput>;
  where?: InputMaybe<NestTransferWhereInput>;
};


export type QueryOwnerByIdArgs = {
  id: Scalars['String'];
};


export type QueryOwnerByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryOwnersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<OwnerOrderByInput>>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryOwnersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<OwnerOrderByInput>;
  where?: InputMaybe<OwnerWhereInput>;
};


export type QueryPartByIdArgs = {
  id: Scalars['String'];
};


export type QueryPartByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryPartsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<PartOrderByInput>>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryPartsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<PartOrderByInput>;
  where?: InputMaybe<PartWhereInput>;
};


export type QueryTokenByIdArgs = {
  id: Scalars['String'];
};


export type QueryTokenByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryTokensArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TokenOrderByInput>>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryTokensConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<TokenOrderByInput>;
  where?: InputMaybe<TokenWhereInput>;
};


export type QueryTransferByIdArgs = {
  id: Scalars['String'];
};


export type QueryTransferByUniqueInputArgs = {
  where: WhereIdInput;
};


export type QueryTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TransferOrderByInput>>;
  where?: InputMaybe<TransferWhereInput>;
};


export type QueryTransfersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy: Array<TransferOrderByInput>;
  where?: InputMaybe<TransferWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']>;
};

export type Token = {
  __typename?: 'Token';
  collection: Collection;
  createAtBlock: Scalars['BigInt'];
  id: Scalars['String'];
  nestTransfers: Array<NestTransfer>;
  owner?: Maybe<Owner>;
  tokenId: Scalars['BigInt'];
  transactionHash: Scalars['String'];
  transfers: Array<Transfer>;
};


export type TokenNestTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<NestTransferOrderByInput>>;
  where?: InputMaybe<NestTransferWhereInput>;
};


export type TokenTransfersArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TransferOrderByInput>>;
  where?: InputMaybe<TransferWhereInput>;
};

export type TokenEdge = {
  __typename?: 'TokenEdge';
  cursor: Scalars['String'];
  node: Token;
};

export enum TokenOrderByInput {
  CollectionCreateAtBlockAsc = 'collection_createAtBlock_ASC',
  CollectionCreateAtBlockDesc = 'collection_createAtBlock_DESC',
  CollectionHasCustomCutsAsc = 'collection_hasCustomCuts_ASC',
  CollectionHasCustomCutsDesc = 'collection_hasCustomCuts_DESC',
  CollectionIdAsc = 'collection_id_ASC',
  CollectionIdDesc = 'collection_id_DESC',
  CollectionMetadataUriAsc = 'collection_metadataURI_ASC',
  CollectionMetadataUriDesc = 'collection_metadataURI_DESC',
  CollectionNameAsc = 'collection_name_ASC',
  CollectionNameDesc = 'collection_name_DESC',
  CollectionSymbolAsc = 'collection_symbol_ASC',
  CollectionSymbolDesc = 'collection_symbol_DESC',
  CollectionTotalSupplyAsc = 'collection_totalSupply_ASC',
  CollectionTotalSupplyDesc = 'collection_totalSupply_DESC',
  CollectionTransactionHashAsc = 'collection_transactionHash_ASC',
  CollectionTransactionHashDesc = 'collection_transactionHash_DESC',
  CreateAtBlockAsc = 'createAtBlock_ASC',
  CreateAtBlockDesc = 'createAtBlock_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  OwnerBalanceAsc = 'owner_balance_ASC',
  OwnerBalanceDesc = 'owner_balance_DESC',
  OwnerCatalogBalanceAsc = 'owner_catalogBalance_ASC',
  OwnerCatalogBalanceDesc = 'owner_catalogBalance_DESC',
  OwnerCollectionBalanceAsc = 'owner_collectionBalance_ASC',
  OwnerCollectionBalanceDesc = 'owner_collectionBalance_DESC',
  OwnerIdAsc = 'owner_id_ASC',
  OwnerIdDesc = 'owner_id_DESC',
  TokenIdAsc = 'tokenId_ASC',
  TokenIdDesc = 'tokenId_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC'
}

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  collection?: InputMaybe<CollectionWhereInput>;
  collection_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_gte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>;
  createAtBlock_isNull?: InputMaybe<Scalars['Boolean']>;
  createAtBlock_lt?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_lte?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_eq?: InputMaybe<Scalars['BigInt']>;
  createAtBlock_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  nestTransfers_every?: InputMaybe<NestTransferWhereInput>;
  nestTransfers_none?: InputMaybe<NestTransferWhereInput>;
  nestTransfers_some?: InputMaybe<NestTransferWhereInput>;
  owner?: InputMaybe<OwnerWhereInput>;
  owner_isNull?: InputMaybe<Scalars['Boolean']>;
  tokenId_eq?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_isNull?: InputMaybe<Scalars['Boolean']>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_eq?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
  transfers_every?: InputMaybe<TransferWhereInput>;
  transfers_none?: InputMaybe<TransferWhereInput>;
  transfers_some?: InputMaybe<TransferWhereInput>;
};

export type TokensConnection = {
  __typename?: 'TokensConnection';
  edges: Array<TokenEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type Transfer = {
  __typename?: 'Transfer';
  block: Scalars['BigInt'];
  from?: Maybe<Owner>;
  id: Scalars['String'];
  timestamp: Scalars['BigInt'];
  to?: Maybe<Owner>;
  token: Token;
  transactionHash: Scalars['String'];
};

export type TransferEdge = {
  __typename?: 'TransferEdge';
  cursor: Scalars['String'];
  node: Transfer;
};

export enum TransferOrderByInput {
  BlockAsc = 'block_ASC',
  BlockDesc = 'block_DESC',
  FromBalanceAsc = 'from_balance_ASC',
  FromBalanceDesc = 'from_balance_DESC',
  FromCatalogBalanceAsc = 'from_catalogBalance_ASC',
  FromCatalogBalanceDesc = 'from_catalogBalance_DESC',
  FromCollectionBalanceAsc = 'from_collectionBalance_ASC',
  FromCollectionBalanceDesc = 'from_collectionBalance_DESC',
  FromIdAsc = 'from_id_ASC',
  FromIdDesc = 'from_id_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimestampAsc = 'timestamp_ASC',
  TimestampDesc = 'timestamp_DESC',
  ToBalanceAsc = 'to_balance_ASC',
  ToBalanceDesc = 'to_balance_DESC',
  ToCatalogBalanceAsc = 'to_catalogBalance_ASC',
  ToCatalogBalanceDesc = 'to_catalogBalance_DESC',
  ToCollectionBalanceAsc = 'to_collectionBalance_ASC',
  ToCollectionBalanceDesc = 'to_collectionBalance_DESC',
  ToIdAsc = 'to_id_ASC',
  ToIdDesc = 'to_id_DESC',
  TokenCreateAtBlockAsc = 'token_createAtBlock_ASC',
  TokenCreateAtBlockDesc = 'token_createAtBlock_DESC',
  TokenIdAsc = 'token_id_ASC',
  TokenIdDesc = 'token_id_DESC',
  TokenTokenIdAsc = 'token_tokenId_ASC',
  TokenTokenIdDesc = 'token_tokenId_DESC',
  TokenTransactionHashAsc = 'token_transactionHash_ASC',
  TokenTransactionHashDesc = 'token_transactionHash_DESC',
  TransactionHashAsc = 'transactionHash_ASC',
  TransactionHashDesc = 'transactionHash_DESC'
}

export type TransferWhereInput = {
  AND?: InputMaybe<Array<TransferWhereInput>>;
  OR?: InputMaybe<Array<TransferWhereInput>>;
  block_eq?: InputMaybe<Scalars['BigInt']>;
  block_gt?: InputMaybe<Scalars['BigInt']>;
  block_gte?: InputMaybe<Scalars['BigInt']>;
  block_in?: InputMaybe<Array<Scalars['BigInt']>>;
  block_isNull?: InputMaybe<Scalars['Boolean']>;
  block_lt?: InputMaybe<Scalars['BigInt']>;
  block_lte?: InputMaybe<Scalars['BigInt']>;
  block_not_eq?: InputMaybe<Scalars['BigInt']>;
  block_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  from?: InputMaybe<OwnerWhereInput>;
  from_isNull?: InputMaybe<Scalars['Boolean']>;
  id_contains?: InputMaybe<Scalars['String']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_endsWith?: InputMaybe<Scalars['String']>;
  id_eq?: InputMaybe<Scalars['String']>;
  id_gt?: InputMaybe<Scalars['String']>;
  id_gte?: InputMaybe<Scalars['String']>;
  id_in?: InputMaybe<Array<Scalars['String']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']>;
  id_lt?: InputMaybe<Scalars['String']>;
  id_lte?: InputMaybe<Scalars['String']>;
  id_not_contains?: InputMaybe<Scalars['String']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  id_not_endsWith?: InputMaybe<Scalars['String']>;
  id_not_eq?: InputMaybe<Scalars['String']>;
  id_not_in?: InputMaybe<Array<Scalars['String']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']>;
  id_startsWith?: InputMaybe<Scalars['String']>;
  timestamp_eq?: InputMaybe<Scalars['BigInt']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_eq?: InputMaybe<Scalars['BigInt']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
  to?: InputMaybe<OwnerWhereInput>;
  to_isNull?: InputMaybe<Scalars['Boolean']>;
  token?: InputMaybe<TokenWhereInput>;
  token_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_contains?: InputMaybe<Scalars['String']>;
  transactionHash_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_eq?: InputMaybe<Scalars['String']>;
  transactionHash_gt?: InputMaybe<Scalars['String']>;
  transactionHash_gte?: InputMaybe<Scalars['String']>;
  transactionHash_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_isNull?: InputMaybe<Scalars['Boolean']>;
  transactionHash_lt?: InputMaybe<Scalars['String']>;
  transactionHash_lte?: InputMaybe<Scalars['String']>;
  transactionHash_not_contains?: InputMaybe<Scalars['String']>;
  transactionHash_not_containsInsensitive?: InputMaybe<Scalars['String']>;
  transactionHash_not_endsWith?: InputMaybe<Scalars['String']>;
  transactionHash_not_eq?: InputMaybe<Scalars['String']>;
  transactionHash_not_in?: InputMaybe<Array<Scalars['String']>>;
  transactionHash_not_startsWith?: InputMaybe<Scalars['String']>;
  transactionHash_startsWith?: InputMaybe<Scalars['String']>;
};

export type TransfersConnection = {
  __typename?: 'TransfersConnection';
  edges: Array<TransferEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type WhereIdInput = {
  id: Scalars['String'];
};

export type GetOwnerTokensQueryVariables = Exact<{
  owner: Scalars['String'];
  collection?: InputMaybe<Scalars['String']>;
}>;


export type GetOwnerTokensQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', tokenId: any, collection: { __typename?: 'Collection', id: string, name?: string | null } }> };

export type GetOwnerMintHistoryQueryVariables = Exact<{
  collection: Scalars['String'];
  owner: Scalars['String'];
}>;


export type GetOwnerMintHistoryQuery = { __typename?: 'Query', tokens: Array<{ __typename?: 'Token', tokenId: any, owner?: { __typename?: 'Owner', id: string } | null }> };

export type GetAllTokensInCollectionQueryVariables = Exact<{
  collection: Scalars['String'];
}>;


export type GetAllTokensInCollectionQuery = { __typename?: 'Query', collectionById?: { __typename?: 'Collection', tokens: Array<{ __typename?: 'Token', tokenId: any }> } | null };

export type GetAllAssetEntriesInCollectionQueryVariables = Exact<{
  collection: Scalars['String'];
}>;


export type GetAllAssetEntriesInCollectionQuery = { __typename?: 'Query', collectionById?: { __typename?: 'Collection', assetEntries: Array<{ __typename?: 'AssetEntry', assetId: any }> } | null };


export const GetOwnerTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerTokens"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collection"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"owner"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collection"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"collection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerTokensQuery, GetOwnerTokensQueryVariables>;
export const GetOwnerMintHistoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOwnerMintHistory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"collection"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collection"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"transfers_some"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"from"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"StringValue","value":"0x0000000000000000000000000000000000000000","block":false}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"to"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id_eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnerMintHistoryQuery, GetOwnerMintHistoryQueryVariables>;
export const GetAllTokensInCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTokensInCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokens"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"tokenId_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tokenId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTokensInCollectionQuery, GetAllTokensInCollectionQueryVariables>;
export const GetAllAssetEntriesInCollectionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllAssetEntriesInCollection"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"collection"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collectionById"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"collection"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetEntries"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"assetId_ASC"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"assetId"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllAssetEntriesInCollectionQuery, GetAllAssetEntriesInCollectionQueryVariables>;