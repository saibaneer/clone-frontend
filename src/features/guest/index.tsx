import {
  getBorrowRate,
  getCollateralPrice,
  getPositionInfo,
  getTokenBalance,
  getUsersPosition,
} from '../../../scripts/entrypointFunctions';
import { useWallet } from '../../components/context/wallet-connect-context';
import { Button } from '../../components/ui/button';
import { Stat } from './stat';

export function GuestLayout() {
  const { signer } = useWallet();
  console.log(signer);

  const handleGetLoanTokenBalance = async () => {
    const balance = await getTokenBalance(signer, 'LOAN_ASSET');
    console.log('loan balance', balance);
  };

  const handleGetCollateralTokenBalance = async () => {
    const balance = await getTokenBalance(signer, 'COLLATERAL_ASSET');
    console.log('collateral balance', balance);
  };
  const handleGetUserPosition = async () => {
    const userPosition = await getUsersPosition(0, signer);
    console.log('user position', userPosition);
  };
  const handleGetPositionInfo = async () => {
    const positionInfo = await getPositionInfo(1);
    console.log('position info', positionInfo);
  };
  const HandleGetCollateralPrice = async () => {
    const collateralPrice = await getCollateralPrice();
    console.log('collateral price', collateralPrice);
  };
  const handleGetBorrowRate = async () => {
    const borrowRate = await getBorrowRate(1);
    console.log('Borrow Rate', borrowRate);
  };

  return (
    <div className="space-y-6 w-[80%] md:w-[50%]">
      <Stat />
    </div>
  );
}
