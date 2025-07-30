'use server';

import { parseWithZod } from '@conform-to/zod';
import { APIError } from 'better-auth/api';
import { redirect } from 'next/navigation';

import { signUpSchema } from '@/features/auth/schemas';
import { auth } from '@/shared/lib/auth';

export async function signUpAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: signUpSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  const { email, name, password } = submission.value;

  try {
    await auth.api.signUpEmail({
      body: {
        email,
        name,
        password,
      },
    });
  } catch (error) {
    if (error instanceof APIError) {
      return submission.reply({
        formErrors: [`${error.status}`, `${error.statusCode}`, error.message],
      });
    }

    return submission.reply({
      formErrors: ['予期せぬエラーが起こりました'],
    });
  }

  redirect('/dashboard');
}
