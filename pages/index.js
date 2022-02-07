import Head from 'next/head';
import Banner from '../components/banner';
import Card from '../components/card';
import coffeeStoresData from '../data/coffee-stores.json';

export async function getStaticProps(context) {
  return {
    props: { coffeeStores: coffeeStoresData }, // will be passed to the page component as props
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
                    imgUrl={coffeeStore.imgUrl}
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
