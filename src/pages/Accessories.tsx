import { motion } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';
import { ShoppingCart, Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AISearchBar } from '../components/AISearchBar';

const accessories = [
  { name: 'Layered Bead Necklace', brand: 'MOTH & SILK', price: '₹999', oldPrice: '₹1,499', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=800&auto=format&fit=crop' },
  { name: 'Tactical Chest Rig', brand: 'GRIDLOCK', price: '₹1,899', oldPrice: '₹2,999', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cargo Sling Bag', brand: 'GRIDLOCK', price: '₹1,299', oldPrice: '₹1,999', img: '/products/bag_tactical_canvas_tote.png' },
  { name: 'Void Chunky Shades', brand: 'VENOM INK', price: '₹2,199', oldPrice: '₹3,499', img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=800&auto=format&fit=crop' },
  { name: 'Brutalist Beanie', brand: 'RAWCRAFT', price: '₹799', oldPrice: '₹1,199', img: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=800&auto=format&fit=crop' },
  { name: 'Industrial Web Belt', brand: 'GRIDLOCK', price: '₹1,099', oldPrice: '₹1,699', img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=800&auto=format&fit=crop' },
];

export default function Accessories() {
  return (
    <div className="bg-white min-h-screen noise-grain selection:bg-black selection:text-white">
      <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto relative z-10">
        <header className="mb-12">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">THE SCULPTED DETAIL</span>
          <InteractiveText
            text="ACCESSORIES"
            hoverEffect="leopard"
            centered={true}
            className="text-3xl md:text-5xl lg:text-7xl font-branding text-black mb-4"
          />
        </header>

        <AISearchBar />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
          {accessories.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#F8F8F8] rounded-sm group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 grayscale group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />

                {/* Product Detail Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white bg-black px-3 py-1.5 shadow-lg">
                    {item.brand}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex flex-col gap-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:bg-black hover:text-white" title="Add to Cart">
                    <ShoppingCart size={18} />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:bg-red-500 hover:text-white" title="Wishlist">
                    <Heart size={18} />
                  </button>
                </div>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[14px] font-mono font-bold text-black uppercase tracking-widest mb-2 group-hover:text-[#8B6914] transition-colors">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] font-mono text-black/40 line-through decoration-black/20">{item.oldPrice}</span>
                    <span className="text-[12px] font-mono font-black text-black">{item.price}</span>
                  </div>
                </div>
                <Link to="/shop" className="w-8 h-8 rounded-full border border-black/5 flex items-center justify-center hover:bg-black hover:text-white transition-all opacity-0 group-hover:opacity-100 duration-500">
                  <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
