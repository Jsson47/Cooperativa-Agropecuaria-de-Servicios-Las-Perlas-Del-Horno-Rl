import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  rating?: number;
  category: string;
}

const products: Product[] = [
  {
    id: "dragon-drinking-horn-mug",
    name: "Dragon Drinking Horn Mug",
    price: "$65.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    category: "Drinking Horns"
  },
  {
    id: "limited-edition-pepsi-max-mead-750ml",
    name: "Limited Edition Pepsi Max Mead 750ml",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    category: "Mead"
  },
  {
    id: "hunter-valley-mead",
    name: "Hunter Valley Mead (Traditional/Plain)",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    rating: 4.78,
    category: "Mead"
  },
  {
    id: "health-potion-mead",
    name: "Health Potion Mead (Chilli & Cherry)",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    rating: 4.89,
    category: "Mead"
  },
  {
    id: "mana-potion-mead",
    name: "Mana Potion Mead (Mixed Fruits)",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    rating: 4.76,
    category: "Mead"
  },
  {
    id: "haste-potion-mead",
    name: "Haste Potion Mead (Coffee)",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    rating: 5.0,
    category: "Mead"
  },
  {
    id: "vanilla-mead-750ml",
    name: "Potion of Invisibility (Vanilla Bean)",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    rating: 4.5,
    category: "Mead"
  },
  {
    id: "stamina-potion-mead",
    name: "Stamina Potion Mead (Lemon & Lime)",
    price: "$40.00",
    image: "https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30192011/IMG-20240130-WA0040.jpg",
    rating: 4.81,
    category: "Mead"
  }
];

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

// Product Card component
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group relative">
      <Link to={`/product/${product.id}`} className="block relative group">
        <div className="overflow-hidden rounded mb-2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-white text-dark px-3 py-1 rounded text-sm font-medium">Quick View</span>
        </div>
      </Link>
      <div className="text-center">
        <div className="text-xs uppercase text-gray-500 mb-1">{product.category}</div>
        <Link to={`/product/${product.id}`} className="block text-dark hover:text-primary font-medium">
          {product.name}
        </Link>
        {product.rating && (
          <div className="flex justify-center mt-1">
            <StarRating rating={product.rating} />
          </div>
        )}
        <p className="text-gray-800 font-medium mt-1">{product.price}</p>
      </div>
    </div>
  );
};

const MeadShopPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    "Drinking Horns",
    "Honey Products",
    "Honey Skincare",
    "Mead",
    "Spirits",
    "Viking Merchandise"
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        {/* Page header with breadcrumbs */}
        <div className="mb-6">
          <div className="text-sm breadcrumbs mb-2">
            <Link to="/" className="hover:text-primary">Home</Link> / Mead Shop
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Mead Shop</h1>
          <div className="text-sm text-gray-600 mt-2">
            Showing 1-{filteredProducts.length} of {products.length} results
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="border rounded p-4 mb-6">
              <h2 className="font-semibold mb-3">Search</h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full px-3 py-2 border rounded"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  className="absolute right-0 top-0 h-full px-4 bg-primary text-white rounded-r"
                  aria-label="Search"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="border rounded p-4">
              <h2 className="font-semibold mb-3">Product Categories</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`text-left w-full hover:text-primary ${selectedCategory === '' ? 'text-primary font-medium' : ''}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    All Categories
                  </button>
                </li>
                {categories.map(category => (
                  <li key={category}>
                    <button
                      className={`text-left w-full hover:text-primary ${selectedCategory === category ? 'text-primary font-medium' : ''}`}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Products grid */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Our Range Section */}
        <div className="mt-16 border-t pt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold">Our Range of Premium Meads</h2>
            <p className="mt-2 text-gray-600">You have found where to buy mead - a very unique range of mead!</p>
          </div>

          {/* Featured product image */}
          <div className="mt-8 flex justify-center">
            <img
              src="https://radiolaprimerisima.s3.amazonaws.com/wp-content/uploads/2024/01/30191859/IMG-20240130-WA0039.jpg"
              alt="Our premium mead range"
              className="rounded-lg max-w-full md:max-w-2xl"
            />
          </div>

          {/* Honey Wine Delivery Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Honey Wine Delivery</h2>
            <div className="max-w-3xl">
              <p className="mb-4">
                What we love about mead is the near limitless possible flavour combinations when brewing,
                in addition to adding fruits or spices to the brew there are so many different honey varieties
                depending on the trees the bees collect nectar from. Honey Wines Australia Meadery uses a lot
                of mangrove honey from our Lake Macquarie hives however we also have hives in the vineyards of
                the Hunter Valley wine region that we are looking forward to tasting the honey from. Without
                being boastful, when I give honey tastings at the end of my beekeeping classes, hearing "that's
                the best honey I've ever tasted!" is not uncommon at all.
              </p>
              <p>
                Honey Wines Australia are also mead wholesalers and we're always on the lookout for distributors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeadShopPage;
