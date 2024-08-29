/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IStableIRM,
  IStableIRMInterface,
} from "../../../src/SpathaSetters.sol/IStableIRM";

const _abi = [
  {
    inputs: [],
    name: "MAX_BORROW_RATE",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MID_BORROW_RATE",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_BORROW_RATE",
    outputs: [],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "loanToken",
            type: "address",
          },
          {
            internalType: "address",
            name: "collateralToken",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "riskTier",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "lltv",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "irm",
            type: "address",
          },
        ],
        internalType: "struct MarketParams",
        name: "marketParams",
        type: "tuple",
      },
      {
        internalType: "uint256",
        name: "newBorrowRate",
        type: "uint256",
      },
    ],
    name: "setBorrowRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newBorrowRate",
        type: "uint256",
      },
    ],
    name: "setMidBorrowRateThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newBorrowRate",
        type: "uint256",
      },
    ],
    name: "setMinBorrowRateThreshold",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IStableIRM__factory {
  static readonly abi = _abi;
  static createInterface(): IStableIRMInterface {
    return new Interface(_abi) as IStableIRMInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IStableIRM {
    return new Contract(address, _abi, runner) as unknown as IStableIRM;
  }
}
