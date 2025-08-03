import { z } from 'zod';

const postIdSchema = z.number({
  required_error: '投稿IDは必須です',
});

const titleSchema = z
  .string({
    required_error: 'タイトルは必須です',
  })
  .max(100, 'タイトルは100文字以内で入力してください');

export const createPostSchema = z.object({
  title: titleSchema,
});

export type CreatePostInput = z.infer<typeof createPostSchema>;

export const updatePostSchema = z.object({
  id: postIdSchema,
  title: titleSchema,
});

export type UpdatePostInput = z.infer<typeof updatePostSchema>;

export const deletePostSchema = z.object({
  id: postIdSchema,
});

export type DeletePostInput = z.infer<typeof deletePostSchema>;
