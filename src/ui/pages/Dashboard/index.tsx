import { Heading } from '@/ui/elements/Heading';
import { PostList } from '@/ui/features/auth/PostList';
import { SignOutButton } from '@/ui/features/auth/SignOutButton';

export const Dashboard: React.FC = () => {
  return (
    <>
      <Heading level={1}>ダッシュボード</Heading>
      <div className="mt-8">
        <SignOutButton />

        <div className="mt-2">
          <PostList />
        </div>
      </div>
    </>
  );
};
