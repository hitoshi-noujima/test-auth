import { Suspense } from 'react';

import { Loading } from '@/ui/elements/Loading';

import { PostListContainer } from './container';

export const PostList: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PostListContainer />
    </Suspense>
  );
};
