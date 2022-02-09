import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

import { fetchCoffeeStores } from '../../lib/coffee-stores';

import { StoreContext } from '../../store/store-context';

import { isEmpty } from '../../utils';

// import SpinnerLoading from '../../components/spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCoffee,
  faWalking,
} from '@fortawesome/free-solid-svg-icons';

export async function getStaticProps(staticProps) {
  const params = staticProps.params;

  const coffeeStores = await fetchCoffeeStores();
  const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
    return coffeeStore.id.toString() === params.id;
  });

  return {
    props: {
      coffeeStore: findCoffeeStoreById ? findCoffeeStoreById : {},
    },
  };
}

export async function getStaticPaths() {
  const coffeeStores = await fetchCoffeeStores();
  const paths = coffeeStores.map((coffeeStore) => {
    return {
      params: { id: coffeeStore.id.toString() },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (initialProps) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="text-coffee-100 bg-coffee-green bg-coffee-pattern h-[70vh] bg-no-repeat bg-cover flex items-center justify-center">
        <div className="container mx-auto p-6">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  const id = router.query.id;

  const [coffeeStore, setCoffeeStore] = useState(initialProps.coffeeStore);

  const {
    state: { coffeeStores },
  } = useContext(StoreContext);

  useEffect(() => {
    if (isEmpty(initialProps.coffeeStore)) {
      if (coffeeStores.length > 0) {
        const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
          return coffeeStore.id.toString() === id;
        });
        setCoffeeStore(findCoffeeStoreById);
      }
    }
  }, [id]);

  const { address, name, neighbourhood, distance, imgUrl } = coffeeStore;

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
                <span className="text-base">
                  <FontAwesomeIcon className="mr-2" icon={faArrowLeft} />
                </span>
                Back to Home
              </h2>
            </div>
          </a>
        </Link>

        <div className="container mx-auto sm:mb-10">
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 md:grid-cols-3 justify-items-stretch rounded-lg mb-10 w-full overflow-hidden">
            <div className="w-full sm:rounded-l-lg overflow-hidden relative md:col-span-2">
              <Image
                src={
                  imgUrl ||
                  'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                }
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
              <div className="mb-4 flex flex-col justify-evenly">
                <h2 className="text-coffee-600 font-normal pb-2">
                  {neighbourhood}
                </h2>
                <p className="text-coffee-600 font-light">{address}</p>
                <div className="flex flex-col pt-8">
                  <div>
                    <p className="text-coffee-600 font-normal text-lg pb-2">
                      <FontAwesomeIcon className="mr-2" icon={faWalking} />
                      {distance} m
                    </p>
                  </div>
                  <div className="text-coffee-600 text-lg font-normal ">
                    <p>
                      <FontAwesomeIcon className="mr-2" icon={faCoffee} />1
                    </p>
                  </div>
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
