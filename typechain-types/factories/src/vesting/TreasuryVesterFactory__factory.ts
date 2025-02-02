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
import type { NonPayableOverrides } from "../../../common";
import type {
  TreasuryVesterFactory,
  TreasuryVesterFactoryInterface,
} from "../../../src/vesting/TreasuryVesterFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vestingToken_",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasury_",
        type: "address",
      },
      {
        internalType: "address",
        name: "treasuryVesterImplementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1167FailedCreateClone",
    type: "error",
  },
  {
    inputs: [],
    name: "Error_Insufficient_Balance_For_VestingAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "Error_Unauthorised_Caller",
    type: "error",
  },
  {
    inputs: [],
    name: "Error_Vesting_Contract_Already_Exists",
    type: "error",
  },
  {
    inputs: [],
    name: "Error_Zero_Address",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "newTreasury",
        type: "address",
      },
    ],
    name: "LogTreasuryUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "vestingContract",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "LogVestingContractCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vestingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingBegin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingCliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingEnd",
        type: "uint256",
      },
    ],
    name: "createVestingContract",
    outputs: [
      {
        internalType: "address",
        name: "recipient_",
        type: "address",
      },
      {
        internalType: "address",
        name: "vestingContract_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getVestingContract",
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
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "getVestingContracts",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "vestingAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingBegin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingCliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vestingEnd",
        type: "uint256",
      },
    ],
    name: "hashVestingData",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "treasury",
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
    inputs: [
      {
        internalType: "address",
        name: "newTreasury",
        type: "address",
      },
    ],
    name: "updateTreasury",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "vestingContracts",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "vestingData",
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
    name: "vestingLogic",
    outputs: [
      {
        internalType: "contract TreasuryVester",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620010bb380380620010bb83398101604081905262000034916200018f565b600180546001600160a01b038086166001600160a01b031992831617909255600280548584169216821790559082166080526200007490600090620000c3565b50620000906000805160206200109b83398151915233620000c3565b50600254620000b9906000805160206200109b833981519152906001600160a01b0316620000c3565b50505050620001d9565b6000828152602081815260408083206001600160a01b038516845290915281205460ff1662000168576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556200011f3390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45060016200016c565b5060005b92915050565b80516001600160a01b03811681146200018a57600080fd5b919050565b600080600060608486031215620001a557600080fd5b620001b08462000172565b9250620001c06020850162000172565b9150620001d06040850162000172565b90509250925092565b608051610e9f620001fc60003960008181610244015261076a0152610e9f6000f3fe608060405234801561001057600080fd5b50600436106100f15760003560e01c806301ffc9a7146100f657806319d152fa1461011e578063248a9ca31461013e5780632e1a7d4d1461015f5780632f2ff15d1461017457806336568abe1461018757806355bfc8b21461019a57806361d027b3146101ad57806375b238fc146101c05780637f51bb1f146101d557806391d14854146101e857806393e8e236146101fb578063a217fddf14610224578063a312b47a1461022c578063c0cad24e1461023f578063d547741f14610266578063dd02a3a714610279578063f2becf17146102b2578063f67eb5b9146102c5575b600080fd5b610109610104366004610c42565b6102e5565b60405190151581526020015b60405180910390f35b600154610131906001600160a01b031681565b6040516101159190610c6c565b61015161014c366004610c80565b61031c565b604051908152602001610115565b61017261016d366004610c80565b610331565b005b610172610182366004610cb0565b6103e3565b610172610195366004610cb0565b610405565b6101316101a8366004610cdc565b61043d565b600254610131906001600160a01b031681565b610151600080516020610e4a83398151915281565b6101726101e3366004610d06565b610483565b6101096101f6366004610cb0565b610536565b610131610209366004610c80565b6004602052600090815260409020546001600160a01b031681565b610151600081565b61015161023a366004610d21565b61055f565b6101317f000000000000000000000000000000000000000000000000000000000000000081565b610172610274366004610cb0565b6105b4565b61028c610287366004610d21565b6105d0565b604080516001600160a01b03948516815293909216602084015290820152606001610115565b6101316102c0366004610cdc565b6108ab565b6102d86102d3366004610d06565b6108e3565b6040516101159190610d63565b60006001600160e01b03198216637965db0b60e01b148061031657506301ffc9a760e01b6001600160e01b03198316145b92915050565b60009081526020819052604090206001015490565b610349600080516020610e4a83398151915233610536565b61036657604051635b4e91ab60e01b815260040160405180910390fd5b60015460025460405163a9059cbb60e01b81526001600160a01b039283169263a9059cbb9261039c929116908590600401610db0565b6020604051808303816000875af11580156103bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103df9190610dc9565b5050565b6103ec8261031c565b6103f581610959565b6103ff8383610966565b50505050565b6001600160a01b038116331461042e5760405163334bd91960e11b815260040160405180910390fd5b61043882826109f8565b505050565b6001600160a01b038216600090815260036020526040812080548390811061046757610467610deb565b6000918252602090912001546001600160a01b03169392505050565b61049b600080516020610e4a83398151915233610536565b6104b857604051635b4e91ab60e01b815260040160405180910390fd5b6001600160a01b0381166104df57604051638a448d5360e01b815260040160405180910390fd5b600280546001600160a01b0319166001600160a01b0383169081179091556040517f3dd9cf5231a15478b21a0795be3cb2939e6a5e1e5ab86c73983f4f8948a0f44b9161052b91610c6c565b60405180910390a150565b6000918252602082815260408084206001600160a01b0393909316845291905290205460ff1690565b604080516001600160a01b0387166020820152908101859052606081018490526080810183905260a0810182905260009060c00160405160208183030381529060405280519060200120905095945050505050565b6105bd8261031c565b6105c681610959565b6103ff83836109f8565b60008060006105ed600080516020610e4a83398151915233610536565b61060a57604051635b4e91ab60e01b815260040160405180910390fd5b6000610619898989898961055f565b6000818152600460205260409020549091506001600160a01b03161561065257604051633dff34fd60e01b815260040160405180910390fd5b6001546040516370a0823160e01b815289916001600160a01b0316906370a0823190610682903090600401610c6c565b602060405180830381865afa15801561069f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c39190610e01565b10156106e257604051630e36fccb60e01b815260040160405180910390fd5b600154604080516001600160a01b0392831660248201528b831660448201819052606482018c9052608482018b905260a482018a905260c48083018a90528351808403909101815260e49092018352602080830180516001600160e01b03166386489ba960e01b17905260009182526003905291909120548b96509350906107959061078f907f000000000000000000000000000000000000000000000000000000000000000016610a63565b82610ad5565b600083815260046020818152604080842080546001600160a01b038088166001600160a01b031992831681179093558c811687526003855283872080546001818101835591895295909720909401805490911690911790559254925163a9059cbb60e01b8152939750919091169163a9059cbb916108179188918e9101610db0565b6020604051808303816000875af1158015610836573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061085a9190610dc9565b50846001600160a01b03167f87a862f415985b26b1f7198ba859497be6dbce9832b2bb2cee869961334801c28585604051610896929190610db0565b60405180910390a25050955095509592505050565b600360205281600052604060002081815481106108c757600080fd5b6000918252602090912001546001600160a01b03169150829050565b6001600160a01b03811660009081526003602090815260409182902080548351818402810184019094528084526060939283018282801561094d57602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161092f575b50505050509050919050565b6109638133610af3565b50565b60006109728383610536565b6109f0576000838152602081815260408083206001600160a01b03861684529091529020805460ff191660011790556109a83390565b6001600160a01b0316826001600160a01b0316847f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4506001610316565b506000610316565b6000610a048383610536565b156109f0576000838152602081815260408083206001600160a01b0386168085529252808320805460ff1916905551339286917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4506001610316565b6000763d602d80600a3d3981f3363d3d373d3d3d363d730000008260601b60e81c176000526e5af43d82803e903d91602b57fd5bf38260781b17602052603760096000f090506001600160a01b038116610ad0576040516330be1a3d60e21b815260040160405180910390fd5b919050565b6000610aeb6001600160a01b0384168334610b27565b509192915050565b610afd8282610536565b6103df57808260405163e2517d3f60e01b8152600401610b1e929190610db0565b60405180910390fd5b606081471015610b4c573060405163cd78605960e01b8152600401610b1e9190610c6c565b600080856001600160a01b03168486604051610b689190610e1a565b60006040518083038185875af1925050503d8060008114610ba5576040519150601f19603f3d011682016040523d82523d6000602084013e610baa565b606091505b5091509150610bba868383610bc6565b925050505b9392505050565b606082610bdb57610bd682610c19565b610bbf565b8151158015610bf257506001600160a01b0384163b155b15610c125783604051639996b31560e01b8152600401610b1e9190610c6c565b5080610bbf565b805115610c295780518082602001fd5b604051630a12f52160e11b815260040160405180910390fd5b600060208284031215610c5457600080fd5b81356001600160e01b031981168114610bbf57600080fd5b6001600160a01b0391909116815260200190565b600060208284031215610c9257600080fd5b5035919050565b80356001600160a01b0381168114610ad057600080fd5b60008060408385031215610cc357600080fd5b82359150610cd360208401610c99565b90509250929050565b60008060408385031215610cef57600080fd5b610cf883610c99565b946020939093013593505050565b600060208284031215610d1857600080fd5b610bbf82610c99565b600080600080600060a08688031215610d3957600080fd5b610d4286610c99565b97602087013597506040870135966060810135965060800135945092505050565b6020808252825182820181905260009190848201906040850190845b81811015610da45783516001600160a01b031683529284019291840191600101610d7f565b50909695505050505050565b6001600160a01b03929092168252602082015260400190565b600060208284031215610ddb57600080fd5b81518015158114610bbf57600080fd5b634e487b7160e01b600052603260045260246000fd5b600060208284031215610e1357600080fd5b5051919050565b6000825160005b81811015610e3b5760208186018101518583015201610e21565b50600092019182525091905056fea49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775a26469706673582212200d7aab202aebc352cec2c363a8ad37342e2335da983242f8e380c4492e09dc7364736f6c63430008180033a49807205ce4d355092ef5a8a18f56e8913cf4a201fbe287825b095693c21775";

type TreasuryVesterFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TreasuryVesterFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TreasuryVesterFactory__factory extends ContractFactory {
  constructor(...args: TreasuryVesterFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    vestingToken_: AddressLike,
    treasury_: AddressLike,
    treasuryVesterImplementation_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      vestingToken_,
      treasury_,
      treasuryVesterImplementation_,
      overrides || {}
    );
  }
  override deploy(
    vestingToken_: AddressLike,
    treasury_: AddressLike,
    treasuryVesterImplementation_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(
      vestingToken_,
      treasury_,
      treasuryVesterImplementation_,
      overrides || {}
    ) as Promise<
      TreasuryVesterFactory & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): TreasuryVesterFactory__factory {
    return super.connect(runner) as TreasuryVesterFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TreasuryVesterFactoryInterface {
    return new Interface(_abi) as TreasuryVesterFactoryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): TreasuryVesterFactory {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as TreasuryVesterFactory;
  }
}
