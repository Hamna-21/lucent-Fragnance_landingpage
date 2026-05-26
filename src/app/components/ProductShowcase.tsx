import { useState } from "react";
import { Check, ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ProductShowcase() {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1694179023466-cb438ce7ae0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMHNlcnVtJTIwYm90dGxlJTIwd2hpdGUlMjBiYWNrZ3JvdW5kfGVufDF8fHx8MTc3MjM2MjM2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1762328501612-af8eac7b5878?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwc2tpbmNhcmUlMjBpbmdyZWRpZW50cyUyMG5hdHVyYWwlMjBib3RhbmljYWx8ZW58MXx8fHwxNzcyMzc4NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  ];

  const features = [
    "Hyaluronic Acid for deep hydration",
    "Vitamin C for brightening",
    "Retinol for anti-aging",
    "Niacinamide for pore refinement",
    "Peptides for firming",
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Product Images */}
          <div className="space-y-4">
            <div className="relative bg-white rounded-3xl p-8 shadow-xl">
              <ImageWithFallback
                src={images[selectedImage]}
                alt="Product showcase"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
            <div className="flex gap-4">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-1 rounded-xl overflow-hidden border-4 transition-all ${
                    selectedImage === index 
                      ? "border-[#FF6B6B] scale-105" 
                      : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <ImageWithFallback
                    src={img}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="space-y-8">
            <div>
              <div className="inline-block px-3 py-1 bg-[#FF6B6B] text-white text-sm rounded-full mb-4">
                BESTSELLER
              </div>
              <h2 className="text-4xl lg:text-5xl mb-4">
                Radiance Glow Serum
              </h2>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-gray-600">(2,847 reviews)</span>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-gray-600 text-lg">
                Our award-winning serum combines the most powerful natural ingredients 
                to deliver visible results in just one week.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-xl">Key Ingredients:</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#FF6B6B] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-300">
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-5xl">$49</span>
                <span className="text-2xl text-gray-400 line-through">$89</span>
                <span className="px-3 py-1 bg-[#FF6B6B] text-white text-sm rounded-full">
                  Save 45%
                </span>
              </div>
              
              <button className="w-full bg-[#111111] text-white px-8 py-5 rounded-xl hover:bg-[#333333] transition-all flex items-center justify-center gap-3 group text-lg">
                <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Add to Cart
              </button>
              
              <p className="text-center text-sm text-gray-600 mt-4">
                🚚 Free shipping on orders over $50 | 💚 30-day money-back guarantee
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
