import { z } from 'zod';
import { RiskTier } from '../../lib/enums';
export const borrowSchema = z.object({
  riskTier: z.nativeEnum(RiskTier, {
    errorMap: () => ({ message: 'Please select a risk tier.' }),
  }),
  tokensToBorrow: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'Tokens to Borrow must be a number.',
    }),
});

export type BorrowType = z.infer<typeof borrowSchema>;
