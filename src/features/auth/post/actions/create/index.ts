'use server';

import { parseWithZod } from '@conform-to/zod';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { createPostSchema } from '@/features/auth/schemas/post';
import { auth } from '@/shared/lib/auth';

import { createPost } from '../../helpers/queries';

export async function createPostAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: createPostSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  // セッション確認
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return submission.reply({
      formErrors: ['認証が必要です'],
    });
  }

  const { title } = submission.value;

  try {
    await createPost(title, session.user.id);
  } catch (error) {
    console.error('Post creation error:', error);
    return submission.reply({
      formErrors: ['投稿の作成に失敗しました'],
    });
  }

  redirect('/dashboard');
}
