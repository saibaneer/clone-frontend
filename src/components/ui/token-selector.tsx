import React, { useState } from 'react';
import Modal from './modal';

interface TokenSelectorProps {
  selectedToken: string;
  setSelectedToken: (token: string) => void;
}

const tokens = ['ETH', 'DAI', 'USDC', 'USDT', 'WBTC', 'WETH'];

const TokenSelector: React.FC<TokenSelectorProps> = ({
  selectedToken,
  setSelectedToken,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-between p-2 border rounded-md bg-white shadow-sm focus:outline-none"
      >
        <span>{selectedToken}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="space-y-2">
          <input
            type="text"
            placeholder="Search name or paste address"
            className="w-full px-4 py-2 border rounded-md"
          />
          <div className="space-y-2">
            {tokens.map((token) => (
              <button
                key={token}
                onClick={() => {
                  setSelectedToken(token);
                  setIsOpen(false);
                }}
                className="block w-full px-4 py-2 text-left hover:bg-gray-100"
              >
                {token}
              </button>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="text-lg font-semibold">Popular tokens</h4>
            <div className="space-y-2">
              {['0x Protocol', '1inch', 'Aave', 'Aevo', 'AIOZ Network'].map(
                (token) => (
                  <button
                    key={token}
                    onClick={() => {
                      setSelectedToken(token);
                      setIsOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    {token}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TokenSelector;
