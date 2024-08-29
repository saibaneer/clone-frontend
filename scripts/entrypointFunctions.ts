import { ethers, Wallet } from 'ethers';
import {
  ERC20Mock__factory,
  Spatha__factory,
  StableIRM__factory,
  WETH9Mock__factory,
} from '../typechain-types';
import {
  MarketCreationParamsStruct,
  MarketParamsStruct,
  MarketStruct,
  // MarketParamsStructOutput,
  // MarketStructOutput,
} from '../typechain-types/src/Spatha';
import {
  ADMIN_PRIVATE_KEY,
  RPC_URL,
  signerBuilder,
  SPATHA_CONTRACT_ADDRESS,
  // spathaContractAbi,
  // MarketParams,
  LOAN_ASSET,
  COLLATERAL_ASSET,
  contractAddresses,
  STABLE_IRM,
  amountBuilder,
  errorLogger,
} from './constants';

// type MarketInfo = {
//   marketBalances: MarketStructOutput;
//   marketParams: MarketParamsStructOutput;
//   // totalMarketBalances: MarketTotalBalances;
// };

// (m.totalSupplyAssets, m.totalSupplyShares, m.totalBorrowAssets, m.totalBorrowShares);
// type MarketTotalBalances = {
//   totalSupplyAssets: bigint;
//   totalSupplyShares: bigint;
//   totalBorrowAssets: bigint;
//   totalBorrowShares: bigint;
// };

type UserPositionInfo = [bigint, bigint, bigint] & {
  supplyShares: bigint;
  borrowShares: bigint;
  collateral: bigint;
};

const adminSigner = signerBuilder(
  ADMIN_PRIVATE_KEY as string,
  RPC_URL as string
);
const spathaContract = Spatha__factory.connect(
  SPATHA_CONTRACT_ADDRESS,
  adminSigner
);

//supply tokens
const supply = async function (
  riskTier: number,
  uintsOfAssets: number,
  beneficiary: string,
  signer: Wallet
) {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };

  // const loanAsset = WETH9Mock__factory.connect(LOAN_ASSET as string, signer);
  // console.log('checking this out', loanAsset);

  console.log('Approving token transfer...');
  const amountToApprove = amountBuilder(uintsOfAssets);
  await approveSpend(signer, 'LOAN_ASSET', amountToApprove);

  try {
    console.log('Adding liquidity...');
    const tx = await spathaContract.connect(signer).addLiquidity(
      marketArguments,
      amountToApprove,
      // ethers.parseUnits(uintsOfAssets.toString(), 18),
      0,
      signer.address
    );
    console.log(tx);
    await tx.wait();
    console.log('Liquidity successfully added!');
  } catch (error) {
    // throw new Error(`Transaction failed with message: ${error}`);
    errorLogger(error, spathaContract.interface);
  }
};

/**
 * @TODO The borrow function isnt executing.
 */
//borrow
const borrow = async function (
  riskTier: number,
  tokensToBorrow: number,
  beneficiary: string,
  receiver: string,
  signer: Wallet
) {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };
  const amountToBorrow = amountBuilder(tokensToBorrow);
  // const value = ethers.parseEther(tokensToBorrow.toString());

  try {
    const tx = await spathaContract
      .connect(signer)
      .borrow(
        marketArguments,
        amountToBorrow,
        0,
        signer.address,
        signer.address
      );
    await tx.wait();
    console.log('Borrow successful!');
  } catch (error) {
    // throw new Error(`Transaction failed with message: ${error}`);
    errorLogger(error, spathaContract.interface);
  }
};

//remove liquidity
const withdrawLiquidity = async function (
  riskTier: number,
  tokensToWithdraw: number,
  beneficiary: string,
  receiver: string,
  signer: Wallet
) {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };
  // const value = ethers.parseEther(tokensToWithdraw.toString());
  const amountToWithdraw = amountBuilder(tokensToWithdraw);

  try {
    console.log('Attempting to withdraw Liquidity...');
    const tx = await spathaContract
      .connect(signer)
      .withdrawLiquidity(
        marketArguments,
        amountToWithdraw,
        0,
        signer.address,
        signer.address
      );
    await tx.wait(1);
    console.log('Withdraw liquidity successful!');
  } catch (error) {
    // throw new Error(`Transaction failed with message: ${error}`);
    errorLogger(error, spathaContract.interface);
  }
};

/**
 * @TODO The withdrawCollateral function isnt executing.
 */
