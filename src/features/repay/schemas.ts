import { z } from 'zod';
import { RiskTier } from '../../lib/enums';
export const repaySchema = z.object({
  riskTier: z.nativeEnum(RiskTier, {
    errorMap: () => ({ message: 'Please select a risk tier.' }),
  }),
  tokensToRepay: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'Tokens to Repay must be a number.',
    }),
});

export type RepayType = z.infer<typeof repaySchema>;
