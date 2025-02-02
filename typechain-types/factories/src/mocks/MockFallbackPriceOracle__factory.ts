/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MockFallbackPriceOracle,
  MockFallbackPriceOracleInterface,
} from "../../../src/mocks/MockFallbackPriceOracle";

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

const _bytecode =
  "0x60c0604052670de0b6b3a764000060a05234801561001c57600080fd5b5060805160a0516101bd610040600039600060820152600060e501526101bd6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806351323f72146100515780638c89b64f1461007d578063b3596f07146100b7578063e19f4700146100e0575b600080fd5b61007b61005f36600461013b565b6001600160a01b03909116600090815260208190526040902055565b005b6100a47f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020015b60405180910390f35b6100a46100c5366004610165565b6001600160a01b031660009081526020819052604090205490565b6101077f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ae565b80356001600160a01b038116811461013657600080fd5b919050565b6000806040838503121561014e57600080fd5b6101578361011f565b946020939093013593505050565b60006020828403121561017757600080fd5b6101808261011f565b939250505056fea264697066735822122096f62a243b983e00dd9f5c1eca7e3f3d98436319f91334e76d9060c3a9c2ac1d64736f6c63430008180033";

type MockFallbackPriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockFallbackPriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockFallbackPriceOracle__factory extends ContractFactory {
  constructor(...args: MockFallbackPriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MockFallbackPriceOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): MockFallbackPriceOracle__factory {
    return super.connect(runner) as MockFallbackPriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockFallbackPriceOracleInterface {
    return new Interface(_abi) as MockFallbackPriceOracleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MockFallbackPriceOracle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MockFallbackPriceOracle;
  }
}
