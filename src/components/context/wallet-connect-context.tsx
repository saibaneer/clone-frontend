import { BrowserProvider, JsonRpcSigner } from 'ethers';
import React, { createContext, useContext, ReactNode, useEffect, useState } from 'react';

interface WalletContextProps {
  provider: BrowserProvider | null;
  signer: JsonRpcSigner | null;
  account: string | null;
  selectedWallet: string;
  setSelectedWallet: (wallet: string) => void;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const useWallet = () => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [provider, setProvider] = useState<BrowserProvider | null>(null);
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [selectedWallet, setSelectedWallet] = useState<string>('MetaMask');

  useEffect(() => {
    // Check if there's a connected wallet in local storage on component mount
    const storedWallet = localStorage.getItem('selectedWallet');
    const storedAccount = localStorage.getItem('account');
    if (storedWallet && storedAccount) {
      setSelectedWallet(storedWallet);
      setAccount(storedAccount);
      reconnectWallet(storedWallet);
    }
  }, []);

  const reconnectWallet = async (wallet: string) => {
    if (wallet === 'MetaMask' && window.ethereum) {
      try {
        const web3Provider = new BrowserProvider(window.ethereum);
        const signer = await web3Provider.getSigner();
        setProvider(web3Provider);
        setSigner(signer);
      } catch (error) {
        console.error('Error reconnecting to MetaMask', error);
      }
    } else if (wallet === 'Trust Wallet' && window.trustwallet) {
      try {
        const web3Provider = new BrowserProvider(window.trustwallet);
        const signer = await web3Provider.getSigner();
        setProvider(web3Provider);
        setSigner(signer);
      } catch (error) {
        console.error('Error reconnecting to Trust Wallet', error);
      }
    } else if (wallet === 'Phantom' && window.solana?.isPhantom) {
      try {
        const provider = window.solana;
        const signer = provider.publicKey.toString();
        setProvider(provider);
        setSigner(signer);
      } catch (error) {
        console.error('Error reconnecting to Phantom Wallet', error);
      }
    }
  };

  const connectWallet = async () => {
    if (selectedWallet === 'MetaMask' && window.ethereum) {
      try {
        const web3Provider = new BrowserProvider(window.ethereum);
        await window.ethereum.request({
          method: 'wallet_requestPermissions',
          params: [{ eth_accounts: {} }],
        });

        const signer = await web3Provider.getSigner();
        const account = await signer.getAddress();

        setProvider(web3Provider);
        setSigner(signer);
        setAccount(account);

        // Save to local storage
        localStorage.setItem('selectedWallet', selectedWallet);
        localStorage.setItem('account', account);
      } catch (error) {
        console.error('Error connecting to MetaMask', error);
      }
    } else if (selectedWallet === 'Trust Wallet' && window.trustwallet) {
      try {
        const web3Provider = new BrowserProvider(window.trustwallet);
        const signer = await web3Provider.getSigner();
        const account = await signer.getAddress();

        setProvider(web3Provider);
        setSigner(signer);
        setAccount(account);

        // Save to local storage
        localStorage.setItem('selectedWallet', selectedWallet);
        localStorage.setItem('account', account);
      } catch (error) {
        console.error('Error connecting to Trust Wallet', error);
      }
    } else if (selectedWallet === 'Phantom' && window.solana?.isPhantom) {
      try {
        await window.solana.connect();

        const provider = window.solana;
        const signer = provider.publicKey.toString();
        const account = signer;

        setProvider(provider);
        setSigner(signer);
        setAccount(account);

        // Save to local storage
        localStorage.setItem('selectedWallet', selectedWallet);
        localStorage.setItem('account', account);
      } catch (error) {
        console.error('Error connecting to Phantom Wallet', error);
      }
    } else {
      console.error(`${selectedWallet} is not installed`);
    }
  };

  const disconnectWallet = () => {
    if (selectedWallet === 'Phantom' && window.solana?.isPhantom) {
      window.solana.disconnect();
    }

    setProvider(null);
    setSigner(null);
    setAccount(null);

    // Clear local storage
    localStorage.removeItem('selectedWallet');
    localStorage.removeItem('account');

    console.log('Wallet disconnected');
  };

  return (
    <WalletContext.Provider
      value={{
        provider,
        signer,
        account,
        selectedWallet,
        setSelectedWallet,
        connectWallet,
        disconnectWallet,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
};
