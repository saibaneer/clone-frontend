import {
  InterfaceAbi,
  Interface,
  JsonRpcProvider,
  Wallet,
  AddressLike,
  ethers,
  ContractFactory,
  ErrorCode,
} from 'ethers';
import spathaContractAbiJson from '../abis/src/Spatha.sol/Spatha.json';

// export interface MarketParams {
//   loanToken: string;
//   collateralToken: string;
//   lltv: number;
//   irm: number;
//   interestRateModuleAddress: string;
// }

export const spathaContractAbi: InterfaceAbi | Interface =
  spathaContractAbiJson.abi;
export const SPATHA_CONTRACT_ADDRESS: string =
  '0xfef9891f80969643E6aB0200c19dECae3C52D833';
export const LOAN_ASSET: AddressLike =
  '0x83f4C5A0d3843a428004dff077FEeBF4a0551A06';
export const COLLATERAL_ASSET: AddressLike =
  '0xF36ECE1aC28015607CbA8b2c82Cb7D72A050EfA9';

export const STABLE_IRM: AddressLike =
  '0x60Dd4789038098C8A644Da9BD0aA1cfB6A9a83B5';

export const contractAddresses = {
  SPATHA_CONTRACT_ADDRESS: SPATHA_CONTRACT_ADDRESS,
  LOAN_ASSET: LOAN_ASSET,
  COLLATERAL_ASSET: COLLATERAL_ASSET,
  STABLE_IRM: STABLE_IRM,
};

const providerBuilder = (url: string) => {
  return new JsonRpcProvider(url);
};

export const signerBuilder = (privateKey: string, url: string) => {
  const currentProvider = providerBuilder(url);
  return new Wallet(privateKey, currentProvider);
};

export const amountBuilder = (amount: number) => {
  return ethers.parseEther(amount.toString());
};

export const errorLogger = (error: any, contractInterface: Interface): void => {
  if (ethers.isError(error, 'CALL_EXCEPTION')) {
    console.log('Transaction Error:', error.message);
    if (error.data) {
      try {
        const reason = contractInterface.parseError(error.data);
        console.log('Decoded Error reason is: ', reason);
      } catch (decodedError) {
        // Handle the failure to decode the error
        console.log(
          'Failed to decode error reason:',
          (decodedError as Error).message
        );
      }
    }
  } else if (ethers.isError(error, 'INSUFFICIENT_FUNDS')) {
    console.error("Insufficient funds for the transaction.");
  } else if (ethers.isError(error, 'NONCE_EXPIRED')) {
    console.error("Nonce has expired. Consider updating your nonce.");
  } else if (ethers.isError(error, 'REPLACEMENT_UNDERPRICED')) {
    console.error("Replacement transaction underpriced. Increase the gas price.");
  } else {
    console.error('Unhandled Error:', error.message);
  }
};

export const ADMIN_PRIVATE_KEY = import.meta.env.VITE_ADMIN_PRIVATE_KEY;
export const RPC_URL = import.meta.env.VITE_RPC_URL;
