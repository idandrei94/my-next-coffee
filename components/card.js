import Image from 'next/image';
import Link from 'next/link';

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
            <h1 className="text-coffee-green mb-1">{props.name}</h1>
            <h2 className="text-coffee-600 mb-2 font-light">
              {props.neighbourhood}
            </h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
