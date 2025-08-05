import { Heading } from '@/ui/elements/Heading';
import { SignOutButton } from '@/ui/features/auth/SignOutButton';
import { CreatePostForm } from '@/ui/features/post/CreatePostForm';
import { PostList } from '@/ui/features/post/PostList';

export const Dashboard: React.FC = () => {
  return (
    <>
      <Heading level={1}>ダッシュボード</Heading>
      <div className="mt-8">
        <SignOutButton />

        <div className="mt-2">
          <CreatePostForm />
          <PostList />
        </div>
      </div>
    </>
  );
};
