import { Posts } from '@/features/post/types';
import { FormattedDateTime } from '@/ui/widgets/FormattedDateTime';

type Props = {
  posts: Posts;
};

export const PostListUI: React.FC<Props> & { Empty: React.FC } = ({ posts }) => {
  return (
    <ul className="list">
      {posts.map((post) => (
        <li className="list-row" key={post.id}>
          <div>{post.title}</div>
          <div>
            <FormattedDateTime date={post.createdAt} />
          </div>
        </li>
      ))}
    </ul>
  );
};

const Empty: React.FC = () => {
  return <p>まだ投稿がありません</p>;
};

PostListUI.Empty = Empty;
