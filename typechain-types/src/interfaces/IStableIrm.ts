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

export type MarketParamsStruct = {
  loanToken: AddressLike;
  collateralToken: AddressLike;
  riskTier: BigNumberish;
  lltv: BigNumberish;
  irm: AddressLike;
};

export type MarketParamsStructOutput = [
  loanToken: string,
  collateralToken: string,
  riskTier: bigint,
  lltv: bigint,
  irm: string
] & {
  loanToken: string;
  collateralToken: string;
  riskTier: bigint;
  lltv: bigint;
  irm: string;
};

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

export type MarketStruct = {
  totalSupplyAssets: BigNumberish;
  totalSupplyShares: BigNumberish;
  totalBorrowAssets: BigNumberish;
  totalBorrowShares: BigNumberish;
  lastUpdate: BigNumberish;
  fee: BigNumberish;
  pauseStatuses: PauseStatusesStruct;
};

export type MarketStructOutput = [
  totalSupplyAssets: bigint,
  totalSupplyShares: bigint,
  totalBorrowAssets: bigint,
  totalBorrowShares: bigint,
  lastUpdate: bigint,
  fee: bigint,
  pauseStatuses: PauseStatusesStructOutput
] & {
  totalSupplyAssets: bigint;
  totalSupplyShares: bigint;
  totalBorrowAssets: bigint;
  totalBorrowShares: bigint;
  lastUpdate: bigint;
  fee: bigint;
  pauseStatuses: PauseStatusesStructOutput;
};

export interface IStableIrmInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MAX_BORROW_RATE"
      | "MID_BORROW_RATE"
      | "MIN_BORROW_RATE"
      | "borrowRate"
      | "borrowRateStored"
      | "borrowRateView"
      | "setBorrowRate"
      | "setMidBorrowRateThreshold"
      | "setMinBorrowRateThreshold"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "MAX_BORROW_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MID_BORROW_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MIN_BORROW_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRate",
    values: [MarketParamsStruct, MarketStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRateStored",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowRateView",
    values: [MarketParamsStruct, MarketStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setBorrowRate",
    values: [MarketParamsStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMidBorrowRateThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setMinBorrowRateThreshold",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_BORROW_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MID_BORROW_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "MIN_BORROW_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowRate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "borrowRateStored",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "borrowRateView",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMidBorrowRateThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setMinBorrowRateThreshold",
    data: BytesLike
  ): Result;
}

export interface IStableIrm extends BaseContract {
  connect(runner?: ContractRunner | null): IStableIrm;
  waitForDeployment(): Promise<this>;

  interface: IStableIrmInterface;

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

  MAX_BORROW_RATE: TypedContractMethod<[], [bigint], "nonpayable">;

  MID_BORROW_RATE: TypedContractMethod<[], [bigint], "nonpayable">;

  MIN_BORROW_RATE: TypedContractMethod<[], [bigint], "nonpayable">;

  borrowRate: TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "nonpayable"
  >;

  borrowRateStored: TypedContractMethod<
    [id: BytesLike],
    [bigint],
    "nonpayable"
  >;

  borrowRateView: TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "view"
  >;

  setBorrowRate: TypedContractMethod<
    [marketParams: MarketParamsStruct, newBorrowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMidBorrowRateThreshold: TypedContractMethod<
    [newBorrowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  setMinBorrowRateThreshold: TypedContractMethod<
    [newBorrowRate: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MAX_BORROW_RATE"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "MID_BORROW_RATE"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "MIN_BORROW_RATE"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "borrowRate"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "borrowRateStored"
  ): TypedContractMethod<[id: BytesLike], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "borrowRateView"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, market: MarketStruct],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "setBorrowRate"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, newBorrowRate: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setMidBorrowRateThreshold"
  ): TypedContractMethod<[newBorrowRate: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMinBorrowRateThreshold"
  ): TypedContractMethod<[newBorrowRate: BigNumberish], [void], "nonpayable">;

  filters: {};
}
