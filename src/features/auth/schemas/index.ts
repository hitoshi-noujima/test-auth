import { z } from 'zod';

const emailSchema = z
  .string({
    required_error: 'メールアドレスは必須です',
  })
  .email('正しいメールアドレスの形式で入力してください');

const passwordSchema = z.string({
  required_error: 'パスワードは必須です',
});

const nameSchema = z.string({
  required_error: '名前は必須です',
});

export const signInSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export type SignInInput = z.infer<typeof signInSchema>;

export const signUpSchema = z.object({
  email: emailSchema,
  name: nameSchema,
  password: passwordSchema,
});

export type SignUpInput = z.infer<typeof signUpSchema>;
