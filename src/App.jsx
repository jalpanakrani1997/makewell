import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './component/Header'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Manufacture from './pages/Manufacture'
import Gallery from './pages/Gallery'
import Domestic from './menupage/Domestic'
import Export from './menupage/Export'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/manufacture" element={<Manufacture />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/product/domestic" element={<Domestic />} />
        <Route path="/product/export" element={<Export />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
