import { BigNumber, constants } from "ethers";
import {
  CSSProperties,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Web3Button } from "@web3modal/react";
import {
  DemoCustomModuleABI__factory,
  LightmEquippableRenderUtilsABI__factory,
  LightmFullEquippableABI__factory,
} from "@/../types/ethers-contracts";
import { LightmEquippableRenderUtils } from "@/../types/ethers-contracts/LightmEquippableRenderUtilsABI";
import { IRMRKNestableEventsAndStruct } from "@/../types/ethers-contracts/LightmFullEquippableABI";
import {
  useAccount,
  useProvider,
  useSigner,
  useWebSocketProvider,
} from "wagmi";
import { Button } from "./ui/button";
import MultiLayer2DRenderer, { IResource } from "@lightm-nft/multi-layer-2d-renderer";
import {
  LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS,
  NETWORK_ERROR,
  NFT_RENDERER_LOADING,
} from "@/lib/consts";
import { toast } from "@/hooks/use-toast";
import { convertIpfs, getEllipsis, parseInterfaceError } from "@/lib/utils";
import { IMetadata } from "@/hooks/useMetadata";
import {
  ArrowLeft,
  ArrowRight,
  Backpack,
  Check,
  Loader2,
  RotateCw,
  Send,
  X,
} from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { BytesLike, isAddress } from "ethers/lib/utils.js";
import ChildNFTRender, { slotResolver } from "./ChildNFTRenderer";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { TooltipProvider } from "./ui/tooltip";
import { ScrollArea } from "./ui/scroll-area";
import Reveal from "reveal.js";
import LightmLogo from "./LightmLogo";
import useChainCorrect from "@/hooks/useChainCorrect";
import { PromiseOrValue } from "types/ethers-contracts/common";

export interface IRenderPart {
  id: BigNumber;
  origin: LightmEquippableRenderUtils.OriginStruct;
}

interface ITransferTarget {
  address: string;
  tokenId?: BigNumber | "LOADING" | undefined;
}

interface INFTRenderer {
  contractAddress: string;
  tokenId: BigNumber | undefined | "LOADING";
  owned: boolean | "LOADING";
  refetch: () => void;
  refreshTriggerSlides?: number[];
  slotNameMapping?: Record<string, string>;
  showTransfer?: boolean;
  showBag?: boolean;
  allowEquip?: boolean;
  preTransferTarget?: ITransferTarget;
  className?: string;
  style?: CSSProperties;
}

