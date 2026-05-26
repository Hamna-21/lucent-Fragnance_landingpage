import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const bestSellers = [
  {
    name: 'Midnight Noir',
    description: 'Dark, mysterious, and captivating',
    price: 185,
    rating: 4.9,
    reviews: 1247,
    image: 'https://images.unsplash.com/photo-1615160460366-2c9a41771b51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    name: 'Velvet Rose',
    description: 'Elegant floral with depth',
    price: 165,
    rating: 4.8,
    reviews: 982,
    image: 'https://images.unsplash.com/photo-1608721279136-cd41b752fa41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    name: 'Golden Essence',
    description: 'Warm amber and vanilla notes',
    price: 225,
    rating: 5.0,
    reviews: 1543,
    image: 'https://images.unsplash.com/photo-1705936118918-870095881e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    name: 'Ocean Mystique',
    description: 'Fresh aquatic with woody base',
    price: 195,
    rating: 4.7,
    reviews: 876,
    image: 'https://images.unsplash.com/photo-1647507653704-bde7f2d6dbf0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
  {
    name: 'Amber Legacy',
    description: 'Rich oriental masterpiece',
    price: 210,
    rating: 4.9,
    reviews: 1198,
    image: 'https://images.unsplash.com/photo-1643797517714-a273548abc3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
  },
];

export function BestSellers() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % bestSellers.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + bestSellers.length) % bestSellers.length);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl text-[#0A0A0A] tracking-tight mb-2">
              Best Sellers
            </h2>
            <p className="text-[#1C1C1C] font-light">
              Our most loved fragrances worldwide
            </p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={prev}
              className="p-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={next}
              className="p-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / 3)}%)`,
            }}
          >
            {bestSellers.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 px-4"
              >
                <div className="bg-[#F8F6F0] rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group">
                  {/* Image */}
                  <div className="relative aspect-square bg-[#E8DFD1]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 right-4 bg-[#D4AF37] text-[#0A0A0A] px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase">
                      Bestseller
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl text-[#0A0A0A] mb-1">
                        {product.name}
                      </h3>
                      <p className="text-sm text-[#1C1C1C] font-light">
                        {product.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={
                              i < Math.floor(product.rating)
                                ? 'fill-[#D4AF37] text-[#D4AF37]'
                                : 'text-[#E8DFD1]'
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#1C1C1C] font-light">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
                      <span className="text-2xl text-[#0A0A0A] font-light">
                        ${product.price}
                      </span>
                      <button className="px-6 py-2 bg-[#0A0A0A] text-white hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 text-sm font-medium tracking-wide uppercase rounded">
                        Quick Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button
            onClick={prev}
            className="p-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 rounded-full"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={next}
            className="p-3 border-2 border-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-300 rounded-full"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {bestSellers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'w-8 bg-[#D4AF37]'
                  : 'w-2 bg-[#E8DFD1] hover:bg-[#D4AF37]/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
