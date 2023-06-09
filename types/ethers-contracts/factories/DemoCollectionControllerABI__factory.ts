/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  DemoCollectionControllerABI,
  DemoCollectionControllerABIInterface,
} from "../DemoCollectionControllerABI";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint64",
        name: "assetId",
        type: "uint64",
      },
      {
        internalType: "uint64",
        name: "toBeReplacedId",
        type: "uint64",
      },
    ],
    name: "mintAndAddAssetToToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class DemoCollectionControllerABI__factory {
  static readonly abi = _abi;
  static createInterface(): DemoCollectionControllerABIInterface {
    return new utils.Interface(_abi) as DemoCollectionControllerABIInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DemoCollectionControllerABI {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DemoCollectionControllerABI;
  }
}
