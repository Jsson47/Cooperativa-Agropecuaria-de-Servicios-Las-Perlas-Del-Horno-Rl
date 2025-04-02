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
    id: "jamaica-hibiscus-tea",
    name: "Jamaica Hibiscus Tea",
    price: "C$65.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    category: "Bebidas"
  },
  {
    id: "honey-infused-sorghum",
    name: "Honey-Infused Sorghum",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    category: "Miel"
  },
  {
    id: "spiced-jamaica-ade",
    name: "Spiced Jamaica Ade",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    rating: 4.78,
    category: "Bebidas"
  },
  {
    id: "golden-corn-honey-bread",
    name: "Golden Corn & Honey Bread",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    rating: 4.89,
    category: "Miel"
  },
  {
    id: "jamaica-mint-cooler",
    name: "Jamaica Mint Cooler",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    rating: 4.76,
    category: "Bebidas"
  },
  {
    id: "honeyed-quinoa-bowl",
    name: "Honeyed Quinoa Bowl",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    rating: 5.0,
    category: "Granos Básicos"
  },
  {
    id: "roasted-barley-honey-tea",
    name: "Roasted Barley Honey Tea",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    rating: 4.5,
    category: "Miel"
  },
  {
    id: "jamaica-spice-granola",
    name: "Jamaica Spice Granola",
    price: "C$40.00",
    image: "https://www.el19digital.com/files/notas/source/2022/Junio/07Jun/esteli/COOPERATIVA_4.jpg",
    rating: 4.81,
    category: "Bebidas"
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
    "Bebidas",
    "Productos de Miel",
    "Miel",
    "Granos Básicos",
    "Productos"
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
            <Link to="/" className="hover:text-primary">Inicio</Link> / Tienda
          </div>
          <h1 className="text-2xl md:text-3xl font-bold">Tienda</h1>
          <div className="text-sm text-gray-600 mt-2">
          Mostrando  1-{filteredProducts.length} de {products.length} resultados
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with filters */}
          <div className="lg:col-span-1">
            <div className="border rounded p-4 mb-6">
              <h2 className="font-semibold mb-3">Busqueda</h2>
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
              <h2 className="font-semibold mb-3">Categorías de productos</h2>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`text-left w-full hover:text-primary ${selectedCategory === '' ? 'text-primary font-medium' : ''}`}
                    onClick={() => setSelectedCategory('')}
                  >
                    Todas las categorías
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
                <p className="text-gray-500">No se han encontrado productos que coincidan con sus criterios.</p>
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
            <h2 className="text-2xl font-bold">Nuestra gama de mieles premium</h2>
            <p className="mt-2 text-gray-600">Ha encontrado dónde comprar miel: ¡una gama única de miel!</p>
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
            <h2 className="text-2xl font-bold mb-4">Entrega de Jamaica, miel y granos básicos</h2>
            <div className="max-w-3xl">
              <p className="mb-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi alias officiis quisquam? Provident maxime enim voluptates magni nihil debitis labore ex voluptate cumque, quos officiis eveniet, repellat ipsa, nobis assumenda.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis odit ipsam pariatur molestias, voluptas minus, quasi quia consequuntur dolorum modi quos iure officia, hic ipsa adipisci repellat qui laudantium temporibus?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeadShopPage;
