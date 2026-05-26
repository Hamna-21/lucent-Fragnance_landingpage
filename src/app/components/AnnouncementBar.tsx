import { useState, useEffect } from 'react';

export function AnnouncementBar() {
  const announcements = [
    'Free Worldwide Shipping',
    'New Signature Collection Available',
    'Limited Edition Perfumes'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0A0A0A] text-[#D4AF37] text-center py-2 px-4 relative overflow-hidden">
      <div className="transition-all duration-500 ease-in-out">
        <p className="text-xs md:text-sm font-light tracking-widest uppercase">
          {announcements[currentIndex]}
        </p>
      </div>
    </div>
  );
}
