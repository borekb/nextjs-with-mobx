import Link from 'next/link';

const Index = () => (
  <>
    <h1>MobX and Next.js example</h1>
    <ul>
      <li><Link href="/post/[id]" as="/post/1"><a>Post 1</a></Link></li>
      <li><Link href="/post/[id]" as="/post/2"><a>Post 2</a></Link></li>
    </ul>
  </>
);

export default Index;
