import Link from 'next/link';
import DisplayContent from '../../components/post/DisplayContent';
import UpdateContent from '../../components/post/UpdateContent';

const Post = ({ id /* TODO remove this; we keep this for navigation for now */ }) => (
  <>
    <h1>Post [TODO get ID from store]</h1>
    <DisplayContent />
    <UpdateContent />
    <div>
      <Link href='/'>
        <a>Home</a>
      </Link>{' '}
      <Link href='/post/[id]' as={`/post/${id === '1' ? '2' : '1'}`}>
        <a>The other post</a>
      </Link>
    </div>
  </>
);

Post.getInitialProps = async ({ mobxStore: { postStore }, query }) => {
  await postStore.fetch(query.id);
  return {
    id: query.id,
  };
};

export default Post;
