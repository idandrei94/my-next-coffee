const Footer = () => {
  let currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="flex items-center justify-center w-full p-20 bg-coffee-600 text-coffee-100 bg-coffee-pattern bg-cover tracking-wide">
        <p>My Next Coffee &copy; {currentYear}</p>
      </footer>
    </div>
  );
};

export default Footer;
