import Link from 'next/link';

const Post = ({ post, id }) => (
  <>
    <h1>Post</h1>
    <p>{post}</p>
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
    post: postStore.post,
    id: query.id,
  };
};

export default Post;
