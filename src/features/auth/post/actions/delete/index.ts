'use server';

import { parseWithZod } from '@conform-to/zod';

import { deletePostSchema } from '@/features/auth/schemas/post';
import { getCurrentUser } from '@/shared/lib/helpers';

import { deletePost } from '../../queries';

export async function deletePostAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: deletePostSchema,
  });

  if (submission.status !== 'success') {
    return submission.reply();
  }

  // セッション確認
  const user = await getCurrentUser();

  if (!user) {
    return submission.reply({
      formErrors: ['認証が必要です'],
    });
  }

  const { id } = submission.value;

  try {
    const deletedPost = await deletePost(id, user.id);

    if (!deletedPost) {
      return submission.reply({
        formErrors: ['投稿が見つからないか、削除権限がありません'],
      });
    }

    return deletedPost;
  } catch (error) {
    console.error('Post delete error:', error);
    return submission.reply({
      formErrors: ['投稿の削除に失敗しました'],
    });
  }
}
