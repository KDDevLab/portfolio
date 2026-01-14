import './App.css'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { darkTheme } from './theme'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Impressum from './components/Impressum'
import Datenschutz from './components/Datenschutz'

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100 font-sans">
          <Navbar />
          <main className="flex-1 mt-20">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/impressum" element={<Impressum />} />
              <Route path="/datenschutz" element={<Datenschutz />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
