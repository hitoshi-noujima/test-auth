'use server';

import { parseWithZod } from '@conform-to/zod';
import { revalidatePath } from 'next/cache';

import { PostRepository } from '@/features/post/repository';
import { createPostSchema } from '@/features/post/schemas';
import { getCurrentUser } from '@/shared/lib/helpers/get-current-user';

export async function createPostAction(_: unknown, formData: FormData) {
  const submission = parseWithZod(formData, {
    schema: createPostSchema,
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

  const { title } = submission.value;

  try {
    const repository = new PostRepository();
    await repository.createPost(title, user.id);
    revalidatePath('/dashboard');
  } catch (error) {
    console.error('Post creation error:', error);
    return submission.reply({
      formErrors: ['投稿の作成に失敗しました'],
    });
  }
}
