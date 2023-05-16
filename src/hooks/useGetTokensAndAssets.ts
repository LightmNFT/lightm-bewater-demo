import { BigNumber, ethers } from "ethers";
import { useState, useCallback, useEffect } from "react";
import { LightmFullEquippableABI } from "../../types/ethers-contracts";
import { gql } from "../../types/graphs";
import {
  GET_ALL_ASSET_ENTRIES_IN_COLLECTION,
  GET_ALL_TOKENS_IN_COLLECTION,
  graphClient,
} from "@/lib/graphRequests";

const NOT_INCLUDED = "NOT_INCLUDED";

export default function useGetTokensAndAssets(
  contract: LightmFullEquippableABI | undefined,
  {
    listenTokens = false,
    listenAssets = false,
  }: {
    listenTokens?: boolean;
    listenAssets?: boolean;
  } = { listenTokens: false, listenAssets: false }
) {
  const [tokenIds, setTokenIds] = useState<BigNumber[]>([]);
  const [assetEntries, setAssetEntries] = useState<BigNumber[]>([]);

  const [isGetTokens, setIsGetTokens] = useState(false);
  const [isGetAssetEntries, setIsGetAssetEntries] = useState(false);

  const _getTokensByIndexer = useCallback(
    async (pure = true) => {
      if (contract) {
        if (!pure) setIsGetTokens(true);

        const {
          data: { collectionById },
        } = await graphClient.query({
          query: gql(GET_ALL_TOKENS_IN_COLLECTION),
          variables: { collection: contract.address },
        });

        if (!pure) {
          setIsGetTokens(false);
        }

        if (collectionById) {
          const { tokens } = collectionById;

          const _tokenIds = tokens.map((token) => token.tokenId);
          if (!pure) {
            setTokenIds(_tokenIds);
          }

          return _tokenIds;
        } else {
          if (!pure) {
            setTokenIds([]);
          }

          return NOT_INCLUDED;
        }
      }

      return [];
    },
    [contract]
  );

  const _getAssetEntriesByIndexer = useCallback(
    async (pure = true) => {
      if (contract) {
        if (!pure) setIsGetAssetEntries(true);

        const {
          data: { collectionById },
        } = await graphClient.query({
          query: gql(GET_ALL_ASSET_ENTRIES_IN_COLLECTION),
          variables: { collection: contract.address },
        });

        if (!pure) {
          setIsGetAssetEntries(false);
        }

        if (collectionById) {
          const { assetEntries } = collectionById;

          const _assetIds = assetEntries.map((assetEntry) =>
            BigNumber.from(assetEntry.assetId as bigint)
          );
          if (!pure) {
            setAssetEntries(_assetIds);
          }

          return _assetIds;
        } else {
          if (!pure) {
            setAssetEntries([]);
          }

          return NOT_INCLUDED;
        }
      }

      return [];
    },
    [contract]
  );

  const internalGetTokens = useCallback(async () => {
    await _getTokensByIndexer(false);
  }, [_getTokensByIndexer]);

  const internalGetAssetEntries = useCallback(async () => {
    await _getAssetEntriesByIndexer(false);
  }, [_getAssetEntriesByIndexer]);

  const getTokens = useCallback(async () => {
    const result = await _getTokensByIndexer();

    return result;
  }, [_getTokensByIndexer]);

  const getAssetEntries = useCallback(async () => {
    const result = await _getAssetEntriesByIndexer();
    return result;
  }, [_getAssetEntriesByIndexer]);

  const mintOrBurnListen = useCallback(() => {
    if (contract) {
      internalGetTokens();

      const mintEventFilter = contract.filters[
        "Transfer(address,address,uint256)"
      ](ethers.constants.AddressZero);
      const burnEventFilter = contract.filters[
        "Transfer(address,address,uint256)"
      ](null, ethers.constants.AddressZero);

      contract.on(mintEventFilter, internalGetTokens);
      contract.on(burnEventFilter, internalGetTokens);

      return () => {
        contract.off(mintEventFilter, internalGetTokens);
        contract.off(burnEventFilter, internalGetTokens);
      };
    }
  }, [contract, internalGetTokens]);

  const assetSetListen = useCallback(() => {
    if (contract) {
      internalGetAssetEntries();

      const assetSetEventFilter = contract.filters["AssetSet(uint64)"]();

      contract.on(assetSetEventFilter, internalGetAssetEntries);

      return () => {
        contract.off(assetSetEventFilter, internalGetAssetEntries);
      };
    }
  }, [contract, internalGetAssetEntries]);

  useEffect(() => {
    if (listenTokens) {
      return mintOrBurnListen();
    }
  }, [listenTokens, mintOrBurnListen]);

  useEffect(() => {
    if (listenAssets) {
      return assetSetListen();
    }
  }, [listenAssets, assetSetListen]);

  return {
    state: { tokenIds, assetEntries },
    status: { isGetTokens, isGetAssetEntries },
    functions: {
      getTokens,
      getAssetEntries,
    },
  };
}
