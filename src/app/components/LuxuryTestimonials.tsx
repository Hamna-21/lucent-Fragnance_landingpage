import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Isabella Martinez',
    location: 'Paris, France',
    rating: 5,
    text: 'Midnight Noir has become my signature. The complexity and longevity are unmatched. Every time I wear it, I receive compliments.',
    purchase: 'Purchased: Midnight Noir, Golden Essence',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    name: 'Alexander Chen',
    location: 'New York, USA',
    rating: 5,
    text: 'The craftsmanship is evident in every note. These fragrances are investment pieces that evolve beautifully throughout the day.',
    purchase: 'Purchased: Ocean Mystique',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    name: 'Sophia Laurent',
    location: 'London, UK',
    rating: 5,
    text: 'Velvet Rose is absolutely divine. The perfect balance of elegance and sensuality. Worth every penny.',
    purchase: 'Purchased: Velvet Rose, Amber Legacy',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
  },
];

export function LuxuryTestimonials() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-[#1C1C1C] max-w-2xl mx-auto font-light">
            Testimonials from our distinguished fragrance collectors
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-[#F8F6F0] to-[#E8DFD1] p-8 rounded-lg backdrop-blur-sm border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-xl group"
              style={{
                background: 'rgba(248, 246, 240, 0.6)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 bg-[#D4AF37] p-3 rounded-full shadow-lg">
                <Quote className="text-[#0A0A0A]" size={20} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-[#0A0A0A] mb-6 leading-relaxed font-light">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center gap-4 mb-4 pt-4 border-t border-[#D4AF37]/20">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#D4AF37]/30"
                />
                <div>
                  <h4 className="text-[#0A0A0A] font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-[#1C1C1C] font-light">{testimonial.location}</p>
                </div>
              </div>

              {/* Purchase History */}
              <p className="text-xs text-[#D4AF37] tracking-wide">
                {testimonial.purchase}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
