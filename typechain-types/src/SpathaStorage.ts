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
} from "../common";

export type PauseStatusesStruct = {
  isAddLiquidityPaused: boolean;
  isAddCollateralPaused: boolean;
  isBorrowPaused: boolean;
  isWithdrawLiquidityPaused: boolean;
  isWithdrawCollateralPaused: boolean;
  isRepayPaused: boolean;
  isLiquidatePaused: boolean;
};

export type PauseStatusesStructOutput = [
  isAddLiquidityPaused: boolean,
  isAddCollateralPaused: boolean,
  isBorrowPaused: boolean,
  isWithdrawLiquidityPaused: boolean,
  isWithdrawCollateralPaused: boolean,
  isRepayPaused: boolean,
  isLiquidatePaused: boolean
] & {
  isAddLiquidityPaused: boolean;
  isAddCollateralPaused: boolean;
  isBorrowPaused: boolean;
  isWithdrawLiquidityPaused: boolean;
  isWithdrawCollateralPaused: boolean;
  isRepayPaused: boolean;
  isLiquidatePaused: boolean;
};

export interface SpathaStorageInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DOMAIN_SEPARATOR"
      | "feeRecipient"
      | "fees"
      | "idToMarketParams"
      | "irmAddressProvider"
      | "isApproved"
      | "market"
      | "marketGovernor"
      | "nonce"
      | "position"
      | "priceOracle"
      | "protocolGovernor"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "feeRecipient",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "fees", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "idToMarketParams",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "irmAddressProvider",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isApproved",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "market", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "marketGovernor",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nonce", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "position",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "priceOracle",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "protocolGovernor",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "feeRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fees", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "idToMarketParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "irmAddressProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isApproved", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "market", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "marketGovernor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nonce", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "position", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceOracle",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "protocolGovernor",
    data: BytesLike
  ): Result;
}

export interface SpathaStorage extends BaseContract {
  connect(runner?: ContractRunner | null): SpathaStorage;
  waitForDeployment(): Promise<this>;

  interface: SpathaStorageInterface;

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

  DOMAIN_SEPARATOR: TypedContractMethod<[], [string], "view">;

  feeRecipient: TypedContractMethod<[], [string], "view">;

  fees: TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;

  idToMarketParams: TypedContractMethod<
    [arg0: BytesLike],
    [
      [string, string, bigint, bigint, string] & {
        loanToken: string;
        collateralToken: string;
        riskTier: bigint;
        lltv: bigint;
        irm: string;
      }
    ],
    "view"
  >;

  irmAddressProvider: TypedContractMethod<
    [arg0: BigNumberish],
    [string],
    "view"
  >;

  isApproved: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [boolean],
    "view"
  >;

  market: TypedContractMethod<
    [arg0: BytesLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        PauseStatusesStructOutput
      ] & {
        totalSupplyAssets: bigint;
        totalSupplyShares: bigint;
        totalBorrowAssets: bigint;
        totalBorrowShares: bigint;
        lastUpdate: bigint;
        fee: bigint;
        pauseStatuses: PauseStatusesStructOutput;
      }
    ],
    "view"
  >;

  marketGovernor: TypedContractMethod<[], [string], "view">;

  nonce: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  position: TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [
      [bigint, bigint, bigint] & {
        supplyShares: bigint;
        borrowShares: bigint;
        collateral: bigint;
      }
    ],
    "view"
  >;

  priceOracle: TypedContractMethod<[], [string], "view">;

  protocolGovernor: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DOMAIN_SEPARATOR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "feeRecipient"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "fees"
  ): TypedContractMethod<[arg0: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "idToMarketParams"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [string, string, bigint, bigint, string] & {
        loanToken: string;
        collateralToken: string;
        riskTier: bigint;
        lltv: bigint;
        irm: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "irmAddressProvider"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "isApproved"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "market"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        bigint,
        PauseStatusesStructOutput
      ] & {
        totalSupplyAssets: bigint;
        totalSupplyShares: bigint;
        totalBorrowAssets: bigint;
        totalBorrowShares: bigint;
        lastUpdate: bigint;
        fee: bigint;
        pauseStatuses: PauseStatusesStructOutput;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "marketGovernor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nonce"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "position"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [
      [bigint, bigint, bigint] & {
        supplyShares: bigint;
        borrowShares: bigint;
        collateral: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "priceOracle"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "protocolGovernor"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}