import './App.css'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 mt-16 bg-white">
        <Main />
        <Footer />
      </main>
    </div>
  )
}
export default App
