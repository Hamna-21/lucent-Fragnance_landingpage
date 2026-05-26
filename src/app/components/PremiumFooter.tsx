import { Instagram, Facebook } from 'lucide-react';

export function PremiumFooter() {
  return (
    <footer className="bg-[#0A0A0A] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-3xl tracking-wider font-light">LUXE SCENT</h3>
            <p className="text-[#E8DFD1] font-light leading-relaxed max-w-md">
              Crafting unforgettable fragrances that capture emotion, elegance, and timeless moments since 2010.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="bg-white/10 hover:bg-[#D4AF37] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#D4AF37] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#D4AF37] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a
                href="#"
                className="bg-white/10 hover:bg-[#D4AF37] p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium tracking-wide">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  Sustainability
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium tracking-wide">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium tracking-wide">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#E8DFD1] hover:text-[#D4AF37] transition-colors font-light">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#E8DFD1]/60 text-sm font-light">
              © 2026 Luxe Scent. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-[#E8DFD1]/60 text-sm font-light">We accept</span>
              <div className="flex items-center gap-3">
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-light">VISA</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-light">MASTERCARD</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-light">PAYPAL</div>
                <div className="bg-white/10 px-3 py-1 rounded text-xs font-light">APPLE PAY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
