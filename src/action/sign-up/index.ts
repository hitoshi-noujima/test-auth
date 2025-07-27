'use server';

import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { translateAuthError } from '../helpers/translate-auth-error';
import { signUpSchema } from './schema';

import type { ActionState } from '../types';

export async function signUpAction(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const parseResult = signUpSchema.safeParse({
    email: formData.get('email'),
    name: formData.get('name'),
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

  const { email, name, password } = parseResult.data;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        name,
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
