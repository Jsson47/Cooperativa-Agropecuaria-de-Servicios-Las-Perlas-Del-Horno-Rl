import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Jamaica Honey Grains Basic</h3>
            <div className="mb-4">
              <img
                src="https://www.unan.edu.ni/wp-content/uploads/unan-managua-marca-institucional-2904202002.jpg"
                alt="Honey Wines Australia Logo"
                className="h-20"
              />
            </div>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="mt-4">
              <a href="https://www.unan.edu.ni/wp-content/uploads/Somos-UNAN-Managua.png" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://www.unan.edu.ni/wp-content/uploads/Somos-UNAN-Managua.png"
                  alt="Liquor Act"
                  className="h-16"
                />
              </a>
            </div>
          </div>

          {/* Featured products */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Featured Products</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
                  alt="Haste Potion"
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <Link to="/product/haste-potion" className="text-white hover:text-primary text-sm">
                    Haste Potion Mead (Coffee)
                  </Link>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 text-primary fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs ml-1">$40.00</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
                  alt="Health Potion"
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <Link to="/product/health-potion" className="text-white hover:text-primary text-sm">
                    Health Potion Mead (Chilli & Cherry)
                  </Link>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-3 h-3 text-primary fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs ml-1">$40.00</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <img
                  src="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
                  alt="Dragon Knife"
                  className="w-10 h-10 object-cover rounded"
                />
                <div>
                  <Link to="/product/dragon-knife" className="text-white hover:text-primary text-sm">
                    Skyrim Dragon Engraved Camel Bone Knife
                  </Link>
                  <div className="text-xs mt-1">
                    <span className="line-through">$150.00</span>
                    <span className="ml-1">$135.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div>
                <h4 className="text-sm font-semibold">Teléfono:</h4>
                <a href="tel:50578841792" className="text-white hover:text-primary">50578841792</a>
              </div>
              <div>
                <p className="text-sm">Managua</p>
                <p className="text-sm">Estelí</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation links */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <li><Link to="/" className="text-sm hover:text-primary">Home</Link></li>
            <li><Link to="/buy-mead" className="text-sm hover:text-primary">Shop</Link></li>
            <li><Link to="/latest-news" className="text-sm hover:text-primary">Latest News</Link></li>
            <li><Link to="/about-us" className="text-sm hover:text-primary">About Us</Link></li>
            <li><Link to="/contact-us" className="text-sm hover:text-primary">Contact Us</Link></li>
            <li><Link to="/mead-tasting" className="text-sm hover:text-primary">Honey Tasting</Link></li>
            <li><Link to="/promotions" className="text-sm hover:text-primary">Promotions</Link></li>
            <li><Link to="/stay-with-us" className="text-sm hover:text-primary">Stay With Us</Link></li>
            <li><Link to="/stargazing-experience" className="text-sm hover:text-primary">Stargazing Experience</Link></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm">
          <p>Copyright 2025 <strong>www.lasdiosas.com</strong></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
