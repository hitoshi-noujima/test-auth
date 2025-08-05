import 'server-only';

import { and, desc, eq } from 'drizzle-orm';

import { database } from '@/database';
import { post } from '@/database/schema';

import type * as schema from '@/database/schema';
import type { LibSQLDatabase } from 'drizzle-orm/libsql';

/**
 * 投稿データに関するRepository層
 */
export class PostRepository {
  private readonly db: LibSQLDatabase<typeof schema>;

  constructor() {
    this.db = database;
  }

  /**
   * ユーザーの全投稿を作成日時降順で取得
   */
  async getUserPosts(userId: string) {
    const result = await this.db.query.post.findMany({
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
  async getPostById(id: number, userId: string) {
    const result = await this.db.query.post.findFirst({
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
  async createPost(title: string, userId: string) {
    const newPost = await this.db
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
  async updatePost(id: number, title: string, userId: string) {
    const updatedPost = await this.db
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
  async deletePost(id: number, userId: string) {
    const deletedPost = await this.db
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
}
