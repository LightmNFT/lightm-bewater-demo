import Reveal from "reveal.js";
import { useEffect } from "react";
import {
  Chain,
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { BigNumber } from "ethers";
import { useQuery } from "@apollo/client";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createClient, sepolia, useAccount, WagmiConfig } from "wagmi";
import { gql } from "@/../types/graphs";

import {
  BODY_CONTRACT_ADDRESS,
  HAND_WEAR_CONTRACT_ADDRESS,
  HEAD_WEAR_CONTRACT_ADDRESS,
  NFT_RENDERER_LOADING,
} from "./lib/consts";
import Index from "./slides";
import Intro from "./slides/intro";
import Preparation from "./slides/preparation";
import { GET_OWNER_MINT_HISTORY } from "./lib/graphRequests";
import { Toaster } from "./components/ui/toaster";
import Ending from "./slides/ending";
import { hardhat } from "wagmi/chains";
import ChainStatus from "./components/ChainStatus";

import "./App.css";

const chains: Chain[] = import.meta.env.DEV ? [hardhat] : [sepolia];
const projectId = "f8aeec38f8522256ceb258045f279909";

export interface ITokenData {
  bodyTokenId: BigNumber | "LOADING";
  bodyOwned: boolean | "LOADING";
  headWearTokenId: BigNumber | "LOADING";
  headWearOwned: boolean | "LOADING";
  handWearTokenId: BigNumber | "LOADING";
  handWearOwned: boolean | "LOADING";
  bodyRefetch: () => void;
  headRefetch: () => void;
  handRefetch: () => void;
}

const { provider } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider,
});
const ethereumClient = new EthereumClient(wagmiClient, chains);

function App() {
  const account = useAccount();

  const { data: bodyData, refetch: bodyRefetch } = useQuery(
    gql(GET_OWNER_MINT_HISTORY),
    {
      variables: {
        collection: BODY_CONTRACT_ADDRESS,
        owner: account.address || "",
      },
    }
  );
  const { data: headWearData, refetch: headRefetch } = useQuery(
    gql(GET_OWNER_MINT_HISTORY),
    {
      variables: {
        collection: HEAD_WEAR_CONTRACT_ADDRESS,
        owner: account.address || "",
      },
    }
  );
  const { data: handWearData, refetch: handRefetch } = useQuery(
    gql(GET_OWNER_MINT_HISTORY),
    {
      variables: {
        collection: HAND_WEAR_CONTRACT_ADDRESS,
        owner: account.address || "",
      },
    }
  );

  const [bodyTokenId, bodyOwned]: [any, "LOADING" | boolean] =
    bodyData === undefined
      ? [NFT_RENDERER_LOADING, NFT_RENDERER_LOADING]
      : [
          bodyData.tokens?.[0]?.tokenId,
          bodyData.tokens?.[0]?.owner?.id === account.address,
        ];
  const [headWearTokenId, headWearOwned]: [any, "LOADING" | boolean] =
    headWearData === undefined
      ? [NFT_RENDERER_LOADING, NFT_RENDERER_LOADING]
      : [
          headWearData.tokens?.[0]?.tokenId,
          headWearData.tokens?.[0]?.owner?.id === account.address,
        ];
  const [handWearTokenId, handWearOwned]: [any, "LOADING" | boolean] =
    handWearData === undefined
      ? [NFT_RENDERER_LOADING, NFT_RENDERER_LOADING]
      : [
          handWearData?.tokens?.[0]?.tokenId,
          handWearData.tokens?.[0]?.owner?.id === account.address,
        ];

  const tokenData: ITokenData = {
    bodyTokenId,
    bodyOwned,
    headWearTokenId,
    headWearOwned,
    handWearTokenId,
    handWearOwned,
    bodyRefetch,
    headRefetch,
    handRefetch,
  };

  useEffect(() => {
    const deck = new Reveal({
      navigationMode: "linear",
      disableLayout: true,
      slideNumber: true,
      showSlideNumber: "all",
      history: true,
    });
    deck.initialize();
  }, []);

  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <ChainStatus className="absolute z-50 left-4 bottom-6" />
        <div className="reveal">
          <div className="slides container">
            <Index />
            <Preparation {...tokenData} />
            <Intro {...tokenData} />
            <Ending />
          </div>
        </div>
      </WagmiConfig>
      <Toaster />
      <Web3Modal
        projectId={projectId}
        ethereumClient={ethereumClient}
        themeMode="light"
        themeVariables={{
          "--w3m-accent-color": "#000",
          "--w3m-background-color": "#000",
        }}
      />
    </>
  );
}

export default App;
