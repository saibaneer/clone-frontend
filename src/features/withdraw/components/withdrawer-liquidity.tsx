import { BadgeDollarSign } from 'lucide-react';
import { ActionDrawer } from '../../../components/action-drawer';
import { Card, CardContent } from '../../../components/ui/card';
import { useForm } from 'react-hook-form';
import { WithdrawType } from '../schemas';
import { RiskTier } from '../../../lib/enums';
import { toast } from '../../../components/ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../../../components/ui/form';
import { Input } from '../../../components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../components/ui/select';
import { withdrawLiquidity } from '../../../../scripts/entrypointFunctions';
import { useWallet } from '../../../components/context/wallet-connect-context';

export function WithdrawLiquidity() {
  const { signer, account } = useWallet();
  const form = useForm<WithdrawType>({
    defaultValues: {
      riskTier: RiskTier.MEDIUM,
      tokensToWithdraw: 0,
    },
  });

  const onSubmit = async (data: WithdrawType, onClose: () => void) => {
    if (!account) {
      toast({
        title: 'Error',
        description: 'Please connect your wallet to proceed.',
        variant: 'destructive',
      });
      return;
    }
    toast({
      title: 'Withdrawal Request Submitted',
      variant: 'success',
    });

    try {
      await withdrawLiquidity(
        0,
        data.tokensToWithdraw,
        signer?.address,
        '_',
        signer
      );

      toast({
        title: 'success',
        description: 'withdraw transaction was successful.',
        variant: 'success',
      });

      if (typeof onClose === 'function') {
        onClose();
      }
    } catch (error) {
      toast({
        title: 'Transaction Error',
        description: `An error occurred: ${error.message || error}`,
        variant: 'destructive',
      });
    }
  };

  return (
    <ActionDrawer
      trigger={
        <>
          <BadgeDollarSign className="w-5 mr-2" /> Withdraw Liquidity
        </>
      }
      title="Withdraw liquidity Token"
      description="select token to withdraw."
      onSubmit={(onClose) =>
        form.handleSubmit((data) => onSubmit(data, onClose))()
      }
    >
      <Card className="py-10">
        <CardContent className="space-y-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => onSubmit(data, () => {}))}
              className="space-y-5"
            >
              <FormField
                control={form.control}
                name="tokensToWithdraw"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Tokens to Withdraw</FormLabel>
                    <FormControl>
                      <Input placeholder="Tokens to withdraw" {...field} />
                    </FormControl>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="riskTier"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Risk Tier</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Risk Tier" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.values(RiskTier).map((tier) => (
                          <SelectItem key={tier} value={tier}>
                            {tier}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {fieldState.error && (
                      <FormMessage>{fieldState.error.message}</FormMessage>
                    )}
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </ActionDrawer>
  );
}