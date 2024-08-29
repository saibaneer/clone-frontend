/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface ChainlinkBasedOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ETHUSDChainlinkAggregator"
      | "decimals"
      | "description"
      | "latestAnswer"
      | "latestTimestamp"
      | "underlyingUSDChainlinkAggregator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ETHUSDChainlinkAggregator",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestAnswer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "underlyingUSDChainlinkAggregator",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "ETHUSDChainlinkAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestAnswer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "underlyingUSDChainlinkAggregator",
    data: BytesLike
  ): Result;
}

export interface ChainlinkBasedOracle extends BaseContract {
  connect(runner?: ContractRunner | null): ChainlinkBasedOracle;
  waitForDeployment(): Promise<this>;

  interface: ChainlinkBasedOracleInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ETHUSDChainlinkAggregator: TypedContractMethod<[], [string], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  description: TypedContractMethod<[], [string], "view">;

  latestAnswer: TypedContractMethod<[], [bigint], "view">;

  latestTimestamp: TypedContractMethod<[], [bigint], "view">;

  underlyingUSDChainlinkAggregator: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ETHUSDChainlinkAggregator"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "latestAnswer"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "latestTimestamp"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "underlyingUSDChainlinkAggregator"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
