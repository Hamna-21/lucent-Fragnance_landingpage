import { Zap, Leaf, Heart, Sparkles } from "lucide-react";

export function Benefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Fast Results",
      description: "See visible change in just 7 days",
    },
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure organic ingredients, no chemicals",
    },
    {
      icon: Heart,
      title: "Dermatologist Tested",
      description: "Clinically proven safe for all skin types",
    },
    {
      icon: Sparkles,
      title: "Anti-Aging Formula",
      description: "Reduce wrinkles and fine lines naturally",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Why Choose Our Serum?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with our revolutionary formula
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-[#F8F8F8] hover:shadow-xl transition-all group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF6B6B] rounded-2xl mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
