import { PackageOpen } from 'lucide-react';
import { ActionDrawer } from '../../../components/action-drawer';
import { Card, CardContent } from '../../../components/ui/card';
import { BorrowType } from '../schemas';
import { toast } from '../../../components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { RiskTier } from '../../../lib/enums';
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
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '../../../components/ui/select';
import { borrow } from '../../../../scripts/entrypointFunctions';
import { useWallet } from '../../../components/context/wallet-connect-context';

export function BorrowForm() {
  const { signer, account } = useWallet();
  const form = useForm<BorrowType>({
    defaultValues: {
      riskTier: RiskTier.MEDIUM,
      tokensToBorrow: 0,
    },
  });

  const onSubmit = async (data: BorrowType, onClose: () => void) => {
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
      description: 'Borrow Request Submitted',
    });

    try {
      await borrow(0, data.tokensToBorrow, signer?.address, '_', signer);

      toast({
        title: 'success',
        description: 'Borrow transaction was successful.',
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
          <PackageOpen className="w-5 mr-2" /> Borrow
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
                name="tokensToBorrow"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>Tokens to Borrow</FormLabel>
                    <FormControl>
                      <Input placeholder="Tokens to Borrow" {...field} />
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
