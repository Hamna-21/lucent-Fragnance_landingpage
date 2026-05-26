import { Search, Heart, User, ShoppingBag, Menu } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F8F6F0]/80 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ top: '32px' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl tracking-wider font-light text-[#0A0A0A]">
              LUXE SCENT
            </h1>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              Home
            </a>
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              Collections
            </a>
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              Best Sellers
            </a>
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              Men
            </a>
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              Women
            </a>
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              Gifts
            </a>
            <a href="#" className="text-sm tracking-wide text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              About
            </a>
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-[#0A0A0A] hover:text-[#D4AF37] transition-colors">
              <Search size={20} />
            </button>
            <button className="text-[#0A0A0A] hover:text-[#D4AF37] transition-colors hidden md:block">
              <Heart size={20} />
            </button>
            <button className="text-[#0A0A0A] hover:text-[#D4AF37] transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="text-[#0A0A0A] hover:text-[#D4AF37] transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#0A0A0A] text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
            <button className="lg:hidden text-[#0A0A0A]">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
