import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/MAKEWELL LOGO FINAL SINCE.jpg'
import { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productDropdown, setProductDropdown] = useState(false)
  const navigate = useNavigate();

  // Desktop Products click handler
  function handleProductsClick(e) {
    e.preventDefault();
    navigate('/product');
    setProductDropdown(v => !v);
  }

  // Dropdown mouse events
  function openDropdown() { setProductDropdown(true); }
  function closeDropdown() { setProductDropdown(false); }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between h-20 px-5">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/">
            <img src={logo} alt="Makewell Logo" className="h-14 w-auto object-contain" />
          </Link>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-lg font-semibold items-center">
          <Link to="/" className="text-gray-800 hover:text-[#2E3192] transition-colors">Home</Link>
          <Link to="/about" className="text-gray-800 hover:text-[#2E3192] transition-colors">About</Link>
          {/* Products Dropdown */}
          <div className="relative group"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <button className="text-gray-800 hover:text-[#2E3192] transition-colors flex items-center gap-1 focus:outline-none" onClick={handleProductsClick}>
              Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {productDropdown && (
              <div className="absolute left-0 mt-0 w-40 bg-white border rounded shadow-lg z-50 flex flex-col"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <Link to="/product/domestic" className="px-4 py-2 text-gray-800 hover:bg-[#F3F4F6] hover:text-[#2E3192]" onClick={() => setProductDropdown(false)}>Domestic</Link>
                <Link to="/product/export" className="px-4 py-2 text-gray-800 hover:bg-[#F3F4F6] hover:text-[#2E3192]" onClick={() => setProductDropdown(false)}>Export</Link>
              </div>
            )}
          </div>
          <Link to="/gallery" className="text-gray-800 hover:text-[#2E3192] transition-colors">Gallery</Link>
          <Link to="/manufacture" className="text-gray-800 hover:text-[#2E3192] transition-colors">Manufacture</Link>
        </nav>
        {/* Desktop Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="bg-gradient-to-r from-[#a16794] to-[#4d4f96] text-white px-5 py-2 rounded-md shadow hover:from-[#2E3192] hover:to-[#A1468C] transition-all font-bold">Contact</Link>
        </div>
        {/* Mobile menu icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Open menu">
            <span className="text-3xl text-gray-800 font-bold">≡</span>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full z-50 animate-fade-in">
          <nav className="flex flex-col items-center space-y-4 py-6 text-lg font-semibold">
            <Link to="/" className="text-gray-800 hover:text-[#2E3192] transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-[#2E3192] transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
            {/* Products Dropdown in Mobile */}
            <div className="w-full flex flex-col items-center">
              <Link to="/product" className="text-gray-800 font-semibold hover:text-[#2E3192]" onClick={() => setMenuOpen(false)}>Products</Link>
              <div className="flex flex-col w-32 mx-auto -mt-4">
                <Link to="/product/domestic" className="pl-4 py-2 text-[#2E3192] hover:text-[#2E3192]" onClick={() => setMenuOpen(false)}>Domestic</Link>
                <Link to="/product/export" className="pl-4 py-2 text-[#2E3192] hover:text-[#2E3192]" onClick={() => setMenuOpen(false)}>Export</Link>
              </div>
            </div>
            <Link to="/gallery" className="text-gray-800 hover:text-[#2E3192] transition-colors" onClick={() => setMenuOpen(false)}>Gallery</Link>
            <Link to="/manufacture" className="text-gray-800 hover:text-[#2E3192] transition-colors" onClick={() => setMenuOpen(false)}>Manufacture</Link>
            <Link to="/contact" className="bg-[#2E3192] text-white px-5 py-2 rounded-full shadow hover:from-[#2E3192] hover:to-[#A1468C] transition-all font-bold" onClick={() => setMenuOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}

