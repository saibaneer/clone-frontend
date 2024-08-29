/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPriceOracle,
  IPriceOracleInterface,
} from "../../../src/interfaces/IPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "collateralToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "loanToken",
        type: "address",
      },
    ],
    name: "price",
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
] as const;

export class IPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): IPriceOracleInterface {
    return new Interface(_abi) as IPriceOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPriceOracle {
    return new Contract(address, _abi, runner) as unknown as IPriceOracle;
  }
}