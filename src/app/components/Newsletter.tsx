import { Send } from 'lucide-react';

export function Newsletter() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-[#0A0A0A] to-[#1C1C1C]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Join The Fragrance Society
          </h2>
          <p className="text-[#E8DFD1] text-lg font-light max-w-2xl mx-auto">
            Get exclusive launches, offers, and fragrance recommendations delivered to your inbox
          </p>
        </div>

        {/* Newsletter Form */}
        <form className="max-w-xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-[#D4AF37]/30 rounded-lg text-white placeholder:text-[#E8DFD1]/60 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-[#D4AF37] text-[#0A0A0A] font-medium tracking-wide uppercase text-sm hover:bg-[#F8F6F0] transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 rounded-lg"
            >
              Subscribe
              <Send size={16} />
            </button>
          </div>
        </form>

        {/* Privacy Note */}
        <p className="text-[#E8DFD1]/60 text-sm font-light">
          We respect your privacy. Unsubscribe at any time.
        </p>

        {/* Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-[#D4AF37]/20">
          <div className="space-y-2">
            <div className="text-[#D4AF37] text-2xl">✨</div>
            <h3 className="text-white font-medium">Early Access</h3>
            <p className="text-[#E8DFD1]/80 text-sm font-light">
              Be first to discover new collections
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-[#D4AF37] text-2xl">🎁</div>
            <h3 className="text-white font-medium">Exclusive Offers</h3>
            <p className="text-[#E8DFD1]/80 text-sm font-light">
              Member-only promotions and gifts
            </p>
          </div>
          <div className="space-y-2">
            <div className="text-[#D4AF37] text-2xl">💎</div>
            <h3 className="text-white font-medium">Expert Tips</h3>
            <p className="text-[#E8DFD1]/80 text-sm font-light">
              Fragrance layering and care guides
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
