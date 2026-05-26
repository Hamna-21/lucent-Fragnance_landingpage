import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "We offer free express shipping on all orders. Most orders arrive within 3-5 business days. You'll receive tracking information as soon as your order ships.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Absolutely! We offer a 30-day money-back guarantee. If you're not completely satisfied with your results, simply return the product for a full refund—no questions asked.",
    },
    {
      question: "Is this safe for sensitive skin?",
      answer: "Yes! Our serum is dermatologist-tested and formulated with 100% natural ingredients. It's safe for all skin types, including sensitive skin. However, we always recommend doing a patch test first.",
    },
    {
      question: "How do I use the serum?",
      answer: "Apply 2-3 drops to clean, dry skin morning and night. Gently massage into your face and neck until fully absorbed. For best results, use consistently for at least 7 days.",
    },
    {
      question: "When will I see results?",
      answer: "Most customers notice visible improvements within 7 days, including brighter, smoother skin and reduced fine lines. Full results typically appear after 4 weeks of consistent use.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-[#F8F8F8]">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our serum
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg pr-8">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <Minus className="w-6 h-6 text-[#FF6B6B] flex-shrink-0" />
                ) : (
                  <Plus className="w-6 h-6 text-gray-400 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="text-[#FF6B6B] hover:underline">
            Contact our support team →
          </button>
        </div>
      </div>
    </section>
  );
}
