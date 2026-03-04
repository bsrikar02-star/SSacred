import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Force scrolled state (black/white contrast) on pages with white backgrounds
  const isWhiteBackground = location.pathname !== '/';
  const isActiveState = isScrolled || isWhiteBackground;

  const textColor = isActiveState ? 'text-black' : 'text-white';
  const logoColor = isActiveState ? 'text-black' : 'text-white';
  const iconColor = isActiveState ? 'text-black' : 'text-white';
  const navBg = isActiveState ? 'bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm' : 'bg-transparent';
  const navHeight = isActiveState ? 'h-11' : 'h-13';

  return (
    <>
      {/* Top Black Marquee with Gold Text */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-8 bg-black flex items-center overflow-hidden border-b border-white/5">
        <div className="whitespace-nowrap flex animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused] cursor-default">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] mx-6 self-center" style={{ color: '#C8A84B' }}>
              NEW DROP · FREE SHIPPING OVER ₹1500 · CHANGE YOUR CLOTHING WITH <span className="leopard-permanent">SSacred</span> · FOR EVERYONE WHO WANTS TO DRESS BETTER · ACCESSIBLE NICHE FASHION ·
            </span>
          ))}
        </div>
      </div>

      {/* Main Navbar - Dynamic B&W Style */}
      <nav className={`fixed top-8 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${navHeight}`}>
        <div className="max-w-[1400px] mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className={`text-[24px] font-branding leopard-permanent logo-hover-effect ${logoColor}`}>
            SSacred
          </Link>

          {/* Links with dynamic text color */}
          <div className="hidden md:flex items-center gap-10">
            {['Shop', 'Brands', 'Wardrobes', 'Accessories', 'Support', 'Story', 'Careers'].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="relative group py-1"
              >
                <span className={`text-[12px] font-mono font-bold uppercase tracking-[0.15em] ${textColor} hover-gold transition-colors duration-300`}>
                  {item}
                </span>
                <motion.div
                  className={`absolute -bottom-0.5 left-0 right-0 h-[1.5px] ${isActiveState ? 'bg-black' : 'bg-white'} origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                />
              </Link>
            ))}
          </div>

          <div className={`flex items-center gap-6 ${iconColor} transition-colors duration-300`}>
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:opacity-60 hover:text-[#C8A84B] transition-all">
              {isSearchOpen ? <X size={16} strokeWidth={2.5} /> : <Search size={16} strokeWidth={2.5} />}
            </button>
            <Link to="/wishlist" className="hover:opacity-60 hover:text-[#C8A84B] transition-all relative">
              <Heart size={16} strokeWidth={2.5} />
            </Link>
            <Link to="/cart" className="relative hover:opacity-60 hover:text-[#C8A84B] transition-all">
              <ShoppingBag size={16} strokeWidth={2.5} />
              <span className={`absolute -top-1.5 -right-1.5 ${isActiveState ? 'bg-black text-white' : 'bg-white text-black'} text-[7px] font-bold w-3 h-3 rounded-full flex items-center justify-center`}>
                0
              </span>
            </Link>
            <Link to="/account" className="hover:opacity-60 hover:text-[#C8A84B] transition-all">
              <User size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>

        {/* Search Dropdown */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-full left-0 right-0 bg-white border-b border-black/10 shadow-lg"
            >
              <div className="max-w-[1400px] mx-auto px-6 py-8">
                <div className="flex items-center gap-4 max-w-2xl mx-auto border-b-2 border-black pb-2">
                  <Search size={24} className="text-black/50" />
                  <input
                    type="text"
                    placeholder="SEARCH BRANDS, PIECES, OR STORIES..."
                    autoFocus
                    className="w-full bg-transparent border-none outline-none font-mono text-[14px] font-bold uppercase tracking-widest text-black placeholder:text-black/30"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
