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
import type { NonPayableOverrides } from "../../../../common";
import type {
  HarmonicVotingStrategy,
  HarmonicVotingStrategyInterface,
} from "../../../../src/governance/voting-strategies/HarmonicVotingStrategy";

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
  "0x608060405234801561001057600080fd5b50610105806100206000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806390ac3ccf14602d575b600080fd5b603c60383660046076565b604e565b60405190815260200160405180910390f35b600081600003605f57506000919050565b6068826001608e565b6070908360ae565b92915050565b600060208284031215608757600080fd5b5035919050565b80820180821115607057634e487b7160e01b600052601160045260246000fd5b60008260ca57634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220f8858ef1cd4ec404645760930d741ad78939a00ac08aac50d3404bcb5cb4aa2e64736f6c63430008180033";

type HarmonicVotingStrategyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HarmonicVotingStrategyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HarmonicVotingStrategy__factory extends ContractFactory {
  constructor(...args: HarmonicVotingStrategyConstructorParams) {
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
      HarmonicVotingStrategy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): HarmonicVotingStrategy__factory {
    return super.connect(runner) as HarmonicVotingStrategy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HarmonicVotingStrategyInterface {
    return new Interface(_abi) as HarmonicVotingStrategyInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): HarmonicVotingStrategy {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as HarmonicVotingStrategy;
  }
}
