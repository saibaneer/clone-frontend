/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
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
} from "../../common";

export interface MockFallbackPriceOracleInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASE_CURRENCY"
      | "BASE_CURRENCY_UNIT"
      | "getAssetPrice"
      | "setAssetPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASE_CURRENCY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BASE_CURRENCY_UNIT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAssetPrice",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setAssetPrice",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY_UNIT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAssetPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAssetPrice",
    data: BytesLike
  ): Result;
}

export interface MockFallbackPriceOracle extends BaseContract {
  connect(runner?: ContractRunner | null): MockFallbackPriceOracle;
  waitForDeployment(): Promise<this>;

  interface: MockFallbackPriceOracleInterface;

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

  BASE_CURRENCY: TypedContractMethod<[], [string], "view">;

  BASE_CURRENCY_UNIT: TypedContractMethod<[], [bigint], "view">;

  getAssetPrice: TypedContractMethod<[asset: AddressLike], [bigint], "view">;

  setAssetPrice: TypedContractMethod<
    [asset: AddressLike, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASE_CURRENCY"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "BASE_CURRENCY_UNIT"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getAssetPrice"
  ): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "setAssetPrice"
  ): TypedContractMethod<
    [asset: AddressLike, price: BigNumberish],
    [void],
    "nonpayable"
  >;

  filters: {};
}
