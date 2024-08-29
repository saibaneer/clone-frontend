import React, { useEffect, useState } from 'react';
import { Popover, PopoverTrigger } from '../ui/popover';
import { formatAddress } from '../../lib/functions';
import { Button } from '../ui/button';
import { PopoverContent } from '@radix-ui/react-popover';
import { WalletMinimal } from 'lucide-react';

import { mint } from '../../../scripts/entrypointFunctions';
import { useWallet } from '../context/wallet-connect-context';
import { ethers, formatUnits } from 'ethers';

export function MetaMaskConnector() {
  const {
    signer,
    account,
    selectedWallet,
    setSelectedWallet,
    connectWallet,
    disconnectWallet,
  } = useWallet();

  const [balance, setBalance] = useState<string | null>(null); // Correct typing

  useEffect(() => {
    const fetchBalance = async () => {
      if (signer && account) {
        try {
          const balance = await signer.provider.getBalance(account);
          const formattedBalance = parseFloat(formatUnits(balance, 18)).toFixed(
            4
          ); // Rounding to 4 decimal places
          setBalance(formattedBalance);
        } catch (error) {
          console.error('Error fetching balance:', error);
          setBalance(null);
        }
      }
    };

    fetchBalance();
  }, [signer, account]);

  const handleWalletSelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedWallet(event.target.value);
  };

  const handleCollateralToken = () => {
    if (signer) {
      mint('COLLATERAL_ASSET', signer, 10000);
    }
  };
  const handleLoanToken = () => {
    if (signer) {
      mint('LOAN_ASSET', signer, 10000);
    }
  };

  return (
    <>
      <div className="relative">
        {account ? (
          <div className="flex items-center space-x-4 ">
            <div className="bg-gray-300 text-[#462E95] rounded-md flex items-center hover:border-[#462E95] hover:border-2 transition-all duration-150 ease-in-out">
              <p className="bg-[#462E95] text-white p-2">BAL:</p>
              <p className="p-2 text-sm font-semibold">{balance}</p>
            </div>

            <Popover>
              <PopoverTrigger>
                <Button className="text-[#462E95] bg-white border hover:bg-[#462E95] hover:text-white">
                  Mint
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mt-1 w-52  bg-gray-100 border rounded-md shadow-lg right-0 z-10 top-10">
                <button
                  onClick={handleCollateralToken}
                  className="block w-full p-4 text-left text-black hover:bg-gray-200"
                >
                  Mint Collateral Token
                </button>
                <button
                  onClick={handleLoanToken}
                  className="block w-full p-4 text-left text-black hover:bg-gray-200"
                >
                  Mint Loan Token
                </button>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <Button className="text-white bg-[#462E95] hover:bg-[#462E95]">
                  {formatAddress(account)}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mt-1 mr-4 w-44 bg-gray-100 border rounded-md shadow-lg z-10 ">
                <button
                  onClick={disconnectWallet}
                  className="block w-full p-4 text-left text-[#F05252] hover:bg-gray-200"
                >
                  Disconnect
                </button>
              </PopoverContent>
            </Popover>
          </div>
        ) : (
          <>
            <select
              value={selectedWallet}
              onChange={handleWalletSelection}
              className="px-6 py-2 outline-none mr-3 rounded-md border border-[#462E95]"
            >
              <option value="MetaMask">MetaMask</option>
              <option value="Trust Wallet">Trust Wallet</option>
              <option value="Phantom">Phantom</option>
            </select>
            <Button
              className="bg-[#462E95] text-white hover:bg-[#462E95]"
              onClick={connectWallet}
            >
              <WalletMinimal className="w-4 h-4 mr-2" />
              Connect Wallet
            </Button>
          </>
        )}

        {/* <div>
          <Button onClick={handleGetBorrowRate}>Get Borrow Rate</Button>
        </div> */}
      </div>
    </>
  );
}
