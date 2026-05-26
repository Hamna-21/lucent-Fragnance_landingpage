import { useState } from 'react';

const notes = {
  top: [
    { name: 'Bergamot', description: 'Fresh citrus with a subtle sweetness' },
    { name: 'Lemon', description: 'Bright, zesty, and invigorating' },
    { name: 'Lavender', description: 'Calming floral with herbal undertones' },
  ],
  middle: [
    { name: 'Jasmine', description: 'Rich, intoxicating floral elegance' },
    { name: 'Rose', description: 'Classic, romantic, and timeless' },
    { name: 'Iris', description: 'Powdery, soft, and sophisticated' },
  ],
  base: [
    { name: 'Sandalwood', description: 'Warm, creamy, and woody' },
    { name: 'Amber', description: 'Deep, resinous, and sensual' },
    { name: 'Vanilla', description: 'Sweet, comforting, and luxurious' },
  ],
};

export function FragranceNotes() {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-[#F8F6F0] to-[#E8DFD1]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#0A0A0A] tracking-tight">
            Discover Every Layer
          </h2>
          <p className="text-[#1C1C1C] max-w-2xl mx-auto font-light">
            Experience the complexity of our signature fragrance pyramid
          </p>
        </div>

        {/* Fragrance Pyramid */}
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Top Notes */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl text-[#0A0A0A]">Top Notes</h3>
              <div className="flex-1 h-px bg-[#D4AF37]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notes.top.map((note) => (
                <button
                  key={note.name}
                  onMouseEnter={() => setActiveNote(note.name)}
                  onMouseLeave={() => setActiveNote(null)}
                  className="relative bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left group"
                >
                  <h4 className="text-xl text-[#0A0A0A] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {note.name}
                  </h4>
                  <p
                    className={`text-sm text-[#1C1C1C] font-light transition-all duration-300 ${
                      activeNote === note.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}
                  >
                    {note.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Middle Notes */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl text-[#0A0A0A]">Middle Notes</h3>
              <div className="flex-1 h-px bg-[#D4AF37]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notes.middle.map((note) => (
                <button
                  key={note.name}
                  onMouseEnter={() => setActiveNote(note.name)}
                  onMouseLeave={() => setActiveNote(null)}
                  className="relative bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left group"
                >
                  <h4 className="text-xl text-[#0A0A0A] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {note.name}
                  </h4>
                  <p
                    className={`text-sm text-[#1C1C1C] font-light transition-all duration-300 ${
                      activeNote === note.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}
                  >
                    {note.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Base Notes */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h3 className="text-2xl text-[#0A0A0A]">Base Notes</h3>
              <div className="flex-1 h-px bg-[#D4AF37]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {notes.base.map((note) => (
                <button
                  key={note.name}
                  onMouseEnter={() => setActiveNote(note.name)}
                  onMouseLeave={() => setActiveNote(null)}
                  className="relative bg-white/60 backdrop-blur-sm p-8 rounded-lg border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-left group"
                >
                  <h4 className="text-xl text-[#0A0A0A] mb-2 group-hover:text-[#D4AF37] transition-colors">
                    {note.name}
                  </h4>
                  <p
                    className={`text-sm text-[#1C1C1C] font-light transition-all duration-300 ${
                      activeNote === note.name ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}
                  >
                    {note.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
