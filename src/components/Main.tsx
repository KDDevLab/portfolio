import React from 'react';

function Main() {
  return (
    <div className="w-full">
      {/* About Me Section */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-light text-gray-900 leading-tight">
                Hi, ich bin Kürsat
              </h2>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Ein leidenschaftlicher Entwickler, der moderne Technologien nutzt, um innovative Lösungen zu schaffen.
              </p>
              <div className="flex space-x-4">
                <button className="bg-gray-900 text-white px-6 py-3 rounded-none hover:bg-gray-800 transition-colors duration-200 font-light">
                  Mehr erfahren
                </button>
                <button className="border border-gray-900 text-gray-900 px-6 py-3 rounded-none hover:bg-gray-900 hover:text-white transition-colors duration-200 font-light">
                  Projekte ansehen
                </button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Career Section */}
      <section id="education" className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Mein Werdegang</h2>
          <div className="space-y-12">
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Bachelor in Informatik</h3>
              <p className="text-gray-600 font-light">Universität XYZ, 2018 - 2022</p>
              <p className="mt-4 text-gray-700 font-light">
                Fokus auf Softwareentwicklung und Datenstrukturen.
              </p>
            </div>
            <div className="bg-white p-8 border border-gray-200">
              <h3 className="text-2xl font-light text-gray-900 mb-4">Frontend Entwickler</h3>
              <p className="text-gray-600 font-light">Firma ABC, 2022 - Jetzt</p>
              <p className="mt-4 text-gray-700 font-light">
                Entwicklung von Webanwendungen mit React und TypeScript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center justify-center bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto w-full">
          <h2 className="text-4xl font-light text-gray-900 mb-16 text-center">Meine Projekte</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Projekt 1</h3>
              <p className="text-gray-600 font-light mb-4">
                Eine moderne Webanwendung gebaut mit React.
              </p>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-light">Mehr erfahren →</a>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Projekt 2</h3>
              <p className="text-gray-600 font-light mb-4">
                Ein API-basiertes Backend-System.
              </p>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-light">Mehr erfahren →</a>
            </div>
            <div className="bg-gray-50 p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200">
              <h3 className="text-xl font-light text-gray-900 mb-4">Projekt 3</h3>
              <p className="text-gray-600 font-light mb-4">
                Ein mobiles App-Projekt.
              </p>
              <a href="#" className="text-gray-900 hover:text-gray-700 font-light">Mehr erfahren →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 py-20 px-4">
        <div className="max-w-7xl mx-auto w-full text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8">Kontakt</h2>
          <p className="text-xl text-gray-600 font-light mb-12 max-w-2xl mx-auto">
            Interessiert an einer Zusammenarbeit? Kontaktieren Sie mich gerne!
          </p>
          <div className="space-y-4">
            <div className="flex justify-center space-x-8">
              <a href="mailto:kursat@example.com" className="text-gray-900 hover:text-gray-700 transition-colors duration-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/kursat" className="text-gray-900 hover:text-gray-700 transition-colors duration-200">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <form className="max-w-md mx-auto space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 bg-white font-light" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 bg-white font-light" />
              <textarea placeholder="Nachricht" rows={4} className="w-full p-3 border border-gray-300 bg-white font-light"></textarea>
              <button type="submit" className="w-full bg-gray-900 text-white py-3 rounded-none hover:bg-gray-800 transition-colors duration-200 font-light">
                Senden
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;