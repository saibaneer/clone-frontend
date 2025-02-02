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
} from "../../../common";

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

export interface ISpathaGettersInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "getCollateralPrice"
      | "getExpectedBorrowAssets"
      | "getExpectedMarketBalances"
      | "getExpectedSupplyAssets"
      | "getExpectedTotalBorrowAssets"
      | "getExpectedTotalSupplyAssets"
      | "getExpectedTotalSupplyShares"
      | "getLltvBounds"
      | "getMarketBalances"
      | "getMarketIdWithMarketParams"
      | "getMarketParams"
      | "getMarketsCreated"
      | "getPosition"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getCollateralPrice",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpectedBorrowAssets",
    values: [MarketParamsStruct, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpectedMarketBalances",
    values: [MarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpectedSupplyAssets",
    values: [MarketParamsStruct, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpectedTotalBorrowAssets",
    values: [MarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpectedTotalSupplyAssets",
    values: [MarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getExpectedTotalSupplyShares",
    values: [MarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getLltvBounds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketBalances",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketIdWithMarketParams",
    values: [MarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketParams",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMarketsCreated",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPosition",
    values: [BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCollateralPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedBorrowAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedMarketBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedSupplyAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedTotalBorrowAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedTotalSupplyAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExpectedTotalSupplyShares",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLltvBounds",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketIdWithMarketParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMarketsCreated",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPosition",
    data: BytesLike
  ): Result;
}

export interface ISpathaGetters extends BaseContract {
  connect(runner?: ContractRunner | null): ISpathaGetters;
  waitForDeployment(): Promise<this>;

  interface: ISpathaGettersInterface;

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

  getCollateralPrice: TypedContractMethod<
    [collateralToken: AddressLike, loanToken: AddressLike],
    [bigint],
    "view"
  >;

  getExpectedBorrowAssets: TypedContractMethod<
    [marketParams: MarketParamsStruct, user: AddressLike],
    [bigint],
    "view"
  >;

  getExpectedMarketBalances: TypedContractMethod<
    [marketParams: MarketParamsStruct],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;

  getExpectedSupplyAssets: TypedContractMethod<
    [marketParams: MarketParamsStruct, user: AddressLike],
    [bigint],
    "view"
  >;

  getExpectedTotalBorrowAssets: TypedContractMethod<
    [marketParams: MarketParamsStruct],
    [bigint],
    "view"
  >;

  getExpectedTotalSupplyAssets: TypedContractMethod<
    [marketParams: MarketParamsStruct],
    [bigint],
    "view"
  >;

  getExpectedTotalSupplyShares: TypedContractMethod<
    [marketParams: MarketParamsStruct],
    [bigint],
    "view"
  >;

  getLltvBounds: TypedContractMethod<
    [riskTier: BigNumberish],
    [[bigint, bigint] & { min: bigint; max: bigint }],
    "view"
  >;

  getMarketBalances: TypedContractMethod<
    [id: BytesLike],
    [MarketStructOutput],
    "view"
  >;

  getMarketIdWithMarketParams: TypedContractMethod<
    [marketParams: MarketParamsStruct],
    [string],
    "view"
  >;

  getMarketParams: TypedContractMethod<
    [id: BytesLike],
    [MarketParamsStructOutput],
    "view"
  >;

  getMarketsCreated: TypedContractMethod<[], [string[]], "view">;

  getPosition: TypedContractMethod<
    [id: BytesLike, account: AddressLike],
    [
      [bigint, bigint, bigint] & {
        supplyShares: bigint;
        borrowShares: bigint;
        collateral: bigint;
      }
    ],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "getCollateralPrice"
  ): TypedContractMethod<
    [collateralToken: AddressLike, loanToken: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getExpectedBorrowAssets"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, user: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getExpectedMarketBalances"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct],
    [[bigint, bigint, bigint, bigint]],
    "view"
  >;
  getFunction(
    nameOrSignature: "getExpectedSupplyAssets"
  ): TypedContractMethod<
    [marketParams: MarketParamsStruct, user: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getExpectedTotalBorrowAssets"
  ): TypedContractMethod<[marketParams: MarketParamsStruct], [bigint], "view">;
  getFunction(
    nameOrSignature: "getExpectedTotalSupplyAssets"
  ): TypedContractMethod<[marketParams: MarketParamsStruct], [bigint], "view">;
  getFunction(
    nameOrSignature: "getExpectedTotalSupplyShares"
  ): TypedContractMethod<[marketParams: MarketParamsStruct], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLltvBounds"
  ): TypedContractMethod<
    [riskTier: BigNumberish],
    [[bigint, bigint] & { min: bigint; max: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "getMarketBalances"
  ): TypedContractMethod<[id: BytesLike], [MarketStructOutput], "view">;
  getFunction(
    nameOrSignature: "getMarketIdWithMarketParams"
  ): TypedContractMethod<[marketParams: MarketParamsStruct], [string], "view">;
  getFunction(
    nameOrSignature: "getMarketParams"
  ): TypedContractMethod<[id: BytesLike], [MarketParamsStructOutput], "view">;
  getFunction(
    nameOrSignature: "getMarketsCreated"
  ): TypedContractMethod<[], [string[]], "view">;
  getFunction(
    nameOrSignature: "getPosition"
  ): TypedContractMethod<
    [id: BytesLike, account: AddressLike],
    [
      [bigint, bigint, bigint] & {
        supplyShares: bigint;
        borrowShares: bigint;
        collateral: bigint;
      }
    ],
    "view"
  >;

  filters: {};
}
