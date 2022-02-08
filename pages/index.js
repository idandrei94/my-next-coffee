import Head from 'next/head';
import Banner from '../components/banner';
import Card from '../components/card';
import { fetchCoffeeStores } from '../lib/coffee-stores';

export async function getStaticProps(context) {
  const coffeeStores = await fetchCoffeeStores();
  return {
    props: { coffeeStores }, // will be passed to the page component as props
  };
}

export default function Home(props) {
  const handleOnBannerBtnClick = () => {
    console.log('Hi, banner button');
  };
  return (
    <div>
      <Head>
        <title>My Next Coffee | Home</title>
      </Head>
      <main className="flex flex-col items-center bg-coffee-green bg-coffee-pattern bg-cover bg-center">
        <Banner
          buttonText="Find My Café"
          handleOnClick={handleOnBannerBtnClick}
        />
        {props.coffeeStores.length > 0 && (
          <div className="w-2/3 sm:w-full container sm:px-4">
            <h1 className="text-coffee-100 text-4xl py-2">Oslo City</h1>
            <div className="py-6 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10 sm:w-full">
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
