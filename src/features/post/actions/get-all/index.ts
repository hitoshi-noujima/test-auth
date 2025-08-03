'use server';

import { getCurrentUser } from '@/shared/lib/helpers';

import { getUserPosts } from '../../queries';

export async function getAllPostsAction() {
  // セッション確認
  const user = await getCurrentUser();

  if (!user) {
    throw new Error('認証が必要です');
  }

  try {
    // テスト用: 3秒遅延
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const posts = await getUserPosts(user.id);
    return posts;
  } catch (error) {
    console.error('Posts fetch error:', error);
    throw new Error('投稿の取得に失敗しました');
  }
}
