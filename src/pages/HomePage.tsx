import { Link } from 'react-router-dom';

// Star component to avoid array mapping with index keys
const Star = ({ filled }: { filled: boolean }) => {
  return (
    <svg
      className={`w-4 h-4 ${filled ? 'text-primary' : 'text-gray-300'} fill-current`}
      viewBox="0 0 24 24"
    >
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
};

// StarRating component that doesn't use array indices as keys
const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      <Star filled={rating >= 1} />
      <Star filled={rating >= 2} />
      <Star filled={rating >= 3} />
      <Star filled={rating >= 4} />
      <Star filled={rating >= 5} />
    </div>
  );
};

// Product Card component for the product showcase
const ProductCard = ({
  image,
  title,
  price,
  rating = 0,
  link
}: {
  image: string;
  title: string;
  price: string;
  rating?: number;
  link: string;
}) => {
  return (
    <div className="group relative">
      <Link to={link} className="block relative group">
        <div className="overflow-hidden rounded mb-2">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-dark px-3 py-1 rounded text-sm font-medium">Quick View</span>
        </div>
      </Link>
      <div className="text-center">
        <Link to={link} className="block text-dark hover:text-primary font-medium">
          {title}
        </Link>
        {rating > 0 && (
          <div className="flex justify-center mt-1">
            <StarRating rating={rating} />
          </div>
        )}
        <p className="text-gray-800 font-medium mt-1">{price}</p>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div>
      {/* Hero Section with Slider */}
      <section className="relative h-[500px] overflow-hidden">
        <div className="absolute inset-0">
          <div className="flex h-full">
            <div className="w-full h-full">
              <img
                src="https://static.wixstatic.com/media/00a8a2_3786e2ca03ff4d9cbef11c6f637b3cd1~mv2.jpg/v1/fill/w_1899,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/00a8a2_3786e2ca03ff4d9cbef11c6f637b3cd1~mv2.jpg"
                alt="Mead Potions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Hero overlay with text */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto bg-gray-800 bg-opacity-60 text-white text-center p-8 rounded"> {/*COLOR DEL CARD HOME*/}
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Cooperativa Las Diosas</h1>
              <p className="mb-6">Jamaica, miel de abeja y granos básicos</p>
              <Link to="/buy-mead" className="btn-primary">Tienda</Link>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          <button className="w-3 h-3 rounded-full bg-white" aria-label="Slide 1" />
          <button className="w-3 h-3 rounded-full bg-gray-400" aria-label="Slide 2" />
          <button className="w-3 h-3 rounded-full bg-gray-400" aria-label="Slide 3" />
        </div>
      </section>

      {/* Featured Products Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Jamaica */}
            <div className="bg-dark text-center p-8">
              <h2 className="text-white text-2xl font-bold mb-4">Jamaica</h2>
              <Link to="/buy-mead" className="inline-block border border-white text-white px-4 py-2 hover:bg-white hover:text-dark transition-colors">Shop now</Link>
            </div>

            {/* Miel de abejas */}
            <div className="bg-primary text-center p-8">
              <h2 className="text-white text-2xl font-bold mb-4">Miel de abejas</h2>
              <Link to="/buy-mead" className="inline-block border border-white text-white px-4 py-2 hover:bg-white hover:text-dark transition-colors">Shop now</Link>
            </div>

            {/* Granos Básicos */}
            <div className="bg-secondary text-center p-8">
              <h2 className="text-white text-2xl font-bold mb-4">Granos Básicos</h2>
              <Link to="/buy-mead" className="inline-block border border-white text-white px-4 py-2 hover:bg-white hover:text-dark transition-colors">Shop now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Meadery Info Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Jamaica Honey Grains Basic</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-center mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Is Mead Healthy Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Is Honey Healthy?</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-center mb-6">
              We don't claim any alcohol is healthy, however it is known honey has health benefits.
              Some of the <strong>vitamins</strong> found in <strong>honey</strong> include ascorbic acid,
              pantothenic acid, niacin and riboflavin; along with minerals such as calcium, copper,
              iron, magnesium, manganese, phosphorus, potassium and zinc.
            </p>
            <p className="text-center mb-8">
              Therefore we can safely state mead is <em>healthier</em> than most other forms of alcohol.
            </p>
            <div className="flex justify-center space-x-4">
              <Link to="/about-us" className="btn-secondary">About us</Link>
              <Link to="/buy-mead" className="btn-primary">Shop</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Information Grid */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div>
              <h3 className="subtitle">How Is Our Meadery Different?</h3>
              <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <h3 className="subtitle">Supreme Value Mead</h3>
              <p className="mb-4">
                Honey Wines Australia are one of the very few commercial meaderies in
                Australia selling mead in <strong>750ml</strong> bottles instead of 375 or 500ml.
              </p>
              <p>
                Next time you're about to buy, scale up the price to what it would be if
                it were a standard 750ml wine bottle size and see if you still think it's
                a good price. To calculate this divide the price by the volume then multiply
                by 750, for example $ ml x 750.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="subtitle">Why Honey Wines? Why Not Mead?</h3>
              <p className="mb-4">
                But wine is made with grapes, mead is made with honey!
              </p>
              <p className="mb-4">
                Well, two reasons, firstly, according to the Emperor of mead the terms are
                interchangeable*.
              </p>
              <p className="text-sm italic mb-4">
                * Schramm, Ken (2003). The Compleat Meadmaker: Home Production of Honey Wine
                From Your First Batch to Award-winning Fruit and Herb Variations.
              </p>
              <p>
                The second reason is... Marketing, we've found not enough people know what
                mead is but they are smart enough to connect honey and wines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title mb-8">Browse Jamaica, Wine & Grains Basic</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <ProductCard
              image="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
              title="Dragon Drinking Horn Mug"
              price="$65.00"
              link="/product/dragon-drinking-horn-mug"
            />
            <ProductCard
              image="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
              title="Limited Edition Pepsi Max Mead 750ml"
              price="$40.00"
              link="/product/limited-edition-pepsi-max-mead-750ml"
            />
            <ProductCard
              image="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
              title="Haste Potion Mead (Coffee)"
              price="$40.00"
              rating={5}
              link="/product/haste-potion-mead"
            />
            <ProductCard
              image="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg"
              title="Health Potion Mead (Chilli & Cherry)"
              price="$40.00"
              rating={4.89}
              link="/product/health-potion-mead"
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/buy-mead" className="btn-primary">View all products</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-black text-white relative">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Subscribe to our newsletter</h2>
          <p className="text-center mb-6">Be the first to know about our promotions and discounts!</p>

          <form className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="flex-grow px-4 py-2 rounded text-dark"
            />
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded text-dark"
            />
            <button
              type="submit"
              className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg"
            alt="Bees"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            <span className="font-bold">Follow on Instagram</span>
          </div>
          <a href="https://www.instagram.com/emprendeint/" className="text-primary font-medium hover:underline" target="_blank" rel="noopener noreferrer">
            CLICK HERE
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
