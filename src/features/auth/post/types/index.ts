import { getUserPosts } from '../queries';

export type Posts = Awaited<ReturnType<typeof getUserPosts>>;
