import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Sugerencias from './pages/Sugerencias'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sugerencias" element={<Sugerencias />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App