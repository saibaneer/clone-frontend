import { z } from 'zod';
import { RiskTier } from '../../lib/enums';
export const withdrawSchema = z.object({
  riskTier: z.nativeEnum(RiskTier, {
    errorMap: () => ({ message: 'Please select a risk tier.' }),
  }),
  tokensToWithdraw: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'Tokens to Withdraw must be a number.',
    }),
});

export type WithdrawType = z.infer<typeof withdrawSchema>;
