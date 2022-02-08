import Image from 'next/image';
import Link from 'next/link';

// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faCoffee, faWalking } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  return (
    <Link href={props.href}>
      <a>
        <div className="overflow-hidden rounded-lg hover:scale-110 transition-transform duration-200 ease-in-out">
          <Image
            src={props.imgUrl}
            alt={props.name}
            width={260}
            height={160}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />

          <div className="flex flex-col items-start justify-between p-8 sm:p-4 bg-white">
            <h1 className="text-coffee-green my-2 text-xl">{props.name}</h1>
            <div className="flex flex-col pt-3">
              <div>
                <p className="text-coffee-600 font-light text-base pb-1">
                  <FontAwesomeIcon className="mr-2" icon={faWalking} />
                  {props.distance} m
                </p>
              </div>
              <div className="text-coffee-600 text-base font-light">
                <p>
                  <FontAwesomeIcon className="mr-2" icon={faCoffee} />1
                </p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
