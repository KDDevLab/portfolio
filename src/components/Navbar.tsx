import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <div className="flex-1">
            <h1 className="text-2xl font-light text-gray-900">
              Kürsat's Portfolio
            </h1>
          </div>

          <ul className="flex-1 flex justify-center space-x-4 md:space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm md:text-lg font-light"
              >
                Über mich
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm md:text-lg font-light"
              >
                Werdegang
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm md:text-lg font-light"
              >
                Projekte
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-300 text-sm md:text-lg font-light"
              >
                Kontakt
              </button>
            </li>
          </ul>

          <div className="flex-1" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;