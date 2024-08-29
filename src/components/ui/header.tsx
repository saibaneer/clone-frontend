// src/components/Header.tsx
import React from 'react';
import { Button } from './button';
import { MetaMaskConnector } from '../connect';

interface HeaderProps {
  handleConnectWallet?: () => Promise<void>;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex justify-between items-center px-4 py-2 bg-white shadow-sm">
      <div className="">
        <img src="/img/Spatha-Logo.png" className="w-[60px]" />
      </div>
      <div>
        <MetaMaskConnector />
      </div>
    </header>
  );
};

export default Header;
