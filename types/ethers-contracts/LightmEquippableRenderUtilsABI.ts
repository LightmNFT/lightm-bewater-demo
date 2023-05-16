/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace LightmEquippableRenderUtils {
  export type ActiveCatalogRelatedAssetStruct = {
    id: PromiseOrValue<BigNumberish>;
    priority: PromiseOrValue<BigNumberish>;
    catalogAddress: PromiseOrValue<string>;
    targetSlotId: PromiseOrValue<BigNumberish>;
    targetCatalogAddress: PromiseOrValue<string>;
    partIds: PromiseOrValue<BigNumberish>[];
    metadataURI: PromiseOrValue<string>;
  };

  export type ActiveCatalogRelatedAssetStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber[],
    string
  ] & {
    id: BigNumber;
    priority: BigNumber;
    catalogAddress: string;
    targetSlotId: BigNumber;
    targetCatalogAddress: string;
    partIds: BigNumber[];
    metadataURI: string;
  };

  export type PendingCatalogRelatedAssetStruct = {
    id: PromiseOrValue<BigNumberish>;
    toBeReplacedId: PromiseOrValue<BigNumberish>;
    catalogAddress: PromiseOrValue<string>;
    targetSlotId: PromiseOrValue<BigNumberish>;
    targetCatalogAddress: PromiseOrValue<string>;
    partIds: PromiseOrValue<BigNumberish>[];
    metadataURI: PromiseOrValue<string>;
  };

  export type PendingCatalogRelatedAssetStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    BigNumber[],
    string
  ] & {
    id: BigNumber;
    toBeReplacedId: BigNumber;
    catalogAddress: string;
    targetSlotId: BigNumber;
    targetCatalogAddress: string;
    partIds: BigNumber[];
    metadataURI: string;
  };

  export type OriginStruct = {
    contractAddress: PromiseOrValue<string>;
    tokenId: PromiseOrValue<BigNumberish>;
    assetId: PromiseOrValue<BigNumberish>;
  };

  export type OriginStructOutput = [string, BigNumber, BigNumber] & {
    contractAddress: string;
    tokenId: BigNumber;
    assetId: BigNumber;
  };

  export type ToBeRenderedPartStruct = {
    id: PromiseOrValue<BigNumberish>;
    zIndex: PromiseOrValue<BigNumberish>;
    childAssetCatalogAddress: PromiseOrValue<string>;
    metadataURI: PromiseOrValue<string>;
    origin: LightmEquippableRenderUtils.OriginStruct;
  };

  export type ToBeRenderedPartStructOutput = [
    BigNumber,
    number,
    string,
    string,
    LightmEquippableRenderUtils.OriginStructOutput
  ] & {
    id: BigNumber;
    zIndex: number;
    childAssetCatalogAddress: string;
    metadataURI: string;
    origin: LightmEquippableRenderUtils.OriginStructOutput;
  };
}

export interface LightmEquippableRenderUtilsABIInterface
  extends utils.Interface {
  functions: {
    "getActiveCatalogRelatedAssets(address,uint256)": FunctionFragment;
    "getPendingCatalogRelatedAssets(address,uint256)": FunctionFragment;
    "getToBeRenderedParts(address,uint256,uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getActiveCatalogRelatedAssets"
      | "getPendingCatalogRelatedAssets"
      | "getToBeRenderedParts"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getActiveCatalogRelatedAssets",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getPendingCatalogRelatedAssets",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getToBeRenderedParts",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "getActiveCatalogRelatedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPendingCatalogRelatedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getToBeRenderedParts",
    data: BytesLike
  ): Result;

  events: {};
}

export interface LightmEquippableRenderUtilsABI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LightmEquippableRenderUtilsABIInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getActiveCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput[]]
    >;

    getPendingCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [LightmEquippableRenderUtils.PendingCatalogRelatedAssetStructOutput[]]
    >;

    getToBeRenderedParts(
      targetContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[LightmEquippableRenderUtils.ToBeRenderedPartStructOutput[]]>;
  };

  getActiveCatalogRelatedAssets(
    target: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput[]
  >;

  getPendingCatalogRelatedAssets(
    target: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    LightmEquippableRenderUtils.PendingCatalogRelatedAssetStructOutput[]
  >;

  getToBeRenderedParts(
    targetContract: PromiseOrValue<string>,
    tokenId: PromiseOrValue<BigNumberish>,
    catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<LightmEquippableRenderUtils.ToBeRenderedPartStructOutput[]>;

  callStatic: {
    getActiveCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      LightmEquippableRenderUtils.ActiveCatalogRelatedAssetStructOutput[]
    >;

    getPendingCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      LightmEquippableRenderUtils.PendingCatalogRelatedAssetStructOutput[]
    >;

    getToBeRenderedParts(
      targetContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<LightmEquippableRenderUtils.ToBeRenderedPartStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getActiveCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPendingCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getToBeRenderedParts(
      targetContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getActiveCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPendingCatalogRelatedAssets(
      target: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getToBeRenderedParts(
      targetContract: PromiseOrValue<string>,
      tokenId: PromiseOrValue<BigNumberish>,
      catalogRelatedAssetId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}