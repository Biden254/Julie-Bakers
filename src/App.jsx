import { Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Order from './pages/Order'
import Catalog from './pages/Catalog'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/order" element={<Order />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Analytics />
    </div>
  )
}

export default App
