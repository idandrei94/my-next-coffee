const Footer = () => {
  let currentYear = new Date().getFullYear();

  return (
    <div className="bg-coffee-600 text-coffee-100 bg-coffee-pattern bg-cover bg-center">
      <footer className="flex items-center justify-center w-full p-20  tracking-wide">
        <p>My Next Coffee &copy; {currentYear}</p>
      </footer>
    </div>
  );
};

export default Footer;
