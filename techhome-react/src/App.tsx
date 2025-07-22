import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import SobreNosotros from './pages/SobreNosotros'
import Servicios from './pages/Servicios'
import Contactenos from './pages/Contactenos'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contactenos" element={<Contactenos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
