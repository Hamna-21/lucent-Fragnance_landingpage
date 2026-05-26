export function StorytellingSection() {
  const stories = [
    {
      title: 'Artisan Craftsmanship',
      description: 'Each fragrance is meticulously crafted by master perfumers with decades of expertise, blending rare ingredients from around the world.',
      image: 'https://images.unsplash.com/photo-1643797517590-c44cb552ddcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    },
    {
      title: 'Natural Ingredients',
      description: 'We source the finest natural essences—from Bulgarian rose petals to Indonesian sandalwood—ensuring authenticity and luxury in every drop.',
      image: 'https://images.unsplash.com/photo-1627823569857-4d8581dc62b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    },
    {
      title: 'Timeless Elegance',
      description: 'Our fragrances are designed to transcend trends, creating unforgettable impressions that last through time and memory.',
      image: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight">
            Crafted for Memories
          </h2>
          <p className="text-[#1C1C1C] max-w-2xl mx-auto font-light">
            The journey from inspiration to your signature scent
          </p>
        </div>

        {/* Alternating Layout */}
        <div className="space-y-32">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } items-center gap-12 lg:gap-16`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/30 to-transparent" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6 max-w-xl">
                <div className="w-16 h-px bg-[#D4AF37]" />
                <h3 className="text-3xl md:text-4xl text-[#0A0A0A]">
                  {story.title}
                </h3>
                <p className="text-lg text-[#1C1C1C] leading-relaxed font-light">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
