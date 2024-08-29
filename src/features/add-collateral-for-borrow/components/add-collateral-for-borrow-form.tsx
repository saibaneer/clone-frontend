import { ArrowLeftRight } from 'lucide-react';
import { ActionDrawer } from '../../../components/action-drawer';
import { Card, CardContent } from '../../../components/ui/card';
import { useForm } from 'react-hook-form';
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
import { addCollateralForBorrower } from '../../../../scripts/entrypointFunctions';
import { useWallet } from '../../../components/context/wallet-connect-context';
import { AddCollateralForBorrowType } from '../schemas';

export function AddCollateralForm() {
  const { signer, account } = useWallet();
  const form = useForm<AddCollateralForBorrowType>({
    defaultValues: {
      riskTier: RiskTier.MEDIUM,
      tokensQty: 0,
    },
  });

  const onSubmit = async (
    data: AddCollateralForBorrowType,
    onClose: () => void
  ) => {
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
      description: 'collateral borrow Request Submitted',
    });
    try {
      await addCollateralForBorrower(0, data.tokensQty, signer);

      toast({
        title: 'success',
        description: 'Borrow collateral transaction was successful.',
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
          <ArrowLeftRight className="w-5 mr-2" />
          Add Collateral For Borrow
        </>
      }
      title="Borrow Token"
      description="Borrow against the selected token."
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
                name="tokensQty"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Tokens to Add</FormLabel>
                    <FormControl>
                      <Input placeholder="Tokens to Add" {...field} />
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
