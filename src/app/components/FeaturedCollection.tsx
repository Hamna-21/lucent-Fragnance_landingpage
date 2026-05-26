import { Star, ShoppingCart } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Midnight Noir',
    category: 'Eau de Parfum',
    price: 185,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1615160460366-2c9a41771b51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 2,
    name: 'Velvet Rose',
    category: 'Eau de Toilette',
    price: 165,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 3,
    name: 'Golden Essence',
    category: 'Parfum',
    price: 225,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1705936118918-870095881e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
  {
    id: 4,
    name: 'Ocean Mystique',
    category: 'Eau de Parfum',
    price: 195,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1647507653704-bde7f2d6dbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
  },
];

export function FeaturedCollection() {
  return (
    <section className="py-24 px-4 bg-[#F8F6F0]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight">
            Featured Collection
          </h2>
          <p className="text-[#1C1C1C] max-w-2xl mx-auto font-light">
            Curated selections from our most beloved fragrances
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#E8DFD1]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#D4AF37] tracking-widest uppercase font-medium">
                    {product.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    <span className="text-sm text-[#0A0A0A] font-medium">{product.rating}</span>
                  </div>
                </div>

                <h3 className="text-xl text-[#0A0A0A]">{product.name}</h3>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl text-[#0A0A0A] font-light">${product.price}</span>
                  <button className="bg-[#0A0A0A] text-white p-3 rounded-full hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 transform hover:scale-110 shadow-md">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
