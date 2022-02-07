import Image from 'next/image';

const Banner = (props) => {
  return (
    <div className="flex flex-col items-center py-16 px-20">
      <Image
        src="/static/coffee-logo.svg"
        alt="My Next Coffee Logo"
        width={500}
        height={300}
        priority={true}
      />
      <h1 className="text-2xl tracking-wide text-coffee-300 mt-8 text-center">
        Discover your local coffee shops!
      </h1>
      <button
        onClick={props.handleOnClick}
        className="bg-coffee-50 mt-16 mb-2 px-7 py-3 text-xl rounded-full text-coffee-600 hover:bg-white hover:text-coffee-green transition ease-in-out duration-200 tracking-wide"
      >
        {props.buttonText}
      </button>
    </div>
  );
};

export default Banner;
