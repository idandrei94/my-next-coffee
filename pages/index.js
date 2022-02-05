import Head from 'next/head';
import Banner from '../components/banner';

export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('Hi, banner button');
  };
  return (
    <div>
      <Head>
        <title>My Next Coffee | Home</title>
      </Head>
      <main className="flex flex-col items-center w-full bg-coffee-green bg-coffee-pattern bg-cover bg-center">
        <Banner
          buttonText="Find My Café"
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>
    </div>
  );
}
