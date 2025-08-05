import { PostRepository } from '@/features/post/repository';

export type Posts = Awaited<ReturnType<PostRepository['getUserPosts']>>;
