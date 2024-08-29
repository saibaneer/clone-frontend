/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFallbackPriceOracle,
  IFallbackPriceOracleInterface,
} from "../../../src/interfaces/IFallbackPriceOracle";

const _abi = [
  {
    inputs: [],
    name: "BASE_CURRENCY",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BASE_CURRENCY_UNIT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
    ],
    name: "getAssetPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    name: "setAssetPrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFallbackPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IFallbackPriceOracleInterface {
    return new Interface(_abi) as IFallbackPriceOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IFallbackPriceOracle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IFallbackPriceOracle;
  }
}
