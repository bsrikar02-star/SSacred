import { motion } from 'motion/react';
import { Instagram, Twitter, Facebook, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-chocolate text-[#F5F2ED] py-16 px-6 relative overflow-hidden noise-grain border-t border-white/5">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link to="/" className="text-4xl font-branding leopard-permanent logo-hover-effect">
            SSacred
          </Link>
          <p className="text-[11px] font-mono uppercase tracking-widest text-white/50 leading-relaxed max-w-[240px]">
            CURATED NOT MASS. BOLD BRANDS ONLY. EST. 2026.
          </p>
          <div className="flex gap-4">
            <Instagram size={18} className="text-white/60 hover:text-[#C8A84B] transition-colors cursor-pointer" />
            <Twitter size={18} className="text-white/60 hover:text-[#C8A84B] transition-colors cursor-pointer" />
            <Facebook size={18} className="text-white/60 hover:text-[#C8A84B] transition-colors cursor-pointer" />
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Collective</h4>
          <ul className="space-y-2">
            {['The Drop', 'New Arrivals', 'Best Sellers', 'Archive'].map((item) => (
              <li key={item}>
                <a href="#" className="font-mono text-[11px] uppercase tracking-widest hover:text-[#C8A84B] transition-colors flex items-center gap-2 group">
                  {item} <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="space-y-4">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Information</h4>
          <ul className="space-y-2">
            {['Shipping', 'Returns', 'Privacy', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="font-mono text-[11px] uppercase tracking-widest hover:text-[#C8A84B] transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="space-y-6">
          <h4 className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Newsletter</h4>
          <form className="relative">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full bg-transparent border-b border-white/20 pb-3 font-mono text-[10px] uppercase tracking-widest outline-none focus:border-white transition-colors"
            />
            <button type="submit" className="absolute right-0 bottom-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-[#C8A84B] hover:text-white transition-colors">
              JOIN
            </button>
          </form>
          <p className="text-[9px] font-mono text-white/30 tracking-widest leading-relaxed">
            RECEIVE EXCLUSIVE UPDATES ON DROPS AND BRAND PARTNERSHIPS.
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">
          © 2026 <span className="leopard-permanent">SSacred</span> Ltd. Rights are Sacred.
        </span>
        <div className="flex gap-8">
          <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">DESIGNED FOR GEN Z</span>
          <span className="font-mono text-[9px] text-white/30 tracking-widest uppercase">ALL PRICES INR</span>
        </div>
      </div>
    </footer>
  );
}
