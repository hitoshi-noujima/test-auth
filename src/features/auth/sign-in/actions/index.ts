'use server';

import { parseWithZod } from '@conform-to/zod';
import { APIError } from 'better-auth/api';
import { redirect } from 'next/navigation';

import { signInSchema } from '@/features/auth/schemas';
import { auth } from '@/shared/lib/auth';

export async function signInAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: signInSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const { email, password } = submission.value;

  try {
    await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      return submission.reply({
        formErrors: [
          `${error.body?.code}`,
          `${error.status}`,
          `${error.statusCode}`,
          error.message,
        ],
      });
    }

    return submission.reply({
      formErrors: ['予期せぬエラーが起こりました'],
    });
  }

  redirect('/dashboard');
}
