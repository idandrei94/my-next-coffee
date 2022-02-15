import { useState, useEffect, useContext } from 'react';
import { ACTION_TYPES, StoreContext } from '../store/store-context';
import Head from 'next/head';
import Banner from '../components/banner';
import Card from '../components/card';
import VideoPlayer from '../components/video-player';

import { fetchCoffeeStores } from '../lib/coffee-stores';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee as fasFaCoffee,
  faFaceHandOverMouth,
  faPersonWalking,
} from '@fortawesome/pro-solid-svg-icons';

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

  const [coffeeStoresError, setCoffeeStoresError] = useState(null);

  const { dispatch, state } = useContext(StoreContext);

  const { coffeeStores, latLong } = state;

  useEffect(() => {
    const setCoffeeStoresByLocation = async () => {
      if (latLong) {
        try {
          const response = await fetch(
            `/api/getCoffeeStoresByLocation?latLong=${latLong}&limit=31`
          );
          const coffeeStores = await response.json();

          dispatch({
            type: ACTION_TYPES.SET_COFFEE_STORES,
            payload: { coffeeStores },
          });
          setCoffeeStoresError('');
        } catch (error) {
          //set error
          setCoffeeStoresError(error.message);
        }
      }
    };
    setCoffeeStoresByLocation();
  }, [latLong, dispatch]);

  const handleOnBannerBtnClick = () => {
    handleTrackLocation();
  };

  return (
    <div>
      <Head>
        <title>My Next Coffee | Home</title>
      </Head>
      <main
        className={
          isFindingLocation || coffeeStores.length > 0
            ? 'flex flex-col items-center justify-between bg-coffee-green bg-coffee-pattern bg-cover bg-center min-h-[90vh] md:min-h-min py-10 md:p-10 lg:px-16 md:pb-20'
            : 'flex flex-col md:flex-row items-center justify-between bg-coffee-green bg-coffee-pattern bg-cover bg-center min-h-[90vh] md:min-h-min py-10 md:p-10 lg:px-16 md:pb-20'
        }
      >
        <Banner
          buttonText={
            isFindingLocation ? (
              <>
                <FontAwesomeIcon icon={fasFaCoffee} spin />
              </>
            ) : (
              <>Find My Café</>
            )
          }
          handleOnClick={handleOnBannerBtnClick}
        />

        {isFindingLocation || coffeeStores.length > 0 ? (
          <></>
        ) : (
          <div className="hidden md:flex md:items-center md:justify-center container mx-auto xl:w-3/5 w-full md:p-0 md:w-1/2 md:pl-6">
            {/* Video */}
            <VideoPlayer />
          </div>
        )}

        {locationErrorMsg && (
          <p className="text-coffee-100 text-xl">
            <FontAwesomeIcon icon={faFaceHandOverMouth} beat />
            &nbsp; Oops! Something went wrong: <br /> {locationErrorMsg}
          </p>
        )}

        {coffeeStoresError && (
          <p className="text-coffee-100 text-xl">
            <FontAwesomeIcon icon={faFaceHandOverMouth} beat />
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

        <div className="block md:hidden container mx-auto w-5/6 pb-10 flex-none">
          {/* Video */}
          <VideoPlayer />
        </div>
      </main>
    </div>
  );
}
