'use server';

import { parseWithZod } from '@conform-to/zod';

import { updatePostSchema } from '@/features/post/schemas';
import { getCurrentUser } from '@/shared/lib/helpers';

import { updatePost } from '../../queries';

export async function updatePostAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: updatePostSchema,
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

  const { id, title } = submission.value;

  try {
    const updatedPost = await updatePost(id, title, user.id);

    if (!updatedPost) {
      return submission.reply({
        formErrors: ['投稿が見つからないか、編集権限がありません'],
      });
    }

    return updatedPost;
  } catch (error) {
    console.error('Post update error:', error);
    return submission.reply({
      formErrors: ['投稿の更新に失敗しました'],
    });
  }
}
