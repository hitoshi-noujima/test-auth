import { getUserPosts } from '../helpers/queries';

export type Posts = Awaited<ReturnType<typeof getUserPosts>>;
