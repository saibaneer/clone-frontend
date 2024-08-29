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
} from "../../../common";

export interface ProtocolTimelockControllerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CANCELLER_ROLE"
      | "DEFAULT_ADMIN_ROLE"
      | "EXECUTOR_ROLE"
      | "PROPOSER_ROLE"
      | "cancel"
      | "execute"
      | "executeBatch"
      | "getMinDelay"
      | "getOperationState"
      | "getRoleAdmin"
      | "getTimestamp"
      | "grantRole"
      | "hasRole"
      | "hashOperation"
      | "hashOperationBatch"
      | "isOperation"
      | "isOperationDone"
      | "isOperationPending"
      | "isOperationReady"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "renounceRole"
      | "revokeRole"
      | "schedule"
      | "scheduleBatch"
      | "supportsInterface"
      | "updateDelay"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "CallExecuted"
      | "CallSalt"
      | "CallScheduled"
      | "Cancelled"
      | "MinDelayChange"
      | "RoleAdminChanged"
      | "RoleGranted"
      | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CANCELLER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "EXECUTOR_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "PROPOSER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [AddressLike, BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOperationState",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOperation",
    values: [AddressLike, BigNumberish, BytesLike, BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOperationBatch",
    values: [AddressLike[], BigNumberish[], BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationDone",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationPending",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationReady",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish[],
      BigNumberish[],
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [AddressLike, AddressLike, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "schedule",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "scheduleBatch",
    values: [
      AddressLike[],
      BigNumberish[],
      BytesLike[],
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDelay",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "CANCELLER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "EXECUTOR_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROPOSER_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOperationState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "hashOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashOperationBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationDone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "scheduleBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDelay",
    data: BytesLike
  ): Result;
}

export namespace CallExecutedEvent {
  export type InputTuple = [
    id: BytesLike,
    index: BigNumberish,
    target: AddressLike,
    value: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    id: string,
    index: bigint,
    target: string,
    value: bigint,
    data: string
  ];
  export interface OutputObject {
    id: string;
    index: bigint;
    target: string;
    value: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CallSaltEvent {
  export type InputTuple = [id: BytesLike, salt: BytesLike];
  export type OutputTuple = [id: string, salt: string];
  export interface OutputObject {
    id: string;
    salt: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CallScheduledEvent {
  export type InputTuple = [
    id: BytesLike,
    index: BigNumberish,
    target: AddressLike,
    value: BigNumberish,
    data: BytesLike,
    predecessor: BytesLike,
    delay: BigNumberish
  ];
  export type OutputTuple = [
    id: string,
    index: bigint,
    target: string,
    value: bigint,
    data: string,
    predecessor: string,
    delay: bigint
  ];
  export interface OutputObject {
    id: string;
    index: bigint;
    target: string;
    value: bigint;
    data: string;
    predecessor: string;
    delay: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CancelledEvent {
  export type InputTuple = [id: BytesLike];
  export type OutputTuple = [id: string];
  export interface OutputObject {
    id: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MinDelayChangeEvent {
  export type InputTuple = [
    oldDuration: BigNumberish,
    newDuration: BigNumberish
  ];
  export type OutputTuple = [oldDuration: bigint, newDuration: bigint];
  export interface OutputObject {
    oldDuration: bigint;
    newDuration: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ProtocolTimelockController extends BaseContract {
  connect(runner?: ContractRunner | null): ProtocolTimelockController;
  waitForDeployment(): Promise<this>;

  interface: ProtocolTimelockControllerInterface;

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

  CANCELLER_ROLE: TypedContractMethod<[], [string], "view">;

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  EXECUTOR_ROLE: TypedContractMethod<[], [string], "view">;

  PROPOSER_ROLE: TypedContractMethod<[], [string], "view">;

  cancel: TypedContractMethod<[id: BytesLike], [void], "nonpayable">;

  execute: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      payload: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [void],
    "payable"
  >;

  executeBatch: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      payloads: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [void],
    "payable"
  >;

  getMinDelay: TypedContractMethod<[], [bigint], "view">;

  getOperationState: TypedContractMethod<[id: BytesLike], [bigint], "view">;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  getTimestamp: TypedContractMethod<[id: BytesLike], [bigint], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  hashOperation: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [string],
    "view"
  >;

  hashOperationBatch: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      payloads: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [string],
    "view"
  >;

  isOperation: TypedContractMethod<[id: BytesLike], [boolean], "view">;

  isOperationDone: TypedContractMethod<[id: BytesLike], [boolean], "view">;

  isOperationPending: TypedContractMethod<[id: BytesLike], [boolean], "view">;

  isOperationReady: TypedContractMethod<[id: BytesLike], [boolean], "view">;

  onERC1155BatchReceived: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC1155Received: TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;

  onERC721Received: TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  schedule: TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  scheduleBatch: TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      payloads: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  updateDelay: TypedContractMethod<
    [newDelay: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CANCELLER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "EXECUTOR_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "PROPOSER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cancel"
  ): TypedContractMethod<[id: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      payload: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "executeBatch"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      payloads: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getMinDelay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOperationState"
  ): TypedContractMethod<[id: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "getTimestamp"
  ): TypedContractMethod<[id: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashOperation"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "hashOperationBatch"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      payloads: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "isOperation"
  ): TypedContractMethod<[id: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isOperationDone"
  ): TypedContractMethod<[id: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isOperationPending"
  ): TypedContractMethod<[id: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isOperationReady"
  ): TypedContractMethod<[id: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "onERC1155BatchReceived"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish[],
      arg3: BigNumberish[],
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC1155Received"
  ): TypedContractMethod<
    [
      arg0: AddressLike,
      arg1: AddressLike,
      arg2: BigNumberish,
      arg3: BigNumberish,
      arg4: BytesLike
    ],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "onERC721Received"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: AddressLike, arg2: BigNumberish, arg3: BytesLike],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "schedule"
  ): TypedContractMethod<
    [
      target: AddressLike,
      value: BigNumberish,
      data: BytesLike,
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "scheduleBatch"
  ): TypedContractMethod<
    [
      targets: AddressLike[],
      values: BigNumberish[],
      payloads: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "updateDelay"
  ): TypedContractMethod<[newDelay: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "CallExecuted"
  ): TypedContractEvent<
    CallExecutedEvent.InputTuple,
    CallExecutedEvent.OutputTuple,
    CallExecutedEvent.OutputObject
  >;
  getEvent(
    key: "CallSalt"
  ): TypedContractEvent<
    CallSaltEvent.InputTuple,
    CallSaltEvent.OutputTuple,
    CallSaltEvent.OutputObject
  >;
  getEvent(
    key: "CallScheduled"
  ): TypedContractEvent<
    CallScheduledEvent.InputTuple,
    CallScheduledEvent.OutputTuple,
    CallScheduledEvent.OutputObject
  >;
  getEvent(
    key: "Cancelled"
  ): TypedContractEvent<
    CancelledEvent.InputTuple,
    CancelledEvent.OutputTuple,
    CancelledEvent.OutputObject
  >;
  getEvent(
    key: "MinDelayChange"
  ): TypedContractEvent<
    MinDelayChangeEvent.InputTuple,
    MinDelayChangeEvent.OutputTuple,
    MinDelayChangeEvent.OutputObject
  >;
  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "CallExecuted(bytes32,uint256,address,uint256,bytes)": TypedContractEvent<
      CallExecutedEvent.InputTuple,
      CallExecutedEvent.OutputTuple,
      CallExecutedEvent.OutputObject
    >;
    CallExecuted: TypedContractEvent<
      CallExecutedEvent.InputTuple,
      CallExecutedEvent.OutputTuple,
      CallExecutedEvent.OutputObject
    >;

    "CallSalt(bytes32,bytes32)": TypedContractEvent<
      CallSaltEvent.InputTuple,
      CallSaltEvent.OutputTuple,
      CallSaltEvent.OutputObject
    >;
    CallSalt: TypedContractEvent<
      CallSaltEvent.InputTuple,
      CallSaltEvent.OutputTuple,
      CallSaltEvent.OutputObject
    >;

    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": TypedContractEvent<
      CallScheduledEvent.InputTuple,
      CallScheduledEvent.OutputTuple,
      CallScheduledEvent.OutputObject
    >;
    CallScheduled: TypedContractEvent<
      CallScheduledEvent.InputTuple,
      CallScheduledEvent.OutputTuple,
      CallScheduledEvent.OutputObject
    >;

    "Cancelled(bytes32)": TypedContractEvent<
      CancelledEvent.InputTuple,
      CancelledEvent.OutputTuple,
      CancelledEvent.OutputObject
    >;
    Cancelled: TypedContractEvent<
      CancelledEvent.InputTuple,
      CancelledEvent.OutputTuple,
      CancelledEvent.OutputObject
    >;

    "MinDelayChange(uint256,uint256)": TypedContractEvent<
      MinDelayChangeEvent.InputTuple,
      MinDelayChangeEvent.OutputTuple,
      MinDelayChangeEvent.OutputObject
    >;
    MinDelayChange: TypedContractEvent<
      MinDelayChangeEvent.InputTuple,
      MinDelayChangeEvent.OutputTuple,
      MinDelayChangeEvent.OutputObject
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
