export function LimitedEditionBanner() {
  return (
    <section className="relative py-32 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1732828912093-a776288edfed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Limited Edition"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/20 backdrop-blur-sm border border-[#D4AF37] rounded-full">
            <span className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
            <span className="text-[#D4AF37] text-sm tracking-widest uppercase font-medium">
              Exclusive Release
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight">
            Limited Edition
            <span className="block mt-2 text-[#D4AF37]">Collection</span>
          </h2>

          {/* Description */}
          <p className="text-xl text-[#E8DFD1] leading-relaxed font-light">
            Only 500 bottles worldwide. Each piece numbered and signed by our master perfumer.
            A rare blend of vintage amber, midnight orchid, and golden musk.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-6 pt-4">
            <button className="px-10 py-4 bg-[#D4AF37] text-[#0A0A0A] font-medium tracking-wide uppercase text-sm hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-xl">
              Shop Limited Edition
            </button>
            <div className="text-white">
              <div className="text-4xl font-light">$350</div>
              <div className="text-sm text-[#E8DFD1] font-light">50ml Parfum</div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-12 pt-8 border-t border-[#D4AF37]/30">
            <div>
              <div className="text-3xl text-white font-light">423</div>
              <div className="text-sm text-[#E8DFD1] font-light">Bottles Remaining</div>
            </div>
            <div>
              <div className="text-3xl text-white font-light">5★</div>
              <div className="text-sm text-[#E8DFD1] font-light">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl text-white font-light">24h</div>
              <div className="text-sm text-[#E8DFD1] font-light">Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
