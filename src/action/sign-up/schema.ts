import { z } from 'zod';
import { emailSchema, passwordSchema, nameSchema } from '../schemas/auth';

// sign-up固有のスキーマ
export const signUpSchema = z.object({
  email: emailSchema,
  name: nameSchema,
  password: passwordSchema,
});

export type SignUpInput = z.infer<typeof signUpSchema>;
