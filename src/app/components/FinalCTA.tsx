import { ShoppingBag, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-[#111111] to-[#333333] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#FF6B6B] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#FF6B6B] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
        <div className="inline-block px-4 py-2 bg-[#FF6B6B]/20 rounded-full mb-8">
          <span className="text-sm text-[#FF6B6B]">⏰ Limited Time Offer - 45% OFF</span>
        </div>

        <h2 className="text-4xl lg:text-6xl mb-6">
          Ready to Experience the Difference?
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Join over 10,000 happy customers and transform your skin in just 7 days. 
          Try it risk-free with our 30-day money-back guarantee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="bg-[#FF6B6B] text-white px-10 py-5 rounded-xl hover:bg-[#ff5252] transition-all flex items-center gap-3 group text-lg shadow-xl shadow-[#FF6B6B]/30">
            <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Get Your Serum Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white" />
              </div>
              <span className="text-sm text-gray-300">+10,000 customers this month</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20">
          <div>
            <div className="text-3xl lg:text-4xl mb-2">10,000+</div>
            <div className="text-gray-400">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl mb-2">30 Days</div>
            <div className="text-gray-400">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
}
