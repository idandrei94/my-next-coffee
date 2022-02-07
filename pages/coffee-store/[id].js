import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import coffeeStoresData from '../../data/coffee-stores.json';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faArrowLeft, faCoffee } from '@fortawesome/free-solid-svg-icons';

export const getStaticProps = async (staticProps) => {
  const params = staticProps.params;
  return {
    props: {
      coffeeStore: coffeeStoresData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id;
      }),
    },
  };
};

export const getStaticPaths = async () => {
  const paths = coffeeStoresData.map((coffeeStore) => {
    return {
      params: { id: coffeeStore.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
};

const CoffeeStore = (props) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  const { address, name, neighbourhood, imgUrl } = props.coffeeStore;

  const handleUpvoteButton = () => {
    console.log('upvote');
  };

  return (
    <div className="bg-coffee-green bg-coffee-pattern bg-cover bg-center">
      <Head>
        <title>{name}</title>
      </Head>

      <div className="container mx-auto grid px-10 pt-10 pb-4 sm:p-8 md:px-20">
        <div className="mx-auto w-1/2 sm:pt-10">
          <Image
            src="/static/coffee-logo.svg"
            alt="My Next Coffee Logo"
            width={500}
            height={300}
            priority={true}
          />
        </div>

        <Link href="/">
          <a>
            <div className="text-coffee-300 font-normal mt-4 mb-10 text-xl hover:text-white transition ease-in-out duration-200">
              <h2>
                <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
                Back to Home
              </h2>
            </div>
          </a>
        </Link>

        <div className="container mx-auto sm:mb-10">
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 md:grid-cols-3 justify-items-stretch rounded-lg mb-10 w-full overflow-hidden">
            <div className="w-full sm:rounded-l-lg overflow-hidden relative md:col-span-2">
              <Image
                src={imgUrl}
                alt={name}
                width={600}
                height={360}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="flex flex-col items-start justify-between p-8 sm:px-6 bg-white rounded-b-lg sm:rounded-none sm:rounded-r-lg">
              <div>
                <h1 className="text-coffee-green sm:mt-6 mb-8 text-2xl">
                  {name}
                </h1>
              </div>
              <div className="mb-4">
                <h2 className="text-coffee-600 mb-4 font-normal">
                  {neighbourhood}
                </h2>
                <p className="text-coffee-600 sm:mb-2 font-light">{address}</p>
                <div className="text-coffee-600 text-2xl mt-8 font-normal">
                  <p>
                    <FontAwesomeIcon className="mr-3" icon={faCoffee} />1
                  </p>
                </div>

                <button
                  onClick={handleUpvoteButton}
                  className="mt-8 bg-coffee-50 rounded-full px-6 py-2 text-coffee-600 hover:text-coffee-50 hover:bg-coffee-600 transition ease-in-out duration-200"
                >
                  Upvote Café
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeStore;
