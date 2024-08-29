/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface AuthInterface extends Interface {
  getFunction(
    nameOrSignature: "canCall" | "owner" | "setOwner"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "OwnerUpdated"): EventFragment;

  encodeFunctionData(
    functionFragment: "canCall",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "canCall", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
}

export namespace OwnerUpdatedEvent {
  export type InputTuple = [user: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [user: string, newOwner: string];
  export interface OutputObject {
    user: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Auth extends BaseContract {
  connect(runner?: ContractRunner | null): Auth;
  waitForDeployment(): Promise<this>;

  interface: AuthInterface;

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

  canCall: TypedContractMethod<
    [user: AddressLike, functionSig: BytesLike],
    [boolean],
    "view"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  setOwner: TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "canCall"
  ): TypedContractMethod<
    [user: AddressLike, functionSig: BytesLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "OwnerUpdated"
  ): TypedContractEvent<
    OwnerUpdatedEvent.InputTuple,
    OwnerUpdatedEvent.OutputTuple,
    OwnerUpdatedEvent.OutputObject
  >;

  filters: {
    "OwnerUpdated(address,address)": TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;
    OwnerUpdated: TypedContractEvent<
      OwnerUpdatedEvent.InputTuple,
      OwnerUpdatedEvent.OutputTuple,
      OwnerUpdatedEvent.OutputObject
    >;
  };
}