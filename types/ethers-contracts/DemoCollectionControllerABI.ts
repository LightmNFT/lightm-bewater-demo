/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
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

export interface DemoCollectionControllerABIInterface extends utils.Interface {
  functions: {
    "mintAndAddAssetToToken(address,uint64,uint64)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "mintAndAddAssetToToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "mintAndAddAssetToToken",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "mintAndAddAssetToToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface DemoCollectionControllerABI extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DemoCollectionControllerABIInterface;

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
    mintAndAddAssetToToken(
      target: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      toBeReplacedId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  mintAndAddAssetToToken(
    target: PromiseOrValue<string>,
    assetId: PromiseOrValue<BigNumberish>,
    toBeReplacedId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    mintAndAddAssetToToken(
      target: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      toBeReplacedId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    mintAndAddAssetToToken(
      target: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      toBeReplacedId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    mintAndAddAssetToToken(
      target: PromiseOrValue<string>,
      assetId: PromiseOrValue<BigNumberish>,
      toBeReplacedId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}