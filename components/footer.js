import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faDribbble,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-coffee-600 bg-coffee-pattern bg-cover bg-center min-h-[10vh]">
      <footer>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="#" className="text-coffee-300 hover:text-coffee-50">
              <span>
                <FontAwesomeIcon icon={faFacebook} />
              </span>
            </a>

            <a href="#" className="text-coffee-300 hover:text-coffee-50">
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </a>

            <a href="#" className="text-coffee-300 hover:text-coffee-50">
              <span>
                <FontAwesomeIcon icon={faTwitter} />
              </span>
            </a>

            <a href="#" className="text-coffee-300 hover:text-coffee-50">
              <span>
                <FontAwesomeIcon icon={faGithub} />
              </span>
            </a>

            <a href="#" className="text-coffee-300 hover:text-coffee-50">
              <span>
                <FontAwesomeIcon icon={faDribbble} />
              </span>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-coffee-300">
              &copy; {currentYear} My Next Coffee, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
