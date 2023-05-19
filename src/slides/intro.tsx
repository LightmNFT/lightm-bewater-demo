import {
  BODY_CONTRACT_ADDRESS,
  BREAKPOINTS,
  HAND_WEAR_CONTRACT_ADDRESS,
  HEAD_WEAR_CONTRACT_ADDRESS,
  NETWORK_ERROR,
  NFTRefreshTrigger,
  erc5773Link,
  erc6059Link,
  erc6220Link,
  slotMapping,
} from "@/lib/consts";
import NFTRenderer from "@/components/NFTRenderer";
import { ITokenData } from "@/App";
import { ArrowRight, Backpack, RotateCw, Send } from "lucide-react";
import { useCallback, useMemo } from "react";
import { useAccount, useSigner } from "wagmi";
import { DemoCustomModuleABI__factory } from "@/../types/ethers-contracts";
import { toast } from "@/hooks/use-toast";
import { parseInterfaceError } from "@/lib/utils";
import LightmLogo from "@/components/LightmLogo";
import { useBreakpoint } from "use-breakpoint";
import differentViewVideo from "/DifferentView.mp4";
import Card from "@/components/Card";
import { useWeb3Modal } from "@web3modal/react";
import useChainCorrect from "@/hooks/useChainCorrect";

interface IIntro extends ITokenData {}

