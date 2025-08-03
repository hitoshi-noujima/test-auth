import 'server-only';

import { and, desc, eq } from 'drizzle-orm';

import { database } from '@/database';
import { post } from '@/database/schema';

/**
 * ユーザーの全投稿を作成日時降順で取得
 */
export async function getUserPosts(userId: string) {
  const result = await database.query.post.findMany({
    where: eq(post.userId, userId),
    orderBy: [desc(post.createdAt)],
    columns: {
      userId: false,
    },
  });

  return result;
}

/**
 * 指定IDの投稿を取得（投稿者本人確認付き）
 */
export async function getPostById(id: number, userId: string) {
  const result = await database.query.post.findFirst({
    where: and(eq(post.id, id), eq(post.userId, userId)),
    columns: {
      userId: false,
    },
  });

  return result ?? null;
}

/**
 * 投稿作成
 */
export async function createPost(title: string, userId: string) {
  const newPost = await database
    .insert(post)
    .values({
      title,
      userId,
    })
    .returning({
      id: post.id,
      title: post.title,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    })
    .then((res) => res[0]);

  return newPost ?? null;
}

/**
 * 投稿更新（投稿者本人確認付き）
 */
export async function updatePost(id: number, title: string, userId: string) {
  const updatedPost = await database
    .update(post)
    .set({
      title,
      updatedAt: new Date(),
    })
    .where(and(eq(post.id, id), eq(post.userId, userId)))
    .returning({
      id: post.id,
      title: post.title,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    })
    .then((res) => res[0]);

  return updatedPost ?? null;
}

/**
 * 投稿削除（投稿者本人確認付き）
 */
export async function deletePost(id: number, userId: string) {
  const deletedPost = await database
    .delete(post)
    .where(and(eq(post.id, id), eq(post.userId, userId)))
    .returning({
      id: post.id,
      title: post.title,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    })
    .then((res) => res[0]);

  return deletedPost ?? null;
}
