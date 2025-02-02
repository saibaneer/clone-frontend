/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IChainlinkAggregator,
  IChainlinkAggregatorInterface,
} from "../../../src/interfaces/IChainlinkAggregator";

const _abi = [
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IChainlinkAggregator__factory {
  static readonly abi = _abi;
  static createInterface(): IChainlinkAggregatorInterface {
    return new Interface(_abi) as IChainlinkAggregatorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IChainlinkAggregator {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IChainlinkAggregator;
  }
}
