import { z } from 'zod';
import { RiskTier } from '../../lib/enums';
export const supplySchema = z.object({
  riskTier: z.nativeEnum(RiskTier, {
    errorMap: () => ({ message: 'Please select a risk tier.' }),
  }),
  tokensToSupply: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'Tokens to Supply must be a number.',
    }),
});

export type SupplyType = z.infer<typeof supplySchema>;
