import { useEffect, useState } from 'react';
import { Card } from '../../components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../components/ui/tabs';
import { convertTokenUnits } from '../../lib/functions';
import { useWallet } from '../../components/context/wallet-connect-context';
import {
  getBorrowRate,
  getTokenBalance,
} from '../../../scripts/entrypointFunctions';

export function Stat() {
  const { signer, account } = useWallet();

  const [loanAssetBalance, setLoanAssetBalance] = useState(null);
  const [collateralAssetBalance, setCollateralAssetBalance] = useState(null);
  const [borrowRate, setBorrowRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (account) {
      const fetchData = async () => {
        try {
          const [loanBalance, collateralBalance, rate] = await Promise.all([
            getTokenBalance(signer, 'LOAN_ASSET'),
            getTokenBalance(signer, 'COLLATERAL_ASSET'),
            getBorrowRate(1),
          ]);

          console.log({ loanBalance, collateralBalance, rate });

          setLoanAssetBalance(convertTokenUnits(loanBalance));
          setCollateralAssetBalance(convertTokenUnits(collateralBalance));
          setBorrowRate(convertTokenUnits(rate));
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false); // Set loading to false once all data is loaded
        }
      };

      fetchData();
    } else {
      setLoading(false);
    }
  }, [signer, account]);

  if (!account) {
    return (
      <p className="text-center py-4">
        Please connect your wallet to see stats.
      </p>
    );
  }

  if (loading) {
    return (
      <card className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-[#462E95]"></div>
      </card>
    ); // Loading state with animation
  }

  return (
    <div>
      <div className="py-4">
        <h1 className="text-sm text-center">STATS DETAILS</h1>
      </div>
      <Card className="p-4 bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
        <div className="block md:flex justify-evenly">
          <div className="p-4">
            <p className="text-md">Loan Asset Balance</p>
            <p className="text-2xl font-extrabold">{loanAssetBalance}</p>
          </div>
          <div className="p-4">
            <p className="text-md">Collateral Asset Balance</p>
            <p className="text-2xl font-extrabold">{collateralAssetBalance}</p>
          </div>
          <div className="p-4">
            <p className="text-md">Borrow Rate</p>
            <p className="text-2xl font-extrabold">{borrowRate}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}
