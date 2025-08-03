'use server';

import { headers } from 'next/headers';

import { auth } from '@/shared/lib/auth';

import { getUserPosts } from '../../helpers/queries';

/**
 * 認証済みユーザーの全投稿を取得
 * ページコンポーネントから直接呼び出し可能
 */
export async function getAllPostsAction() {
  // セッション確認
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error('認証が必要です');
  }

  try {
    // テスト用: 3秒遅延
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const posts = await getUserPosts(session.user.id);
    return posts;
  } catch (error) {
    console.error('Posts fetch error:', error);
    throw new Error('投稿の取得に失敗しました');
  }
}
