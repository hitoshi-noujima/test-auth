'use server';

import { parseWithZod } from '@conform-to/zod';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

import { deletePostSchema } from '@/features/auth/schemas/post';
import { auth } from '@/shared/lib/auth';

import { deletePost } from '../../helpers/queries';

export async function deletePostAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: deletePostSchema,
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

  const { id } = submission.value;

  try {
    const deletedPost = await deletePost(id, session.user.id);

    if (!deletedPost) {
      return submission.reply({
        formErrors: ['投稿が見つからないか、削除権限がありません'],
      });
    }
  } catch (error) {
    console.error('Post delete error:', error);
    return submission.reply({
      formErrors: ['投稿の削除に失敗しました'],
    });
  }

  redirect('/dashboard');
}
