import React from 'react';

function Main() {
  return (
    <div className="w-full">
      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-white py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              
              
              
            </div>
            <div className="flex-shrink-0">
              
            </div>
          </div>
        </div>
      </section>

      {/* Education & Career Section */}
      <section id="education" className="min-h-screen bg-gray-50 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Mein Werdegang</h2>
          
          <div className="space-y-12">
            {/* Schulischer Werdegang */}
            <div className="bg-white p-8 rounded-none shadow-none border border-gray-100">
              
              
            </div>

            {/* Beruflicher Werdegang */}
            <div className="bg-white p-8 rounded-none shadow-none border border-gray-100">
              
              
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen bg-white py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Meine Projekte</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project Card Template */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Projekt Name</h3>
              <p className="text-gray-700 mb-4">Kurze Beschreibung des Projekts...</p>
              <a 
                href="https://github.com/KDDevLab/projekt-name" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-cyan-500 hover:text-cyan-600 font-medium"
              >
                Auf GitHub ansehen →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-50 py-32 px-4 pb-32">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Kontakt</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-12 font-light">
              Interessiert an einer Zusammenarbeit? Kontaktieren Sie mich gerne!
            </p>
            <div className="space-y-6">
              
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;