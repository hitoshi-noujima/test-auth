'use server';

import { parseWithZod } from '@conform-to/zod';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { updatePostSchema } from '@/features/auth/schemas/post';
import { auth } from '@/shared/lib/auth';

import { updatePost } from '../../helpers/queries';

export async function updatePostAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: updatePostSchema,
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

  const { id, title } = submission.value;

  try {
    const updatedPost = await updatePost(id, title, session.user.id);

    if (!updatedPost) {
      return submission.reply({
        formErrors: ['投稿が見つからないか、編集権限がありません'],
      });
    }
  } catch (error) {
    console.error('Post update error:', error);
    return submission.reply({
      formErrors: ['投稿の更新に失敗しました'],
    });
  }

  redirect('/dashboard');
}
