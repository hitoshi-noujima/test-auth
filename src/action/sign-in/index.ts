'use server';

import { redirect } from 'next/navigation';

import { auth } from '@/lib/auth';

import { signInSchema } from './schema';
import { translateAuthError } from '../helpers/translate-auth-error';

import type { ActionState } from '../types';

export async function signInAction(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parseResult = signInSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!parseResult.success) {
    // 最初のエラーを取得してActionStateに変換
    const firstError = parseResult.error.issues[0];
    return {
      error: {
        message: firstError.message,
        field: firstError.path[0]?.toString(),
      },
    };
  }

  const { email, password } = parseResult.data;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    return {
      error: {
        message: translateAuthError(error),
      },
    };
  }

  redirect('/dashboard');
}