export default function NFTRenderer({
  contractAddress,
  tokenId,
  owned,
  preTransferTarget,
  className,
  style,
  slotNameMapping,
  allowEquip = false,
  showTransfer = true,
  showBag = true,
  refreshTriggerSlides = [],
  refetch,
}: INFTRenderer) {
  const { data: signer } = useSigner();
  const account = useAccount();

  const provider = useProvider();
  const wsProvider = useWebSocketProvider();

  const { chainCorrect } = useChainCorrect();

  const [toBeRenderedParts, setToBeRenderedParts] = useState<IRenderPart[]>([]);
  const [originToBeRenderedParts, setOriginToBeRenderedParts] = useState<
    LightmEquippableRenderUtils.ToBeRenderedPartStructOutput[]
  >([]);
  const [toBeRenderedResources, setToBeRenderedResources] = useState<
    IResource[]
  >([]);
  const [pendingChildren, setPendingChildren] = useState<
    IRMRKNestableEventsAndStruct.ChildStructOutput[]
  >([]);
  const [pendingChildrenManagement, setPendingChildrenManagement] = useState<
    Map<IRMRKNestableEventsAndStruct.ChildStructOutput, boolean | undefined>
  >(new Map());
  const [children, setChildren] = useState<
    IRMRKNestableEventsAndStruct.ChildStructOutput[]
  >([]);
  const [assets, setAssets] = useState<
    LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput[]
  >([]);
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);

  const selectedAsset = assets[selectedAssetIndex];

  const [transferTargetAddress, setTransferTargetAddress] = useState(
    preTransferTarget ? preTransferTarget.address : ""
  );
  const [transferTargetTokenId, setTransferTargetTokenId] = useState<
    ITransferTarget["tokenId"]
  >(preTransferTarget ? preTransferTarget.tokenId : undefined);
  const [transferTargetAddressError, setTransferTargetAddressError] =
    useState("");
  const [transferTargetTokenIdError, setTransferTargetTokenIdError] =
    useState("");

  const [openDialog, setOpenDialog] = useState(false);
  const [openSheet, setOpenSheet] = useState(false);
  const [isMinting, setIsMinting] = useState(false);
  const [isGettingCras, setIsGettingCras] = useState(false);
  const [isGettingToBeRenderedParts, setIsGettingToBeRenderedParts] =
    useState(false);
  const [isGettingChildren, setIsGettingChildren] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const [isExcuting, setIsExcuting] = useState(false);

  const needToMint =
    tokenId === NFT_RENDERER_LOADING ? true : tokenId ? false : true;

  const resetInputState = useCallback(() => {
    setTransferTargetAddress("");
    setTransferTargetTokenId(undefined);

    setTransferTargetAddressError("");
    setTransferTargetTokenIdError("");
  }, []);

  const resetBagManagement = useCallback(() => {
    setPendingChildrenManagement(new Map());
    setToBeRenderedParts(originToBeRenderedParts);
  }, [originToBeRenderedParts]);

  const demoCustomModuleW = useMemo(() => {
    return (
      signer && DemoCustomModuleABI__factory.connect(contractAddress, signer)
    );
  }, [contractAddress, signer]);

  const contractW = useMemo(() => {
    return (
      signer &&
      LightmFullEquippableABI__factory.connect(contractAddress, signer)
    );
  }, [contractAddress, signer]);

  const equippableRenderUtils = useMemo(() => {
    return LightmEquippableRenderUtilsABI__factory.connect(
      LIGHTM_EQUIPPABLE_RENDER_UTILS_ADDRESS,
      wsProvider || provider
    );
  }, [provider, wsProvider]);

  const equipmentChanges = useMemo(() => {
    if (originToBeRenderedParts && toBeRenderedParts) {
      const removes = [];
      const adds = [];

      const partsCopy = [...toBeRenderedParts];

      for (const part of originToBeRenderedParts) {
        const targetPartIndex = partsCopy.findIndex(
          (_part) =>
            _part.id.eq(part.id) &&
            _part.origin.contractAddress === part.origin.contractAddress &&
            (_part.origin.tokenId as BigNumber).eq(part.origin.tokenId) &&
            (_part.origin.assetId as BigNumber).eq(part.origin.assetId)
        );

        // if find means no change
        if (targetPartIndex > -1) {
          partsCopy.splice(targetPartIndex, 1);
        } else {
          // if not find means be removed
          removes.push(part);
        }
      }

      // if still has rest in partsCopy means new added
      adds.push(...partsCopy);

      return adds.length || removes.length
        ? {
            adds,
            removes,
          }
        : undefined;
    }
  }, [originToBeRenderedParts, toBeRenderedParts]);

  const pendingChildrenChanges = useMemo(
    () =>
      [...pendingChildrenManagement.entries()].filter(
        ([_, value]) => typeof value === "boolean"
      ),
    [pendingChildrenManagement]
  );

  const getChildren = useCallback(async () => {
    if (tokenId && tokenId !== NFT_RENDERER_LOADING && contractW) {
      setIsGettingChildren(true);

      const [_pendingChildren, _children] = await Promise.all([
        contractW.pendingChildrenOf(tokenId),
        contractW.childrenOf(tokenId),
      ]);

      setIsGettingChildren(false);
      setPendingChildren(_pendingChildren);
      setChildren(_children);
    }
  }, [contractW, tokenId]);

  const getCRAs = useCallback(async () => {
    if (needToMint === false && tokenId) {
      setIsGettingCras(true);

      const originCras =
        await equippableRenderUtils.getActiveCatalogRelatedAssets(
          contractAddress,
          tokenId
        );
      const sortedCras = [...originCras].sort((a, b) =>
        a.priority.sub(b.priority).toNumber()
      );

      setIsGettingCras(false);
      setAssets(sortedCras);
    }
  }, [contractAddress, equippableRenderUtils, needToMint, tokenId]);

  const getToRenderedParts = useCallback(async () => {
    if (selectedAsset && tokenId) {
      setIsGettingToBeRenderedParts(true);

      if (selectedAsset.catalogAddress !== constants.AddressZero) {
        // TODO: Nested equipment can also be supported here
        // If `childCatalogAddress` is not empty, it means that this part is also a composable with its own equippables
        try {
          const _toBeRenderedParts = (
            await equippableRenderUtils.getToBeRenderedParts(
              contractAddress,
              tokenId,
              selectedAsset.id
            )
          ).filter((_part) => _part.metadataURI !== "");

          setToBeRenderedParts(_toBeRenderedParts);
          setOriginToBeRenderedParts(_toBeRenderedParts);

          const _toBeRenderedResources = await Promise.all(
            _toBeRenderedParts.map(async (part) => {
              const { metadataURI } = part;

              const metadata: IMetadata = await fetch(
                convertIpfs(metadataURI)
              ).then((res) => res.json());

              return {
                src: metadata.mediaUri || "",
                z: part.zIndex,
              };
            })
          );

          setIsGettingToBeRenderedParts(false);
          setToBeRenderedResources(_toBeRenderedResources);
        } catch (e) {
          setIsGettingToBeRenderedParts(false);
          if (import.meta.env.DEV) {
            console.log(e);
          }
        }
      } else {
        const metadata: IMetadata = await fetch(
          convertIpfs(selectedAsset.metadataURI)
        ).then((res) => res.json());

        setIsGettingToBeRenderedParts(false);
        setOriginToBeRenderedParts([]);
        setToBeRenderedParts([]);
        setToBeRenderedResources([{ src: metadata.thumbnailUri || "", z: 1 }]);
      }
    }
  }, [contractAddress, selectedAsset, tokenId, equippableRenderUtils]);

  const refresh = useCallback(async () => {
    refetch();
    getCRAs();
    getChildren();
  }, [refetch, getCRAs, getChildren]);

  const modifyPendingChildren = useCallback(
    async (
      type: boolean,
      child: IRMRKNestableEventsAndStruct.ChildStructOutput
    ) => {
      setPendingChildrenManagement((oldMap) => {
        const newMap = new Map(oldMap);

        const oldStatus = newMap.get(child);
        newMap.set(child, type === oldStatus ? undefined : type);

        return newMap;
      });
    },
    []
  );

  const modifyToBeRenderedParts = useCallback(
    (type: "add" | "remove", part: IRenderPart | BigNumber) => {
      if (type === "add") {
        setToBeRenderedParts((prev) => {
          if (prev) {
            return [...prev, part as IRenderPart];
          }

          return [part as IRenderPart];
        });
      } else if (type === "remove") {
        setToBeRenderedParts((prev) => {
          if (prev) {
            return prev.filter((p) => p.id !== (part as BigNumber));
          }

          return [];
        });
      }
    },
    []
  );

  const confirmEquipAndChildrenManagement = useCallback(async () => {
    if (
      (equipmentChanges || pendingChildrenChanges.length > 0) &&
      tokenId &&
      selectedAsset &&
      contractW &&
      account.address
    ) {
      const multicallData: PromiseOrValue<BytesLike>[] = [];

      if (equipmentChanges) {
        const { adds, removes } = equipmentChanges;

        const removeData = removes.length
          ? contractW.interface.encodeFunctionData(
              "removeSlotEquipments(uint256,uint64,uint64[])",
              [tokenId, selectedAsset.id, removes.map((part) => part.id)]
            )
          : null;
        const addData = adds.length
          ? contractW.interface.encodeFunctionData("addSlotEquipments", [
              tokenId,
              selectedAsset.id,
              adds.map((part) => {
                return {
                  tokenId: tokenId,
                  catalogRelatedAssetId: selectedAsset.id,
                  slotId: part.id,
                  childCatalogRelatedAssetId: part.origin.assetId,
                  child: part.origin,
                };
              }),
              true,
            ])
          : null;

        if (removeData) multicallData.push(removeData);
        if (addData) multicallData.push(addData);
      }

      if (pendingChildrenChanges.length > 0) {
        for (let i = 0; i < pendingChildrenChanges.length; i++) {
          const [child, type] = pendingChildrenChanges[i];

          const data = type
            ? contractW.interface.encodeFunctionData(
                "acceptChild(uint256,address,uint256)",
                [tokenId, child.contractAddress, child.tokenId]
              )
            : contractW.interface.encodeFunctionData(
                "transferChild(uint256,address,uint256,address,uint256,bool,bytes)",
                [
                  tokenId,
                  account.address,
                  0,
                  child.contractAddress,
                  child.tokenId,
                  true,
                  [],
                ]
              );

          multicallData.push(data);
        }
      }

      let toastRef: any;

      const _internalCall = async () => {
        const tx = await contractW.multicall(multicallData);
        await tx.wait();

        toastRef.update({
          id: toastRef.id,
          title: (<LightmLogo />) as unknown as string,
          description: "执行成功!",
        });

        setIsExcuting(false);
        setOpenSheet(false);
        resetBagManagement();
        refresh();
      };

      try {
        setIsExcuting(true);

        toastRef = toast({
          title: (<LightmLogo />) as unknown as string,
          description: "执行中...",
          duration: 0,
        });

        await _internalCall();
      } catch (e: any) {
        if (e?.code === NETWORK_ERROR) {
          try {
            await chainCorrect();
            await _internalCall();
          } catch (e: any) {
            setIsExcuting(false);

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

          setIsExcuting(false);
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
  }, [
    equipmentChanges,
    pendingChildrenChanges,
    tokenId,
    selectedAsset,
    contractW,
    account.address,
    chainCorrect,
    refresh,
    resetBagManagement,
  ]);

  const mint = useCallback(async () => {
    if (demoCustomModuleW) {
      const toastIns = toast({
        title: (<LightmLogo />) as unknown as string,
        description: "铸造中...",
        duration: 0,
      });
      setIsMinting(true);

      const _internalMint = async () => {
        const tx = await demoCustomModuleW.mintAndAddAssetToToken(1, 0);
        await tx.wait();

        toastIns.update({
          id: toastIns.id,
          title: "铸造成功！",
          description:
            "将在10秒后获取最新数据，你也可以点击左上角刷新按钮，手动获取最新数据",
          duration: 3000,
        });

        setTimeout(() => {
          setIsMinting(false);
          refetch();
        }, 10e3);
      };

      try {
        await _internalMint();
      } catch (e: any) {
        if (e?.code === NETWORK_ERROR) {
          try {
            await chainCorrect();
            await _internalMint();
          } catch (e: any) {
            setIsMinting(false);

            const errorInfo = parseInterfaceError(
              demoCustomModuleW.interface,
              e
            );

            toast({
              title: "Error",
              description:
                typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
              variant: "destructive",
            });
          }
        } else {
          setIsMinting(false);
          const errorInfo = parseInterfaceError(demoCustomModuleW.interface, e);

          toast({
            title: "Error",
            description:
              typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
            variant: "destructive",
          });
        }
      }
    }
  }, [demoCustomModuleW, chainCorrect, refetch]);

  const _transfer = useCallback(
    async (target: ITransferTarget) => {
      if (contractW && account.address && tokenId) {
        const toastIns = toast({
          title: (<LightmLogo />) as unknown as string,
          description: "发送中...",
          duration: 0,
        });
        setIsTransferring(true);

        const _internalTransfer = async () => {
          if (account.address) {
            const tx = await (target.tokenId
              ? contractW.nestTransfer(target.address, tokenId, target.tokenId)
              : contractW["safeTransferFrom(address,address,uint256,bytes)"](
                  account.address,
                  target.address,
                  tokenId,
                  ""
                ));
            await tx.wait();

            toastIns.update({
              id: toastIns.id,
              title: "发送成功！",
              description:
                "将在10秒后获取最新数据，你也可以点击左上角刷新按钮，手动获取最新数据",
              duration: 3000,
            });

            setTimeout(() => {
              setIsTransferring(false);
              setOpenDialog(false);
              resetInputState();
              refetch();
            }, 10e3);
          }
        };

        try {
          await _internalTransfer();
        } catch (e: any) {
          if (e?.code === NETWORK_ERROR) {
            try {
              await chainCorrect();
              await _internalTransfer();
            } catch (e: any) {
              setIsTransferring(false);

              const errorInfo = parseInterfaceError(contractW.interface, e);

              toast({
                title: "Error",
                description:
                  typeof errorInfo === "string"
                    ? errorInfo
                    : errorInfo.join(""),
                variant: "destructive",
              });
            }
          } else {
            setIsTransferring(false);

            const errorInfo = parseInterfaceError(contractW.interface, e);

            toast({
              title: "Error",
              description:
                typeof errorInfo === "string" ? errorInfo : errorInfo.join(""),
              variant: "destructive",
            });
          }
        }
      }
    },
    [
      account.address,
      contractW,
      tokenId,
      chainCorrect,
      refetch,
      resetInputState,
    ]
  );

  const transfer = useCallback(async () => {
    if (preTransferTarget) {
      await _transfer(preTransferTarget);
    } else {
      if (!transferTargetTokenIdError) {
        await _transfer({
          address: transferTargetAddress,
          tokenId: transferTargetTokenId,
        });
      }
    }
  }, [
    _transfer,
    preTransferTarget,
    transferTargetAddress,
    transferTargetTokenId,
    transferTargetTokenIdError,
  ]);

  const idleSlots = useMemo(() => {
    return selectedAsset
      ? selectedAsset.partIds.filter(
          (id) => !toBeRenderedParts?.some((part) => part.id.eq(id))
        )
      : [];
  }, [selectedAsset, toBeRenderedParts]);

  const bag = useMemo(() => {
    return (
      <Sheet
        open={openSheet}
        onOpenChange={(_open) => {
          setOpenSheet(_open);

          if (!_open) {
            resetBagManagement();
          }
        }}
      >
        <SheetTrigger asChild>
          <Button>
            <Backpack />
          </Button>
        </SheetTrigger>
        <SheetContent position="top" size="lg">
          <TooltipProvider>
            <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              背包
            </h1>
            <div className="flex gap-2">
              {[...children, ...pendingChildren].map((child, i) => {
                const equippedPart = toBeRenderedParts?.find(
                  (part) =>
                    part.origin.contractAddress === child.contractAddress &&
                    (part.origin.tokenId as BigNumber).eq(child.tokenId)
                );

                const modifyPending = (type: boolean) => {
                  modifyPendingChildren(type, child);
                };

                const equip = (slotId: BigNumber, childAssetId: BigNumber) => {
                  modifyToBeRenderedParts("add", {
                    id: slotId,
                    origin: {
                      contractAddress: child.contractAddress,
                      tokenId: child.tokenId,
                      assetId: childAssetId,
                    },
                  });
                };

                const unequip = () => {
                  if (equippedPart) {
                    modifyToBeRenderedParts("remove", equippedPart.id);
                  }
                };

                return (
                  <div className="max-w-[128px]">
                    <ChildNFTRender
                      key={`${child.contractAddress}:${child.tokenId}`}
                      isPending={i >= children.length}
                      child={child}
                      equippedPart={equippedPart}
                      acceptOrReject={pendingChildrenManagement.get(child)}
                      isOwner={owned === true}
                      allowEquip={allowEquip}
                      catalogAddress={selectedAsset?.catalogAddress}
                      idleSlots={idleSlots}
                      slotNameMapping={slotNameMapping}
                      equip={equip}
                      unequip={unequip}
                      modifyPending={modifyPending}
                    />
                  </div>
                );
              })}
            </div>
            {equipmentChanges ? (
              <div className="mt-4 flex flex-col">
                <div className="my-2 flex gap-8">
                  {equipmentChanges.adds.length > 0 ? (
                    <div>
                      <span className="text-2xl font-extrabold">要装备的:</span>
                      <ScrollArea>
                        {equipmentChanges.adds.map((part) => {
                          const indexInChildren = children.findIndex(
                            (child) =>
                              child.contractAddress ===
                                part.origin.contractAddress &&
                              child.tokenId.eq(part.origin.tokenId as BigNumber)
                          );

                          return (
                            <div>
                              <span className="text-xl font-bold">
                                No.{indexInChildren + 1}{" "}
                                <span className="font-base text-base">at</span>{" "}
                                插槽{" "}
                                {slotResolver(
                                  part.id.toString(),
                                  slotNameMapping
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </ScrollArea>
                    </div>
                  ) : null}
                  {equipmentChanges.removes.length > 0 ? (
                    <div>
                      <span className="text-2xl font-extrabold">
                        要卸载的：
                      </span>
                      <ScrollArea>
                        {equipmentChanges.removes.map((part) => {
                          const indexInChildren = children.findIndex(
                            (child) =>
                              child.contractAddress ===
                                part.origin.contractAddress &&
                              child.tokenId.eq(part.origin.tokenId as BigNumber)
                          );

                          return (
                            <div>
                              <span className="text-xl font-bold">
                                No.{indexInChildren + 1}{" "}
                                <span className="font-base text-base">
                                  from
                                </span>{" "}
                                插槽{" "}
                                {slotResolver(
                                  part.id.toString(),
                                  slotNameMapping
                                )}
                              </span>
                            </div>
                          );
                        })}
                      </ScrollArea>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
            {pendingChildrenChanges ? (
              <div className="mt-4 flex flex-col">
                <div className="my-2 flex gap-8">
                  {pendingChildrenChanges.length > 0 ? (
                    <div>
                      <span className="text-2xl font-extrabold">
                        即将被确认的子NFT:
                      </span>
                      <ScrollArea>
                        {pendingChildrenChanges.map(
                          ([_child, acceptOrReject]) => {
                            return (
                              <div className="flex gap-2 text-xl font-bold">
                                {acceptOrReject ? <Check /> : <X />}
                                <span>
                                  {getEllipsis(_child.contractAddress)}
                                  {` #${_child.tokenId.toString()}`}
                                </span>
                              </div>
                            );
                          }
                        )}
                      </ScrollArea>
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
            {equipmentChanges || pendingChildrenChanges.length > 0 ? (
              <div className="flex max-w-sm gap-2">
                <Button
                  variant="outline"
                  disabled={isExcuting}
                  onClick={() => {
                    setOpenSheet(false);
                    resetBagManagement();
                  }}
                >
                  取消
                </Button>
                <Button
                  disabled={isExcuting}
                  onClick={confirmEquipAndChildrenManagement}
                >
                  {isExcuting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : null}
                  确认
                </Button>
              </div>
            ) : null}
          </TooltipProvider>
        </SheetContent>
      </Sheet>
    );
  }, [
    openSheet,
    children,
    idleSlots,
    equipmentChanges,
    toBeRenderedParts,
    pendingChildren,
    pendingChildrenManagement,
    pendingChildrenChanges,
    selectedAsset?.catalogAddress,
    allowEquip,
    slotNameMapping,
    owned,
    isExcuting,
    modifyPendingChildren,
    modifyToBeRenderedParts,
    resetBagManagement,
    confirmEquipAndChildrenManagement,
  ]);

  useEffect(() => {
    getCRAs();
  }, [getCRAs]);

  useEffect(() => {
    getToRenderedParts();
  }, [getToRenderedParts]);

  useEffect(() => {
    getChildren();
  }, [getChildren]);

  useEffect(() => {
    const eventListener = (event: any) => {
      const { currentSlide } = event;

      if (refreshTriggerSlides.includes(currentSlide)) {
        refresh();
      }
    };

    Reveal.on("slidechanged", eventListener);

    return () => {
      Reveal.off("slidechanged", eventListener);
    };
  }, [refresh, refreshTriggerSlides]);

  const displayedTargetAddress = preTransferTarget
    ? preTransferTarget.address
    : transferTargetAddress;
  const displayedTargetTokenId = (
    preTransferTarget?.tokenId
      ? preTransferTarget.tokenId
      : transferTargetTokenId
  )?.toString();

  const transferButton = (
    <Dialog
      open={openDialog}
      onOpenChange={(_open) => {
        setOpenDialog(_open);
        if (!_open) resetInputState();
      }}
    >
      <DialogTrigger asChild>
        <Button variant="default" className="text-xl">
          <Send />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-[425px] xl:max-w-xl">
        <DialogHeader>
          <DialogTitle>发送</DialogTitle>
          <DialogDescription>发送你的 NFT</DialogDescription>
          <blockquote className="mt-6 border-l-2 pl-2 italic">
            <DialogDescription>
              注意: 每个账户只能 mint 一个 NFT，当你发送后你将无法再次 mint
            </DialogDescription>
          </blockquote>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center gap-2">
            <Label htmlFor="targetAddress">目标地址</Label>
            <Input
              id="targetAddress"
              className="col-span-3"
              disabled={preTransferTarget !== undefined}
              value={displayedTargetAddress}
              onChange={(e) => {
                setTransferTargetAddress(e.target.value);
              }}
              onBlur={(e) => {
                setTransferTargetAddressError("");

                if (e.target.value && !isAddress(e.target.value)) {
                  setTransferTargetAddressError("Invalid Address");
                }
              }}
            />
            {transferTargetAddressError ? (
              <p className="text-red-500">{transferTargetAddressError}</p>
            ) : null}
          </div>
          <div className="grid items-center gap-2">
            <Label htmlFor="targetTokenId">
              目标 NFT ID (如果你想发送到某个 NFT，你需要填写具体的 NFT ID)
            </Label>
            <Input
              id="targetTokenId"
              className="col-span-3"
              disabled={preTransferTarget !== undefined}
              value={displayedTargetTokenId}
              onChange={(e) => {
                let _value;

                setTransferTargetTokenIdError("");
                if (e.target.value) {
                  try {
                    _value = BigNumber.from(e.target.value);
                    setTransferTargetTokenIdError("");
                  } catch (e) {
                    setTransferTargetTokenIdError("Invalid TokenID");
                  }
                }

                setTransferTargetTokenId(_value);
              }}
            />
            {transferTargetTokenIdError ? (
              <p className="text-red-500">{transferTargetTokenIdError}</p>
            ) : null}
          </div>
        </div>
        <DialogFooter>
          <Button
            disabled={
              isTransferring ||
              (preTransferTarget
                ? false
                : !transferTargetAddress ||
                  !!transferTargetTokenIdError ||
                  !!transferTargetAddressError)
            }
            onClick={transfer}
          >
            {isTransferring ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : null}
            发送
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );

  const refreshButton = (
    <Button className="text-xl" variant="ghost" onClick={refresh}>
      <RotateCw />
    </Button>
  );

  const assetSwitcher =
    assets.length > 1 ? (
      <div className="absolute flex gap-2 bottom-4 right-4 p-4 bg-gray-300 bg-opacity-70 hover:bg-opacity-100 transition rounded-2xl">
        {selectedAssetIndex > 0 ? (
          <ArrowLeft
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() => setSelectedAssetIndex(selectedAssetIndex - 1)}
          />
        ) : null}
        {selectedAssetIndex + 1 < assets.length ? (
          <ArrowRight
            width={48}
            height={48}
            className="cursor-pointer"
            onClick={() => setSelectedAssetIndex(selectedAssetIndex + 1)}
          />
        ) : null}
      </div>
    ) : null;

  const functionArea = (
    <div className="flex flex-col gap-2 absolute top-4 left-4 text-xl p-1 sm:p-2 bg-gray-300 bg-opacity-70 hover:bg-opacity-100 transition rounded-2xl">
      {refreshButton}
      {showTransfer && !needToMint && owned === true && transferButton}
      {showBag && !needToMint && owned === true && bag}
    </div>
  );

  const tokenIdText = (
    <div className="absolute bottom-4 left-4 text-2xl px-4 bg-gray-300 bg-opacity-70 hover:bg-opacity-100 transition rounded-2xl">
      {tokenId ? <p className="text-start">ID: #{tokenId.toString()}</p> : null}
      <p className="text-start text-sm">
        {!owned ? "该NFT被你持有的NFT所持有，或你已丢失所有权" : null}
      </p>
    </div>
  );

  const isLoading =
    isGettingCras || isGettingChildren || isGettingToBeRenderedParts;

  return (
    <div
      className={`${
        className ? `${className} ` : ""
      }relative aspect-square max-h-[56rem] max-w-[56rem] flex justify-center items-center bg-gray-200 bg-opacity-60 overflow-hidden rounded-xl`}
      style={style}
    >
      {tokenId === NFT_RENDERER_LOADING ? (
        <p>加载中...</p>
      ) : needToMint ? (
        <div className="p-8">
          {account.isConnected ? (
            <>
              <p>Let's become a magician 🧙‍♂️</p>
              <Button
                size="lg"
                className="text-xl sm:text-2xl"
                disabled={isMinting}
                onClick={mint}
              >
                {isMinting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : null}
                Mint
              </Button>
              {functionArea}
            </>
          ) : (
            <Web3Button />
          )}
        </div>
      ) : (
        <>
          {isLoading ? (
            <p className="w-96">加载中...</p>
          ) : (
            <MultiLayer2DRenderer
              resources={toBeRenderedResources}
              className={`max-w-full max-h-full border-4 border-black rounded-xl${
                !owned ? " blur-sm" : ""
              }`}
            />
          )}
          {functionArea}
          {tokenIdText}
          {assetSwitcher}
        </>
      )}
    </div>
  );
}