//remove collateral
const withdrawCollateral = async function (
  riskTier: number,
  tokensToWithdraw: number,
  beneficiary: string,
  receiver: string,
  signer: Wallet
) {
  // const value = ethers.parseEther(tokensToWithdraw.toString());
  const amountToWithdraw = amountBuilder(tokensToWithdraw);

  try {
    console.log('Attempting to withdraw collateral...');
    const marketArguments: MarketCreationParamsStruct = {
      loanToken: LOAN_ASSET,
      collateralToken: COLLATERAL_ASSET,
      riskTier,
    };

    const tx = await spathaContract
      .connect(signer)
      .withdrawCollateral(
        marketArguments,
        amountToWithdraw,
        signer.address,
        signer.address
      );
    await tx.wait();
    console.log('Withdrew collateral succesfully!');
  } catch (error) {
    // throw new Error(`Transaction failed with message: ${error}`);
    errorLogger(error, spathaContract.interface);
  }
};

// To Add; Repay
const repay = async function (
  riskTier: number,
  tokensToRepay: number,
  beneficiary: string,
  signer: Wallet
) {
  // const value = ethers.parseEther(tokensToRepay.toString());
  console.log('Approving token transfer...');
  const amountToRepay = amountBuilder(tokensToRepay);
  await approveSpend(signer, 'LOAN_ASSET', amountToRepay);

  /**
   * @TODO Try Catch block failing completion of execution.
   */
  try {
    const marketArguments: MarketCreationParamsStruct = {
      loanToken: LOAN_ASSET,
      collateralToken: COLLATERAL_ASSET,
      riskTier,
    };
    const tx = await spathaContract.repay(
      marketArguments,
      amountToRepay,
      0,
      signer.address
    );
    await tx.wait();
    console.log('Withdrew collateral succesfully!');
  } catch (error) {
    // throw new Error(`Transaction failed with message: ${error}`);
    errorLogger(error, spathaContract.interface);
  }
};

const mint = async function (
  token: 'LOAN_ASSET' | 'COLLATERAL_ASSET',
  signer: Wallet,
  amount: number
) {
  const contractFactory =
    token === 'LOAN_ASSET' ? WETH9Mock__factory : ERC20Mock__factory;
  const contract = contractFactory.connect(
    contractAddresses[token] as string,
    signer
  );

  const value = ethers.parseEther(amount.toString());

  await contract.connect(signer).mint(signer.address, value);
  console.log(
    `Minted ${value} tokens of ${contractAddresses[token]} for ${signer.address}`
  );
};

// get position from spatha
const getPositionInfo = async function (riskTier: number) {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };

  const stableIrm = StableIRM__factory.connect(
    STABLE_IRM as string,
    adminSigner
  );

  try {
    // Get the market ID
    const marketId =
      await spathaContract.getMarketIdWithMarketCreationParams(marketArguments);

    // Fetch market balances
    const marketBalances = await spathaContract.getMarketBalances(marketId);

    // Return the fetched market balances
    return marketBalances;
  } catch (error) {
    // Centralized error logging
    const interfaceToLog =
      error.code === 'CALL_EXCEPTION'
        ? stableIrm.interface
        : spathaContract.interface;
    errorLogger(error, interfaceToLog);

    // Rethrow error after logging
    throw error;
  }
};

const getBorrowRate = async function (riskTier: number) {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };

  const stableIrm = StableIRM__factory.connect(
    STABLE_IRM as string,
    adminSigner
  );

  try {
    // Get the market ID
    const marketId =
      await spathaContract.getMarketIdWithMarketCreationParams(marketArguments);
    console.log(marketId, 'marketId');

    // Fetch market balances and parameters concurrently
    // const marketStruct = await spatha.getMarketBalances(marketId)
    const marketParamsAgain = await spathaContract.getMarketParams(marketId);

    const p1: MarketParamsStruct = {loanToken: LOAN_ASSET,
      collateralToken: COLLATERAL_ASSET,
   riskTier: marketParamsAgain.riskTier,
      lltv: marketParamsAgain.lltv,
      irm: marketParamsAgain.irm
  }
  const p2: MarketStruct = {
    totalSupplyAssets: 0n,
      totalSupplyShares: 0n,
      totalBorrowAssets: 0n,
      totalBorrowShares: 0n,
      lastUpdate: 0,
      fee: 0n,
      pauseStatuses: {
        isAddLiquidityPaused: false,
      isAddCollateralPaused: false,
      isBorrowPaused: false,
      isWithdrawLiquidityPaused: false,
      isWithdrawCollateralPaused: false,
      isRepayPaused: false,
      isLiquidatePaused: false,
      }
  
  }

    // Fetch borrow rate
    const borrowRate = await stableIrm.borrowRate(p1, p2);

    // Return borrow rate
    return borrowRate;
  } catch (error) {
    // Centralized error logging
    errorLogger(
      error,
      error.code === 'CALL_EXCEPTION'
        ? stableIrm.interface
        : spathaContract.interface
    );
    throw error;
  }
};

