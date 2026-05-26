import { Shield, Award, Truck, Leaf } from "lucide-react";

export function TrustBar() {
  const badges = [
    { icon: Shield, text: "Secure Payment" },
    { icon: Award, text: "Clinically Proven" },
    { icon: Truck, text: "Free Shipping" },
    { icon: Leaf, text: "100% Organic" },
  ];

  return (
    <section className="bg-[#111111] py-6">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center justify-center gap-3 text-white">
              <badge.icon className="w-5 h-5 text-[#FF6B6B]" />
              <span className="text-sm lg:text-base">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
