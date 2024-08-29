import React, { useState } from 'react';
import TokenSelector from './token-selector';

interface InputFieldProps {
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ label }) => {
  const [selectedToken, setSelectedToken] = useState('ETH');

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">{label}</span>
        <input
          type="number"
          className="w-full text-2xl bg-transparent border-none focus:outline-none"
          placeholder="0"
        />
      </div>
      <TokenSelector
        selectedToken={selectedToken}
        setSelectedToken={setSelectedToken}
      />
    </div>
  );
};

export default InputField;
