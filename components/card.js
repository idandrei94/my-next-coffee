import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPersonWalking } from '@fortawesome/pro-regular-svg-icons';

const Card = (props) => {
  const distanceToCafe = (Math.log(props.distance) * Math.LOG10E + 1) | 0;
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
            <h1 className="text-coffee-green text-xl line-clamp-1">
              {props.name}
            </h1>
            <p className="text-coffee-600 mt-1">{props.neighbourhood || ''}</p>
            <div className="flex justify-between w-full pr-3 pt-3">
              <div>
                <p className="text-coffee-600 font-normal text-base pb-1">
                  <FontAwesomeIcon className="mr-2" icon={faPersonWalking} />
                  {distanceToCafe > 3
                    ? (props.distance / 1000).toFixed(1) + ' km'
                    : props.distance + ' m'}
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
