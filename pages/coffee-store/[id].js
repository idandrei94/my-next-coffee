import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';

const CoffeeStore = () => {
  const router = useRouter();
  const query = router.query.id;
  return (
    <div>
      <Head>
        <title>{query}</title>
      </Head>
      Coffee Shops Near Me {query}
      <Link href="/">
        <a>Back to Home</a>
      </Link>
      <Link href="/coffee-store/dynamic">
        <a>Go to page dynamic</a>
      </Link>
    </div>
  );
};

export default CoffeeStore;
