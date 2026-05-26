import { ShoppingBag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-20 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-[#FFF5F5] rounded-full">
              <span className="text-sm text-[#FF6B6B]">✨ New Formula Available</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl leading-tight">
              Transform Your Skin in{" "}
              <span className="text-[#FF6B6B]">7 Days</span> ✨
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Experience the power of nature with our clinically proven serum. 
              Achieve radiant, youthful skin with 100% organic ingredients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#111111] text-white px-8 py-4 rounded-xl hover:bg-[#333333] transition-all flex items-center justify-center gap-2 group">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Shop Now - $49
              </button>
              <button className="border-2 border-[#111111] text-[#111111] px-8 py-4 rounded-xl hover:bg-[#111111] hover:text-white transition-all">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm">4.9/5</span>
              </div>
              <div className="h-6 w-px bg-gray-300" />
              <div className="text-sm text-gray-600">
                Over <span className="font-semibold text-[#111111]">10,000+</span> Happy Customers
              </div>
            </div>
          </div>
          
          {/* Right Side - Product Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B6B]/20 to-transparent rounded-3xl blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1725034246182-0bb08e80d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGdsb3dpbmclMjBza2luJTIwcG9ydHJhaXQlMjBuYXR1cmFsfGVufDF8fHx8MTc3MjMzODIwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Glowing skin transformation"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
