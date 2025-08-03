import { Posts } from '@/features/auth/post/types';

type Props = {
  posts: Posts;
};

export const PostListUI: React.FC<Props> & { Empty: React.FC } = ({ posts }) => {
  return (
    <ul className="list">
      {posts.map((post) => (
        <li className="list-row" key={post.id}>
          <div>{post.title}</div>
          <div>{post.createdAt.toLocaleDateString('ja-JP')}</div>
        </li>
      ))}
    </ul>
  );
};

const Empty: React.FC = () => {
  return <p>まだ投稿がありません</p>;
};

PostListUI.Empty = Empty;
