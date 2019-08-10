import Link from 'next/link';

const Post = ({ post }) => (
  <>
    <h1>Post</h1>
    <p>{post}</p>
    <div><Link href="/"><a>Home</a></Link></div>
  </>
);

Post.getInitialProps = async ({mobxStore: {postStore}, query}) => {
  await postStore.fetch(query.id);
  return {
    post: postStore.post,
  }
}

export default Post;
