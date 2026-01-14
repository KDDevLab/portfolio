function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between">
        <span className="text-sm md:text-base font-light">© {new Date().getFullYear()} Kürsat</span>
        <div className="flex items-center space-x-6">
          <button className="text-sm md:text-base hover:text-gray-200 transition-colors duration-300 font-light">
            Datenschutz
          </button>
          <button className="text-sm md:text-base hover:text-gray-200 transition-colors duration-300 font-light">
            Impressum
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;