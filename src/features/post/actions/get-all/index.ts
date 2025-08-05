'use server';

import { PostRepository } from '@/features/post/repository';
import { getCurrentUser } from '@/shared/lib/helpers/get-current-user';

export async function getAllPostsAction() {
  // セッション確認
  const user = await getCurrentUser();

  if (!user) {
    throw new Error('認証が必要です');
  }

  try {
    const repository = new PostRepository();
    const posts = await repository.getUserPosts(user.id);
    return posts;
  } catch (error) {
    console.error('Posts fetch error:', error);
    throw new Error('投稿の取得に失敗しました');
  }
}
