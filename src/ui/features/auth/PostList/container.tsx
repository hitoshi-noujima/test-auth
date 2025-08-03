import { getAllPostsAction } from '@/features/auth/post/actions/get-all';

import { PostListUI } from './ui';

export const PostListContainer: React.FC = async () => {
  const posts = await getAllPostsAction();

  if (posts.length === 0) {
    return <PostListUI.Empty />;
  }

  return <PostListUI posts={posts} />;
};
