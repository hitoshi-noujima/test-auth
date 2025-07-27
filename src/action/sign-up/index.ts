'use server';

import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

type SignUpState = {
  error?: {
    message: string;
  };
} | null;

export async function signUpAction(
  _prevState: SignUpState,
  formData: FormData
): Promise<SignUpState> {
  const email = formData.get('email');
  const name = formData.get('name');
  const password = formData.get('password');

  if (
    typeof email !== 'string' ||
    typeof name !== 'string' ||
    typeof password !== 'string'
  ) {
    return {
      error: {
        message: '不正な値だよ',
      },
    };
  }

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
        message:
          error instanceof Error ? error.message : 'サインアップに失敗しました',
      },
    };
  }

  redirect('/dashboard');
}
