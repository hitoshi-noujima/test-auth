'use server';

import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

type SignUpState = {
  error?: {
    message: string;
  };
} | null;

export async function signInAction(
  _prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const email = formData.get('email');
  const password = formData.get('password');

  if (typeof email !== 'string' || typeof password !== 'string') {
    return {
      error: {
        message: '不正な値だよ',
      },
    };
  }

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
        message:
          error instanceof Error ? error.message : 'サインインに失敗しました',
      },
    };
  }

  redirect('/dashboard');
}
