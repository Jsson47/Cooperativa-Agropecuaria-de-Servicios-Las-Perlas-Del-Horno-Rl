import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartDropdownOpen, setCartDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleCartDropdown = () => {
    setCartDropdownOpen(!cartDropdownOpen);
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-primary text-white py-1 px-4 flex justify-between items-center">
        <div className="text-sm font-medium">Jamaica, Miel, Granos Básicos</div>
        <div className="flex items-center space-x-4">
          <a href="tel:50578841792" className="text-sm hover:underline">50578841792</a>
          <div className="flex space-x-2">
            <a href="https://www.facebook.com/emprendeint/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/emprendeint/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white py-2 px-4 md:py-3 border-b">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src="https://www.unan.edu.ni/wp-content/uploads/unan-managua-marca-institucional-2904202002.jpg"
              alt="Jamaica Honey Grains Basic Logo"
              className="h-16"
            />
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark p-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/buy-mead" className="nav-link">SHOP</Link>
            <Link to="/latest-news" className="nav-link">LATEST NEWS</Link>
            <Link to="/about-us" className="nav-link">ABOUT US</Link>
            <Link to="/contact-us" className="nav-link">CONTACT US</Link>
            <Link to="/mead-tasting" className="nav-link">MEAD TASTING</Link>
            <Link to="/promotions" className="nav-link">PROMOTIONS</Link>
            <Link to="/stay-with-us" className="nav-link">STAY WITH US</Link>
            <Link to="/stargazing-experience" className="nav-link">STARGAZING EXPERIENCE</Link>
          </nav>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/login" className="text-xs uppercase font-medium hover:text-primary">Login</Link>
            <div className="relative group">
              <button
                onClick={toggleCartDropdown}
                className="flex items-center focus:outline-none"
              >
                <span className="text-xs uppercase font-medium hover:text-primary">CART / $0.00</span>
                <div className="ml-1 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center">
                  <span className="text-xs">0</span>
                </div>
              </button>

              {cartDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-white shadow-lg border border-gray-200 rounded p-4 z-10">
                  <p className="text-gray-500 text-sm">No products in the cart.</p>
                  <Link to="/buy-mead" className="btn-primary mt-3 text-sm w-full">Return to shop</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-white border-b shadow-sm">
          <div className="container mx-auto py-3 px-4 space-y-2">
            <Link to="/" className="block py-1 border-b border-gray-100">HOME</Link>
            <Link to="/buy-mead" className="block py-1 border-b border-gray-100">MEAD SHOP</Link>
            <Link to="/latest-news" className="block py-1 border-b border-gray-100">LATEST NEWS</Link>
            <Link to="/about-us" className="block py-1 border-b border-gray-100">ABOUT US</Link>
            <Link to="/contact-us" className="block py-1 border-b border-gray-100">CONTACT US</Link>
            <Link to="/mead-tasting" className="block py-1 border-b border-gray-100">MEAD TASTING</Link>
            <Link to="/promotions" className="block py-1 border-b border-gray-100">PROMOTIONS</Link>
            <Link to="/stay-with-us" className="block py-1 border-b border-gray-100">STAY WITH US</Link>
            <Link to="/stargazing-experience" className="block py-1 border-b border-gray-100">STARGAZING EXPERIENCE</Link>
            <Link to="/login" className="block py-1 border-b border-gray-100">LOGIN</Link>
            <Link to="/cart" className="block py-1">CART / $0.00 (0)</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
