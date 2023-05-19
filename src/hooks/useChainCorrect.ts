import { useCallback, useEffect, useMemo } from "react";
import { useNetwork, useSwitchNetwork } from "wagmi";

export default function useChainCorrect(listenChainChange = false) {
  const { chain } = useNetwork();
  const { chains, switchNetworkAsync: switchNetwork } = useSwitchNetwork();

  const chainStatus = useMemo(() => {
    if (!chain) {
      return null;
    } else if (chain.unsupported) return false;

    return true;
  }, [chain]);

  const chainCorrect = useCallback(async () => {
    if (chain && chain.unsupported && switchNetwork) {
      await switchNetwork(chains[0].id);
    }
  }, [chain, chains, switchNetwork]);

  useEffect(() => {
    if (listenChainChange) {
      chainCorrect();
    }
  }, [listenChainChange, chainCorrect]);

  return { chainStatus, chainCorrect };
}
