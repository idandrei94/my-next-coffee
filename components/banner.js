import Image from 'next/image';

const Banner = (props) => {
  return (
    <div className="flex flex-col items-center flex-1 md:pr-6 mx-10 md:m-0 h-full mb-16 justify-between">
      <Image
        src="/static/coffee-logo.svg"
        alt="My Next Coffee Logo"
        width={500}
        height={300}
        priority={true}
      />
      <h1 className="text-2xl tracking-wide text-coffee-300 text-center xl:mt-10 mt-6 w-5/6 sm:w-full">
        Discover your local coffee shops!
      </h1>
      <button
        onClick={props.handleOnClick}
        className="bg-coffee-50 px-7 py-3 text-xl rounded-full text-coffee-600 hover:bg-white hover:text-coffee-green transition ease-in-out duration-200 tracking-wide xl:mt-24 mt-14"
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