// const getMarketInfo = async function (riskTier: number): Promise<MarketInfo> {
//   const marketArguments: MarketCreationParamsStruct = {
//     loanToken: LOAN_ASSET,
//     collateralToken: COLLATERAL_ASSET,
//     riskTier,
//   };

//   try {
//     // Get the market ID
//     const id =
//       await spathaContract.getMarketIdWithMarketCreationParams(marketArguments);

//     // Fetch market balances and parameters
//     const marketBalances = await spathaContract.getMarketBalances(id);
//     const marketParams = await spathaContract.getMarketParams(id);

//     // Fetch total balances (e.g., total supply and borrow assets)
//     const allBalances =
//       await spathaContract.getExpectedMarketBalances(marketParams);
//     console.log(allBalances, 'YOO');
//     // Construct the MarketTotalBalances object
//     const balances: MarketTotalBalances = {
//       totalSupplyAssets: allBalances[0],
//       totalSupplyShares: allBalances[1],
//       totalBorrowAssets: allBalances[2],
//       totalBorrowShares: allBalances[3],
//     };

//     // Return the MarketInfo object containing marketBalances, marketParams, and balances
//     return {
//       marketBalances,
//       marketParams,
//       // totalMarketBalances: balances,
//     };
//   } catch (error) {
//     throw new Error(`Failed to fetch market info: ${error}`);
//   }
// };

const getUsersPosition = async function (
  riskTier: number,
  signer: Wallet
): Promise<UserPositionInfo> {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };

  const id =
    await spathaContract.getMarketIdWithMarketCreationParams(marketArguments);
  const positionInfo = await spathaContract.getPosition(id, signer.address);

  // Ensure the position is returned both as an array and an object
  const position: UserPositionInfo = Object.assign(
    [...positionInfo] as [bigint, bigint, bigint],
    {
      supplyShares: positionInfo[0],
      borrowShares: positionInfo[1],
      collateral: positionInfo[2],
    }
  );

  return position;
};

const getTokenBalance = async (
  signer: Wallet,
  tokenAddress: 'LOAN_ASSET' | 'COLLATERAL_ASSET'
): Promise<bigint> => {
  const contractFactory =
    tokenAddress === 'LOAN_ASSET' ? WETH9Mock__factory : ERC20Mock__factory;
  const contract = contractFactory.connect(
    contractAddresses[tokenAddress] as string,
    signer
  );

  const balance = await contract.balanceOf(signer.address);
  return balance;
};

const approveSpend = async (
  signer: Wallet,
  tokenAddress: 'LOAN_ASSET' | 'COLLATERAL_ASSET',
  amount: bigint
) => {
  const contractFactory =
    tokenAddress === 'LOAN_ASSET' ? WETH9Mock__factory : ERC20Mock__factory;
  const contract = contractFactory.connect(
    contractAddresses[tokenAddress] as string,
    signer
  );
  console.log('Approving spend...');
  const approveTx = await contract
    .connect(signer)
    .approve(SPATHA_CONTRACT_ADDRESS as string, amount);
  await approveTx.wait(1);
  console.log('approved!');
};

const addCollateralForBorrower = async (
  riskTier: number,
  tokensQty: number,
  signer: Wallet
) => {
  const marketArguments: MarketCreationParamsStruct = {
    loanToken: LOAN_ASSET,
    collateralToken: COLLATERAL_ASSET,
    riskTier,
  };

  await approveSpend(signer, 'COLLATERAL_ASSET', tokensQty);
  const value = ethers.parseEther(tokensQty.toString());
  try {
    const tx = await spathaContract
      .connect(signer)
      .addCollateral(marketArguments, value, signer.address);
    await tx.wait(1);
  } catch (error) {
    // throw new Error(`Transaction failed with message: ${error}`);
    errorLogger(error, spathaContract.interface);
  }
};

const getCollateralPrice = async () => {
  try {
    const price = await spathaContract
      .connect(adminSigner)
      .getCollateralPrice(COLLATERAL_ASSET, LOAN_ASSET);
    return price;
  } catch (error) {
    errorLogger(error, spathaContract.interface);
  }
};

export {
  addCollateralForBorrower,
  approveSpend,
  supply,
  borrow,
  withdrawLiquidity,
  withdrawCollateral,
  repay,
  mint,
  getPositionInfo,
  getBorrowRate,
  getCollateralPrice,
  getUsersPosition,
  getTokenBalance,
};
