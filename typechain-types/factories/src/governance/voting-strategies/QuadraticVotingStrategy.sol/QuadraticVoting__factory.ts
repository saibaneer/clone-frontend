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
import type { NonPayableOverrides } from "../../../../../common";
import type {
  QuadraticVoting,
  QuadraticVotingInterface,
} from "../../../../../src/governance/voting-strategies/QuadraticVotingStrategy.sol/QuadraticVoting";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "voterPower",
        type: "uint256",
      },
    ],
    name: "calculateVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610161806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c806390ac3ccf14610030575b600080fd5b61004361003e3660046100cf565b610055565b60405190815260200160405180910390f35b60008160000361006757506000919050565b61007082610076565b92915050565b60008060026100868460016100e8565b6100909190610109565b90508291505b818110156100c9579050806002816100ae8186610109565b6100b891906100e8565b6100c29190610109565b9050610096565b50919050565b6000602082840312156100e157600080fd5b5035919050565b8082018082111561007057634e487b7160e01b600052601160045260246000fd5b60008261012657634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220e73af2ad89d4df4c65ea4e1ecad51e043f5515a4f99e14777e8c61cbd4260e6864736f6c63430008180033";

type QuadraticVotingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: QuadraticVotingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class QuadraticVoting__factory extends ContractFactory {
  constructor(...args: QuadraticVotingConstructorParams) {
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
      QuadraticVoting & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): QuadraticVoting__factory {
    return super.connect(runner) as QuadraticVoting__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuadraticVotingInterface {
    return new Interface(_abi) as QuadraticVotingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): QuadraticVoting {
    return new Contract(address, _abi, runner) as unknown as QuadraticVoting;
  }
}