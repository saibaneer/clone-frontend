import { useSDK } from '@metamask/sdk-react';
import { Button } from '../ui/button';
import { TabsDemo } from '../ui/swap-form';

export function TransactionTab() {
  const { connected, account } = useSDK();

  console.log('checking status', connected, account);
  return (
    <>
      <TabsDemo />

      {!account && (
        <Button
          size={'lg'}
          className="my-5 w-[32%] h-16 rounded-xl text-[#EEAA45]"
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
