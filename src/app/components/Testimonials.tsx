import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1565069859254-6248c5a4bc67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwc2tpbmNhcmUlMjBzbWlsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MjM3ODc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      review: "This serum is absolutely life-changing! My skin has never looked better. Within a week, I noticed my dark spots fading and my skin feeling smoother.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      image: "https://images.unsplash.com/photo-1720874129553-1d2e66076b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHRlc3RpbW9uaWFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyMzc4NzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      review: "I've tried countless serums, but this one actually delivers! My skin is glowing, fine lines are reduced, and I love that it's all-natural. Worth every penny!",
      rating: 5,
    },
    {
      name: "Jessica Chen",
      image: "https://images.unsplash.com/photo-1746632452765-05eeadb3c552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25maWRlbnQlMjB3b21hbiUyMGJlYXV0eSUyMHBvcnRyYWl0JTIwbmF0dXJhbHxlbnwxfHx8fDE3NzIzNzg3ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      review: "Finally found a product that works for my sensitive skin! No irritation, just beautiful, radiant results. I get compliments all the time now!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600">
            Join thousands of happy customers with glowing skin
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.review}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFF5F5] rounded-full">
            <span className="text-[#FF6B6B] text-lg">⭐ 4.9/5</span>
            <span className="text-gray-600">from over 10,000 reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
