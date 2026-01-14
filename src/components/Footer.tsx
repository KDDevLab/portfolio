function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <span className="text-sm font-light mb-4 md:mb-0">© {new Date().getFullYear()} Kürsat</span>
          <div className="flex space-x-6">
            <button className="text-sm hover:text-white transition-colors duration-200 font-light">
              Datenschutz
            </button>
            <button className="text-sm hover:text-white transition-colors duration-200 font-light">
              Impressum
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;