import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-light text-gray-900 tracking-wide">
              Kürsat's Portfolio
            </h1>
          </div>
          <ul className=" md:flex space-x-8">
            <li>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-light text-base"
              >
                Über mich
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-light text-base"
              >
                Werdegang
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-light text-base"
              >
                Projekte
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-light text-base"
              >
                Kontakt
              </button>
            </li>
          </ul>
        
        </div>
      </div>
    </nav>
  );
};

export default Navbar;