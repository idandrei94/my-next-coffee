const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="flex items-center justify-center w-full p-10 bg-coffee-brown text-white bg-coffee-pattern bg-cover tracking-wide">
        <p>My Next Coffee &copy; {currentYear}</p>
      </footer>
    </div>
  );
};

export default Footer;
