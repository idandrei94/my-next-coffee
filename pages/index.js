import { useState, useEffect, useContext } from 'react';
import { ACTION_TYPES, StoreContext } from '../store/store-context';
import Head from 'next/head';
import Banner from '../components/banner';
import Card from '../components/card';
import VideoPlayer from '../components/video-player';
import { fetchCoffeeStores } from '../lib/coffee-stores';
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faCoffee, faSurprise } from '@fortawesome/free-solid-svg-icons';

import useTrackLocation from '../hooks/use-track-location';

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: { coffeeStores }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const { handleTrackLocation, locationErrorMsg, isFindingLocation } =
    useTrackLocation();

  // const [coffeeStores, setCoffeeStores] = useState('');

  const [coffeeStoresError, setCoffeeStoresError] = useState(null);

  const { dispatch, state } = useContext(StoreContext);

  const { coffeeStores, latLong } = state;

  console.log({ latLong, locationErrorMsg });

  useEffect(async () => {
    if (latLong) {
      try {
        const response = await fetch(
          `/api/getCoffeeStoresByLocation?latLong=${latLong}&limit=31`
        );
        const coffeeStores = await response.json();

        // setCoffeeStores(fetchedCoffeeStores);
        dispatch({
          type: ACTION_TYPES.SET_COFFEE_STORES,
          payload: { coffeeStores },
        });
        setCoffeeStoresError('');
      } catch (error) {
        //set error
        console.log({ error });
        setCoffeeStoresError(error.message);
      }
    }
  }, [latLong]);

  const handleOnBannerBtnClick = () => {
    console.log('Hi, banner button');

    handleTrackLocation();
  };

  return (
    <div>
      <Head>
        <title>My Next Coffee | Home</title>
      </Head>
      <main className="flex flex-col items-center bg-coffee-green bg-coffee-pattern bg-contain bg-center">
        <Banner
          buttonText={
            isFindingLocation ? (
              <>
                <FontAwesomeIcon icon={faCoffee} />
                &nbsp; ...
              </>
            ) : (
              <>Find My Café</>
            )
          }
          handleOnClick={handleOnBannerBtnClick}
        />

        {/* Video */}
        <VideoPlayer />

        {locationErrorMsg && (
          <p className="text-coffee-100 text-xl">
            <FontAwesomeIcon icon={faSurprise} />
            &nbsp; Oops! Something went wrong: <br /> {locationErrorMsg}
          </p>
        )}

        {coffeeStoresError && (
          <p className="text-coffee-100 text-xl">
            <FontAwesomeIcon icon={faSurprise} />
            &nbsp; Oops! Something went wrong: <br /> {coffeeStoresError}
          </p>
        )}

        {/* Rendered list */}
        {coffeeStores.length > 0 && (
          <div className="w-2/3 sm:w-full container sm:px-4 md:px-14">
            <h1 className="text-coffee-100 text-4xl py-2">
              Coffee shops near me
            </h1>
            <div className="py-6 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-10 sm:w-full">
              {coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    neighbourhood={coffeeStore.neighbourhood}
                    distance={coffeeStore.distance}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                    }
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                );
              })}
            </div>
          </div>
        )}

        {props.coffeeStores.length > 0 && (
          <div className="w-2/3 sm:w-full container sm:px-4 md:px-14">
            <h1 className="text-coffee-100 text-4xl py-2">Oslo City</h1>
            <div className="py-6 container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 mb-10 sm:w-full">
              {props.coffeeStores.map((coffeeStore) => {
                return (
                  <Card
                    key={coffeeStore.id}
                    name={coffeeStore.name}
                    neighbourhood={coffeeStore.neighbourhood}
                    distance={coffeeStore.distance}
                    imgUrl={
                      coffeeStore.imgUrl ||
                      'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
                    }
                    href={`/coffee-store/${coffeeStore.id}`}
                  />
                );
              })}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

// ☕️ ...
