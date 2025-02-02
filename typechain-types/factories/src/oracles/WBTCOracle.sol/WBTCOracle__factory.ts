/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  WBTCOracle,
  WBTCOracleInterface,
} from "../../../../src/oracles/WBTCOracle.sol/WBTCOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_WBTCBTCChainlinkAggregator",
        type: "address",
      },
      {
        internalType: "address",
        name: "_BTCETHChainlinkAggregator",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "BTCETHChainlinkAggregator",
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
    name: "WBTCBTCChainlinkAggregator",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "latestAnswer",
    outputs: [
      {
        internalType: "int256",
        name: "answer",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "latestTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60c060405234801561001057600080fd5b506040516104f43803806104f483398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a0516104266100ce60003960008181606c01526101b601526000818161010901528181610130015261027b01526104266000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806317a71c6014610067578063313ce567146100ab57806350d25bcd146100ba5780637284e416146100d05780638205bf6a146100fc578063bbf5eb5d14610104575b600080fd5b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020015b60405180910390f35b604051601281526020016100a2565b6100c261012b565b6040519081526020016100a2565b604080518082018252600a8152690ae84a886405e408aa8960b31b602082015290516100a29190610300565b6100c2610277565b61008e7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561018c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906101b0919061034f565b905060007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610212573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610236919061034f565b9050600082131580610249575060008113155b156102575760009250505090565b6305f5e100610266828461037e565b61027091906103b4565b9250505090565b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316638205bf6a6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156102d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102fb919061034f565b905090565b60006020808352835180602085015260005b8181101561032e57858101830151858201604001528201610312565b506000604082860101526040601f19601f8301168501019250505092915050565b60006020828403121561036157600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b80820260008212600160ff1b8414161561039a5761039a610368565b81810583148215176103ae576103ae610368565b92915050565b6000826103d157634e487b7160e01b600052601260045260246000fd5b600160ff1b8214600019841416156103eb576103eb610368565b50059056fea26469706673582212209cc9ea054130f09865aad490bc4efd9521078c70b7d4c9e84968259c4d998ae064736f6c63430008180033";

type WBTCOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WBTCOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WBTCOracle__factory extends ContractFactory {
  constructor(...args: WBTCOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _WBTCBTCChainlinkAggregator: AddressLike,
    _BTCETHChainlinkAggregator: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _WBTCBTCChainlinkAggregator,
      _BTCETHChainlinkAggregator,
      overrides || {}
    );
  }
  override deploy(
    _WBTCBTCChainlinkAggregator: AddressLike,
    _BTCETHChainlinkAggregator: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      _WBTCBTCChainlinkAggregator,
      _BTCETHChainlinkAggregator,
      overrides || {}
    ) as Promise<
      WBTCOracle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): WBTCOracle__factory {
    return super.connect(runner) as WBTCOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WBTCOracleInterface {
    return new Interface(_abi) as WBTCOracleInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): WBTCOracle {
    return new Contract(address, _abi, runner) as unknown as WBTCOracle;
  }
}
