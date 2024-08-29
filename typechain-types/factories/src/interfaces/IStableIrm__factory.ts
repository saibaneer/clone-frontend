/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IStableIrm,
  IStableIrmInterface,
} from "../../../src/interfaces/IStableIrm";

const _abi = [
  {
    inputs: [],
    name: "MAX_BORROW_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "MID_BORROW_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "MIN_BORROW_RATE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "uint128",
            name: "totalSupplyAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalSupplyShares",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowShares",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "lastUpdate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "fee",
            type: "uint128",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isAddLiquidityPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isAddCollateralPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isBorrowPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isWithdrawLiquidityPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isWithdrawCollateralPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isRepayPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isLiquidatePaused",
                type: "bool",
              },
            ],
            internalType: "struct PauseStatuses",
            name: "pauseStatuses",
            type: "tuple",
          },
        ],
        internalType: "struct Market",
        name: "market",
        type: "tuple",
      },
    ],
    name: "borrowRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "Id",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "borrowRateStored",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
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
        components: [
          {
            internalType: "uint128",
            name: "totalSupplyAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalSupplyShares",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowAssets",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "totalBorrowShares",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "lastUpdate",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "fee",
            type: "uint128",
          },
          {
            components: [
              {
                internalType: "bool",
                name: "isAddLiquidityPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isAddCollateralPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isBorrowPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isWithdrawLiquidityPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isWithdrawCollateralPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isRepayPaused",
                type: "bool",
              },
              {
                internalType: "bool",
                name: "isLiquidatePaused",
                type: "bool",
              },
            ],
            internalType: "struct PauseStatuses",
            name: "pauseStatuses",
            type: "tuple",
          },
        ],
        internalType: "struct Market",
        name: "market",
        type: "tuple",
      },
    ],
    name: "borrowRateView",
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

export class IStableIrm__factory {
  static readonly abi = _abi;
  static createInterface(): IStableIrmInterface {
    return new Interface(_abi) as IStableIrmInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IStableIrm {
    return new Contract(address, _abi, runner) as unknown as IStableIrm;
  }
}
