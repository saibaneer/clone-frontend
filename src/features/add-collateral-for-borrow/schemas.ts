import { z } from 'zod';
import { RiskTier } from '../../lib/enums';
export const addCollateralForBorrowSchema = z.object({
  riskTier: z.nativeEnum(RiskTier, {
    errorMap: () => ({ message: 'Please select a risk tier.' }),
  }),
  tokensQty: z
    .string()
    .transform((val) => Number(val))
    .refine((val) => !isNaN(val), {
      message: 'Tokens to Add must be a number.',
    }),
});

export type AddCollateralForBorrowType = z.infer<typeof addCollateralForBorrowSchema>;
