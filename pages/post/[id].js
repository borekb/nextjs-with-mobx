import Link from 'next/link';
import DisplayContent from '../../components/post/DisplayContent';
import UpdateContent from '../../components/post/UpdateContent';
import { useMobxStores } from '../../stores/stores';

const Post = () => {
  const { postStore: {postId} } = useMobxStores();
  return (
    <>
      <h1>Post {postId}</h1>
      <DisplayContent />
      <UpdateContent />
      <div>
        <Link href='/'>
          <a>Home</a>
        </Link>{' '}
        <Link href='/post/[id]' as={`/post/${postId === '1' ? '2' : '1'}`}>
          <a>The other post</a>
        </Link>
      </div>
    </>
  );
};

Post.getInitialProps = async ({ mobxStores: { postStore }, query }) => {
  await postStore.fetch(query.id);
  return {
    id: query.id,
  };
};

export default Post;
