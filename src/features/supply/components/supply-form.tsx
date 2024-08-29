import { ArrowLeftRight } from 'lucide-react';
import { ActionDrawer } from '../../../components/action-drawer';
import { Card, CardContent } from '../../../components/ui/card';
import { useForm } from 'react-hook-form';
import { SupplyType } from '../schemas';
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
import { supply } from '../../../../scripts/entrypointFunctions';
import { useWallet } from '../../../components/context/wallet-connect-context';

export function SupplyForm() {
  const { signer, account } = useWallet();
  const form = useForm<SupplyType>({
    defaultValues: {
      riskTier: RiskTier.MEDIUM,
      tokensToSupply: 0,
    },
  });

  const onSubmit = async (data: SupplyType, onClose: () => void) => {
    if (!account) {
      toast({
        title: 'Error',
        description: 'Please connect your wallet to proceed.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      variant: 'success',
      description: 'Supply Request Submitted',
    });

    try {
      // Perform the borrow operation with the validated data
      await supply(0, data.tokensToSupply, signer?.address, signer);

      // Show success toast if the transaction was successful
      toast({
        title: 'success',
        description: 'Supply transaction was successful.',
        variant: 'success',
      });

      // Close the drawer after successful submission
      if (typeof onClose === 'function') {
        onClose();
      }
    } catch (error) {
      // Show error toast if the transaction failed
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
          <ArrowLeftRight className="w-5 mr-2" />
          Supply
        </>
      }
      title="Supply Loan"
      description="input token to supply."
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
                name="tokensToSupply"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Tokens to Supply</FormLabel>
                    <FormControl>
                      <Input placeholder="Tokens to Supply" {...field} />
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
