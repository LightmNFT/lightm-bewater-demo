import NFTRenderer from "@/components/NFTRenderer";
import {
  BODY_CONTRACT_ADDRESS,
  HEAD_WEAR_CONTRACT_ADDRESS,
  HAND_WEAR_CONTRACT_ADDRESS,
  NFTRefreshTrigger,
} from "@/lib/consts";
import { ITokenData } from "@/App";

interface IPreparation extends ITokenData {}

export default function Preparation({
  bodyTokenId,
  bodyOwned,
  bodyRefetch,
  headWearTokenId,
  headWearOwned,
  headRefetch,
  handWearTokenId,
  handWearOwned,
  handRefetch,
}: IPreparation) {
  return (
    <>
      <section
        data-auto-animate
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>跟随我...</h1>
      </section>
      <section
        data-auto-animate
        data-transition="fade-out"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>跟随我...</h1>
        <h1>你将逐步窥见下一代NFT的全貌</h1>
      </section>
      <section
        data-auto-animate
        data-transition="concave-out"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>我们来铸造一套简单的魔法师系列！</h1>
      </section>
      <section
        data-transition="convex"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h3 className="text-start">获取🧙‍♂️</h3>
        <NFTRenderer
          contractAddress={BODY_CONTRACT_ADDRESS}
          tokenId={bodyTokenId}
          owned={bodyOwned}
          showBag={false}
          showTransfer={false}
          refetch={bodyRefetch}
          refreshTriggerSlides={NFTRefreshTrigger}
        />
      </section>
      <section
        data-transition="convex"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h3 className="text-start">获取🎩和🪄</h3>
        <div className="flex justify-center w-full relative">
          <NFTRenderer
            className="max-w-[256px] lg:max-w-[480px] 2xl:max-w-[640px] left-8 hover:animate-drift-on"
            contractAddress={HEAD_WEAR_CONTRACT_ADDRESS}
            tokenId={headWearTokenId}
            owned={headWearOwned}
            showBag={false}
            showTransfer={false}
            refetch={headRefetch}
            refreshTriggerSlides={NFTRefreshTrigger}
          />
          <NFTRenderer
            className="max-w-[256px] lg:max-w-[480px] 2xl:max-w-[640px] top-8 right-8 hover:z-10"
            contractAddress={HAND_WEAR_CONTRACT_ADDRESS}
            tokenId={handWearTokenId}
            owned={handWearOwned}
            showBag={false}
            showTransfer={false}
            refetch={handRefetch}
            refreshTriggerSlides={NFTRefreshTrigger}
          />
        </div>
      </section>
    </>
  );
}
