import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LangProvider } from './lib/i18n'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'

function App() {
  return (
    <LangProvider>
      <Router>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LangProvider>
  )
}

export default App
