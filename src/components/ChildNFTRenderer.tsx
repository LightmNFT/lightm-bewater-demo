import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import useGetMetdata from "@/hooks/useMetadata";
import { BigNumber } from "ethers";
import { useProvider, useWebSocketProvider } from "wagmi";
import { IRMRKNestableEventsAndStruct } from "@/../types/ethers-contracts/LightmFullEquippableABI";
import { cn, convertIpfs } from "@/lib/utils";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "./ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { LightmEquippableRenderUtilsABI__factory } from "@/../types/ethers-contracts";
import { IRenderPart } from "./NFTRenderer";
import { Badge } from "./ui/badge";
import { Timer } from "lucide-react";
import { LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS } from "@/lib/consts";
import { LightmEquippableRenderUtils } from "types/ethers-contracts/LightmEquippableRenderUtilsABI";

interface IChildNFTRender {
  isPending: boolean;
  child: IRMRKNestableEventsAndStruct.ChildStructOutput;
  equippedPart: IRenderPart | undefined;
  catalogAddress: string;
  idleSlots: BigNumber[];
  isOwner: boolean;
  allowEquip: boolean;
  acceptOrReject: boolean | undefined;
  slotNameMapping?: Record<string, string>;
  equip: (slotId: BigNumber, childAssetId: BigNumber) => void;
  unequip: () => void;
  modifyPending: (type: boolean) => void;
}

export function slotResolver(
  slotId: string,
  mapping?: IChildNFTRender["slotNameMapping"]
) {
  if (!mapping) return slotId;

  if (slotId in mapping) {
    return mapping[slotId];
  } else {
    return slotId;
  }
}

export default function ChildNFTRender({
  isPending,
  child,
  equippedPart,
  catalogAddress,
  idleSlots,
  isOwner,
  acceptOrReject,
  allowEquip = false,
  slotNameMapping,
  equip,
  unequip,
  modifyPending,
}: IChildNFTRender) {
  const provider = useProvider();
  const wsProvider = useWebSocketProvider();

  const [cras, setCras] = useState<
    LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput[]
  >([]);

  const equippableRenderUtils = useMemo(() => {
    return LightmEquippableRenderUtilsABI__factory.connect(
      LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS,
      wsProvider || provider
    );
  }, [provider, wsProvider]);

  const getCras = useCallback(async () => {
    const originCras =
      await equippableRenderUtils.getActiveCatalogRelatedAssets(
        child.contractAddress,
        child.tokenId
      );
    const sortedCras = [...originCras].sort((a, b) =>
      a.priority.sub(b.priority).toNumber()
    );

    setCras(sortedCras);
  }, [equippableRenderUtils, child]);

  useEffect(() => {
    getCras();
  }, [getCras]);

  const unequipBtn = equippedPart ? (
    <Button disabled={!isOwner} onClick={unequip}>
      <span>从</span>
      <span className="mx-2">
        插槽 {slotResolver(equippedPart.id.toString(), slotNameMapping)}
      </span>
      <span>拆卸</span>
    </Button>
  ) : null;

  const pendingChildOperation = (
    <div className="inline-flex gap-2">
      <Button
        onClick={() => modifyPending(true)}
        variant={acceptOrReject ? "default" : "outline"}
      >
        接受
      </Button>
      <Button
        onClick={() => modifyPending(false)}
        variant={acceptOrReject === false ? "default" : "outline"}
      >
        拒绝
      </Button>
    </div>
  );

  const activeChildOperation = allowEquip ? (
    equippedPart ? (
      <Tooltip>
        <TooltipTrigger>{unequipBtn}</TooltipTrigger>
        <TooltipContent className={isOwner ? "hidden" : ""}>
          <p>无权限</p>
        </TooltipContent>
      </Tooltip>
    ) : idleSlots.length > 0 ? (
      <div className="flex flex-wrap items-center gap-2">
        装备到：
        {idleSlots
          .filter((slotId) =>
            cras.some(
              (cra) =>
                cra.targetCatalogAddress === catalogAddress &&
                cra.targetSlotId.eq(slotId)
            )
          )
          .map((slotId) => {
            const btn = (
              <Button
                size="sm"
                disabled={!isOwner}
                onClick={() =>
                  equip(
                    slotId,
                    cras.find((cra) => cra.targetSlotId.eq(slotId))!.id
                  )
                }
              >
                插槽 {slotResolver(slotId.toString(), slotNameMapping)}
              </Button>
            );

            return (
              <Tooltip>
                <TooltipTrigger>{btn}</TooltipTrigger>
                <TooltipContent className={isOwner ? "hidden" : ""}>
                  <p>无权限</p>
                </TooltipContent>
              </Tooltip>
            );
          })}
      </div>
    ) : null
  ) : null;

  const extraItems = [
    <div>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        From: {child.contractAddress}
      </p>
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Token ID: {child.tokenId.toString()}
      </p>
    </div>,
    isPending ? (
      <div className="text-right">
        <Badge>
          <Timer width={16} height={16} />
          待确认
        </Badge>
      </div>
    ) : null,
    <Separator className="my-2" />,
    isPending ? pendingChildOperation : activeChildOperation,
  ];

  const tokenURI = cras?.[0]?.metadataURI || "";

  return (
    <div className="relative">
      <Picture
        src={tokenURI}
        extraItems={extraItems}
        className={`${
          equippedPart || typeof acceptOrReject === "boolean"
            ? "border-dashed border-gray-400"
            : ""
        }${isPending ? " border" : ""}`}
      />
      {isPending ? (
        <Timer className="absolute right-1 top-1" width={16} height={16} />
      ) : null}
    </div>
  );
}

interface IPicture {
  src: string;
  extraItems?: ReactNode[];
  className?: string;
}

function Picture({ src, extraItems, className }: IPicture) {
  const { metadata, isLoading } = useGetMetdata(src);

  let extraCls = "";
  let tier;

  if (metadata?.properties?.tier) {
    switch (metadata.properties.tier.value) {
      case 1: {
        extraCls =
          "text-gray-800 underline font-extrabold text-4xl lg:text-5xl";
        break;
      }
      case 2: {
        extraCls = "text-gray-800 font-extrabold text-4xl lg:text-5xl";
        break;
      }
      case 3: {
        extraCls = "text-gray-800";
        break;
      }
    }

    tier = metadata.properties.tier.value;
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-lg border-2 border-solid p-1",
            className
          )}
        >
          {isLoading ? (
            <span>Loading...</span>
          ) : (
            <img
              src={
                metadata?.thumbnailUri ? convertIpfs(metadata.thumbnailUri) : ""
              }
              alt={metadata?.name}
              className="aspect-square"
            />
          )}
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80 lg:w-96">
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
          {metadata?.name}
        </h3>
        {tier ? (
          <h3
            className={cn(
              "scroll-m-20 rounded-lg text-2xl tracking-tight lg:text-3xl",
              extraCls
            )}
          >
            Tier: {tier}
          </h3>
        ) : null}
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {metadata?.description}
        </p>
        <Separator className="my-2" />
        <p className="break-all text-sm text-slate-500 dark:text-slate-400">
          {`src: ${src}`}
        </p>
        {extraItems ? (
          <>
            <Separator className="my-2" />
            {extraItems}
          </>
        ) : null}
      </PopoverContent>
    </Popover>
  );
}
