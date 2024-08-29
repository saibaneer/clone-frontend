import React, { useEffect } from 'react';

import Header from './components/ui/header';
import { DataTableDemo } from './components/market-place';
import { Toaster } from './components/ui/toaster';

import { getBorrowRate, getPositionInfo } from '../scripts/entrypointFunctions';
import { WalletProvider } from './components/context/wallet-connect-context';
import { GuestLayout } from './features/guest';

const App: React.FC = () => {
  // const [positionInfo, setPositionInfo] = useState<any>(null);
  // const [borrowRate, setBorrowRate] = useState<any>(null);
  // const [marketInfo, setMarketInfo] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const positionInfo = await getPositionInfo(1);
        const borrowRate = await getBorrowRate(0);

        console.log({ positionInfo, borrowRate });

        // setPositionInfo(positionInfo);
        // setBorrowRate(borrowRate);
        // setMarketInfo(marketInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <WalletProvider>
      <div className="min-h-screen  text-black">
        <Header />
        <main className="flex flex-col items-center justify-center py-10">
          <DataTableDemo />
          <GuestLayout />
        </main>
        <Toaster />
      </div>
    </WalletProvider>
  );
};

export default App;
