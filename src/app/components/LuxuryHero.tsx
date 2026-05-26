import { ChevronDown } from 'lucide-react';

export function LuxuryHero() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-[#0A0A0A] via-[#1C1C1C] to-[#0A0A0A] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1598634222670-87c5f558119c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Luxury Perfume"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
      </div>

      {/* Gold Particles Effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white tracking-tight leading-tight">
            Wear Your
            <span className="block mt-2 bg-gradient-to-r from-[#D4AF37] to-[#F8F6F0] bg-clip-text text-transparent">
              Signature Story
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#E8DFD1] max-w-2xl mx-auto font-light leading-relaxed">
            Discover handcrafted fragrances designed to capture emotion, elegance, and unforgettable moments.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button className="px-10 py-4 bg-[#D4AF37] text-[#0A0A0A] font-medium tracking-wide uppercase text-sm hover:bg-[#F8F6F0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#D4AF37]/50">
              Shop Collection
            </button>
            <button className="px-10 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-medium tracking-wide uppercase text-sm hover:bg-[#D4AF37] hover:text-[#0A0A0A] transition-all duration-300 transform hover:scale-105">
              Discover Fragrances
            </button>
          </div>

          {/* Floating Fragrance Notes */}
          <div className="hidden md:flex items-center justify-center gap-8 pt-12 text-[#D4AF37] text-sm tracking-widest font-light">
            <span className="opacity-60">BERGAMOT</span>
            <span className="w-px h-4 bg-[#D4AF37] opacity-30" />
            <span className="opacity-60">JASMINE</span>
            <span className="w-px h-4 bg-[#D4AF37] opacity-30" />
            <span className="opacity-60">SANDALWOOD</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#D4AF37] text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="text-[#D4AF37]" size={20} />
      </div>
    </section>
  );
}