export default function Intro({
  bodyTokenId,
  bodyOwned,
  headWearTokenId,
  headWearOwned,
  headRefetch,
  handWearTokenId,
  handWearOwned,
  handRefetch,
}: IIntro) {
  const account = useAccount();
  const { open } = useWeb3Modal();
  const { data: signer } = useSigner();
  const { breakpoint } = useBreakpoint(BREAKPOINTS, "mobile");

  const { chainCorrect } = useChainCorrect();

  const iconSize = breakpoint === "mobile" ? 48 : 96;

  const contractW = useMemo(() => {
    if (signer) {
      return DemoCustomModuleABI__factory.connect(
        BODY_CONTRACT_ADDRESS,
        signer
      );
    }
  }, [signer]);

  const add2ndAsset = useCallback(async () => {
    if (!account.isConnected) {
      open();
    }

    if (contractW && bodyTokenId) {
      let toastRef: any;

      const _internalCall = async () => {
        const tx = await contractW.addAssetToTokenWithTempPermission(
          bodyTokenId,
          2,
          0
        );
        await tx.wait();

        toastRef.update({
          id: toastRef.id,
          title: (<LightmLogo />) as unknown as string,
          description: "添加成功!",
          duration: 5000,
        });
      };

      try {
        toastRef = toast({
          title: (<LightmLogo />) as unknown as string,
          description: "添加中...",
          duration: 0,
        });

        await _internalCall();
      } catch (e: any) {
        if (e?.code === NETWORK_ERROR) {
          try {
            await chainCorrect();
            await _internalCall();
          } catch (e: any) {
            const errorInfo = parseInterfaceError(contractW.interface, e);

            toast({
              title: "Error",
              description:
                typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
              variant: "destructive",
            });
          }
        } else {
          const errorInfo = parseInterfaceError(contractW.interface, e);

          toastRef?.update({
            id: toastRef.id,
            title: "Error",
            description:
              typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
            variant: "destructive",
          });
        }
      }
    }
  }, [account, open, bodyTokenId, contractW, chainCorrect]);

  return (
    <>
      <section
        data-auto-animate
        data-transition="concave"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>让我们了解</h1>
        <h1>下一代NFT的第一个特性</h1>
      </section>
      <section
        data-transition="zoom-in fade-out"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>1. NFT可以持有NFT</h1>
        <a href={erc6059Link} target="_blank">
          ERC-6059
        </a>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-transition="slide-out"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>
          我们可以把铸造的🎩和🪄
          <br />
          发送给🧙‍♂️
        </h1>
      </section>
      <section
        data-transition="slide-in"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1 className="inline-flex items-center gap-2">
          点击
          <Send width={iconSize} height={iconSize} />
        </h1>
        <div className="flex justify-center items-start w-full relative">
          <NFTRenderer
            className="max-w-[210px] lg:max-w-[480px] 2xl:max-w-[640px] left-8 transition hover:animate-drift-on"
            contractAddress={HEAD_WEAR_CONTRACT_ADDRESS}
            tokenId={headWearTokenId}
            preTransferTarget={{
              address: BODY_CONTRACT_ADDRESS,
              tokenId: bodyTokenId,
            }}
            showBag={false}
            owned={headWearOwned}
            refetch={headRefetch}
            refreshTriggerSlides={NFTRefreshTrigger}
          />
          <NFTRenderer
            className="max-w-[210px] lg:max-w-[480px] 2xl:max-w-[640px] top-8 right-8 hover:z-10"
            contractAddress={HAND_WEAR_CONTRACT_ADDRESS}
            tokenId={handWearTokenId}
            preTransferTarget={{
              address: BODY_CONTRACT_ADDRESS,
              tokenId: bodyTokenId,
            }}
            showBag={false}
            owned={handWearOwned}
            refetch={handRefetch}
            refreshTriggerSlides={NFTRefreshTrigger}
          />
        </div>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1 className="inline-flex items-center">
          在🧙‍♂️的
          <Backpack className="inline" width={iconSize} height={iconSize} />
          中接受它们
        </h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center justify-items-center"
      >
        <h1 className="inline-flex items-center">
          在🧙‍♂️的
          <Backpack className="inline" width={iconSize} height={iconSize} />
          中接受它们
        </h1>
        <NFTRenderer
          className="max-w-[210px] lg:max-w-[480px] 2xl:max-w-[640px]"
          contractAddress={BODY_CONTRACT_ADDRESS}
          tokenId={bodyTokenId}
          owned={bodyOwned}
          showTransfer={false}
          refetch={handRefetch}
          refreshTriggerSlides={NFTRefreshTrigger}
        />
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>现在，🧙‍♂️拥有了🎩和🪄</h1>
        <h1 className="fragment">
          我们成功地以一种通用的方式，让NFT和NFT之间在链上建立了联系
        </h1>
      </section>
      <section className="!flex flex-col h-full items-center justify-center">
        <h2>ERC-6059 带给了 NFT 什么？</h2>
        <div className="grid grid-cols-1 gap-4 text-start p-2 sm:p-0">
          <Card className="fragment">
            <strong>NFT 关系网络的构建</strong>
            <div className="sm:text-lg">
              任何的需要在任意 NFT
              之间构建关系网的应用，拥有了链上的通用解决方案
            </div>
          </Card>
          <Card className="fragment">
            <strong>简单却核心</strong>
            <div className="sm:text-lg">实现可组合 NFT 的关键</div>
          </Card>
        </div>
      </section>

      <section
        data-transition="concave"
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>让我们开始了解第二个特性</h1>
      </section>
      <section
        data-transition="zoom-in fade-out"
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>2. NFT将基于所处的上下文，输出对应的结果</h1>
        <a href={erc5773Link} target="_blank">
          ERC-5773
        </a>
      </section>
      <section
        data-transition="fade-in"
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>假如🧙‍♂️想要进入3D世界</h1>
        <h1 className="fragment">我们就需要一个新的NFT吗？</h1>
        <h1 data-id="erc5773-before" className="fragment">
          不，这不够优雅
        </h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1 data-id="erc5773-before">不，这不够优雅</h1>
        <h1 className="fragment">现在我们有ERC-5773</h1>
        <h1 data-id="erc5773-after" className="fragment">
          让我们直接为🧙‍♂️添加新的3D形象
        </h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1 data-id="erc5773-after">让我们直接为🧙‍♂️添加新的3D形象</h1>
        <div className="fragment">
          <h1
            className="cursor-pointer animate-bounce transition duration-700"
            onClick={add2ndAsset}
          >
            👉 好，那就试试！👈
          </h1>
          <h2>👆👆👆</h2>
        </div>
      </section>
      <section
        data-background-color="rgb(0, 0, 0)"
        data-fragment-index={0}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1 className="flex flex-wrap items-center">
          <span>点击</span>
          <span className="flex items-center">
            "<RotateCw width={64} height={64} />"
          </span>
          <span>后，</span>
          <span>待右下角的</span>
          <span className="flex items-center">
            "
            <ArrowRight width={64} height={64} />"
          </span>
          <span>出现，切换预览新添加的形象</span>
        </h1>
        <NFTRenderer
          className="max-w-[210px] lg:max-w-[480px] 2xl:max-w-[640px]"
          contractAddress={BODY_CONTRACT_ADDRESS}
          tokenId={bodyTokenId}
          owned={bodyOwned}
          showTransfer={false}
          refetch={handRefetch}
          refreshTriggerSlides={NFTRefreshTrigger}
        />
      </section>
      <section
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>ERC-5773贴切地描述了</h1>
        <h1>“一千个人眼中有一千个哈姆雷特”</h1>
      </section>
      <section
        data-background-video={differentViewVideo}
        data-background-size="contain"
        data-background-video-loop="true"
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>当我们改变看待事物的视角时，观测到的结果就会不同</h1>
        <h1 className="fragment">NFT得到了更具体、更合理的抽象</h1>
      </section>
      <section
        data-background-color="rgb(0, 0, 0)"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h2>ERC-5773 带给了 NFT 什么？</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-start p-2 sm:p-0">
          <Card darkTheme className="fragment">
            <strong>更具体、更具哲学意义的抽象</strong>
            <div className="sm:text-lg">
              NFT 的每个输出都是 NFT 投射到观察者视角中的结果，而 NFT
              本身则是一种抽象存在 🆚 ERC721 只进行了最基础的非同质化定义
            </div>
          </Card>
          <Card darkTheme className="fragment">
            <strong>更有效的价值沉淀</strong>
            <div className="sm:text-lg">
              向 NFT 空投 1 个新形象 NFT，是一种
              <strong className="underline underline-offset-4 sm:underline-offset-8">
                基本没有必要
              </strong>
              的对 NFT 的价值切割
            </div>
          </Card>
          <Card darkTheme className="fragment">
            <strong>可进化的 NFT</strong>
            <div className="sm:text-lg">
              类似精灵宝可梦，当精灵进入不同阶段时向 NFT 发送新的进化形象
            </div>
          </Card>
          <Card darkTheme className="fragment">
            <strong>打开二次创作市场</strong>
            <div className="sm:text-lg">
              非官方创作者可以在获得官方授权的情况下给官方 NFT
              定制新的第三方形象，另类的开放型 IP 也能高效地激发社区创造力
            </div>
          </Card>
        </div>
      </section>

      <section
        data-auto-animate
        data-transition="concave"
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>还是差点意思？</h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>还是差点意思？</h1>
        <h1>如果NFT可以装备NFT呢？</h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>来看看 ERC-6220</h1>
      </section>
      <section className="!flex flex-col h-full items-center justify-center">
        <h1>3. NFT可以装备自己持有的NFT</h1>
        <a href={erc6220Link} target="_blank">
          ERC-6220
        </a>
      </section>
      <section className="!flex flex-col h-full items-center justify-center">
        <h1
          data-id="erc-6220-desc"
          className="inline-flex flex-wrap items-center break-all"
        >
          装备功能已开启，再次打开
          <Backpack className="inline" width={iconSize} height={iconSize} />
          并查看子NFT详情进行装备
        </h1>
        <NFTRenderer
          className="max-w-[210px] lg:max-w-[480px] 2xl:max-w-[640px]"
          contractAddress={BODY_CONTRACT_ADDRESS}
          tokenId={bodyTokenId}
          owned={bodyOwned}
          showTransfer={false}
          allowEquip
          slotNameMapping={slotMapping}
          refetch={handRefetch}
          refreshTriggerSlides={NFTRefreshTrigger}
        />
      </section>
      <section
        data-transition="zoom"
        data-auto-animate
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>是的，数个 NFT 同台登场！</h1>
        <h1 className="fragment">“以史为鉴，可以知兴替”</h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>“以史为鉴，可以知兴替”</h1>
        <h1 className="fragment">
          参阅历史和当下，可穿戴系统是大多数游戏贯穿始终的核心玩法
        </h1>
      </section>
      <section
        data-auto-animate
        data-auto-animate-duration={0.5}
        className="!flex flex-col h-full items-center justify-center"
      >
        <h1>所以，我们可以认为</h1>
        <h1 className="fragment">可穿戴 NFT 将逐步取缔传统的 NFT</h1>
      </section>
      <section className="!flex flex-col h-full items-center justify-center">
        <h2>ERC-6220 将带给了 NFT 什么？</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-start p-2 sm:p-0">
          <Card className="fragment">
            <strong>可穿戴能力</strong>
            <div className="sm:text-lg">提供链上统一的 NFT 装备标准</div>
          </Card>
          <Card className="fragment">
            <strong>原生的半碎片化能力</strong>
            <div className="sm:text-lg">更好的流动性</div>
          </Card>
          <Card className="fragment">
            <strong>充分的用户个性化定制空间</strong>
            <div className="sm:text-lg">原生的流动性刺激</div>
          </Card>
          <Card className="fragment">
            <strong>打开蓝筹IP生态二次创作市场</strong>
            <div className="sm:text-lg">
              更大的创作者容量，更大的IP生态发展空间（与ERC-5773中的设计新形象的二次创作有所不同，这里指创作者给
              IP 设计穿戴品等周边型 NFT）
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
