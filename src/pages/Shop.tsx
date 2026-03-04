import { motion } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';
import { ShoppingCart, Heart, Filter } from 'lucide-react';
import { AISearchBar } from '../components/AISearchBar';

const products = [
  { name: 'Brutalist Raw Jacket', brand: 'RAWCRAFT', price: '₹3,499', oldPrice: '₹4,999', discount: '30%', img: '/products/jacket_brutalist_raw.png' },
  { name: 'Chaos Knit Sweater', brand: 'VENOM INK', price: '₹2,199', oldPrice: '₹3,499', discount: '37%', img: '/products/sweater_chaos_knit.png' },
  { name: 'Grid Tech Shell', brand: 'GRIDLOCK', price: '₹4,799', oldPrice: '₹6,999', discount: '31%', img: '/products/jacket_grid_tech_shell.png' },
  { name: 'Cargo Drifter Pants', brand: 'GRIDLOCK', price: '₹2,499', oldPrice: '₹3,799', discount: '34%', img: '/products/pants_cargo_drifter.png' },
  { name: 'Shadow Cargo V2', brand: 'RAWCRAFT', price: '₹2,799', oldPrice: '₹3,999', discount: '30%', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop' },
  { name: 'Midnight Puffer Jacket', brand: 'VENOM INK', price: '₹4,499', oldPrice: '₹6,999', discount: '35%', img: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800&auto=format&fit=crop' },
  { name: 'Void Overshirt', brand: 'VENOM INK', price: '₹3,199', oldPrice: '₹4,499', discount: '28%', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop' },
  { name: 'Rebel Club Jersey', brand: 'RAWCRAFT', price: '₹2,599', oldPrice: '₹3,799', discount: '31%', img: 'https://images.unsplash.com/photo-1571945153237-4929e783af4a?q=80&w=800&auto=format&fit=crop' },
  { name: 'Acid Wash Hoodie', brand: 'RAWCRAFT', price: '₹3,299', oldPrice: '₹4,999', discount: '33%', img: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?q=80&w=800&auto=format&fit=crop' },
  { name: 'Archival Printed Scarf', brand: 'MOTH & SILK', price: '₹1,499', oldPrice: '₹2,199', discount: '31%', img: '/products/scarf_archival_printed.png' },
  { name: 'Tactical Canvas Tote', brand: 'GRIDLOCK', price: '₹3,299', oldPrice: '₹4,799', discount: '31%', img: '/products/bag_tactical_canvas_tote.png' },
  { name: 'Graphite Boxy Knit', brand: 'MOTH & SILK', price: '₹2,199', oldPrice: '₹3,299', discount: '33%', img: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=800&auto=format&fit=crop' },
];

export default function Shop() {
  return (
    <div className="bg-white min-h-screen noise-grain selection:bg-black selection:text-white">
      <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
        <header className="flex flex-col gap-12 mb-16 items-center">
          <div className="flex flex-col items-center text-center max-w-4xl">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">COLLECTION INDEX</span>
            <InteractiveText
              text="THE FULL COLLECTION"
              hoverEffect="leopard"
              centered={true}
              className="text-3xl md:text-5xl lg:text-7xl font-branding text-black leading-none"
            />
          </div>

          <div className="w-full flex flex-col gap-6">
            <AISearchBar />
            <div className="flex justify-end">
              <button className="flex items-center gap-4 px-8 py-3 border border-black/10 font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white transition-all active:scale-95">
                <Filter size={14} /> FILTER & SORT
              </button>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 5) * 0.05, duration: 0.6 }}
              className="group"
            >
              <div className="relative aspect-[4/5] overflow-hidden mb-4 bg-[#F8F8F8] rounded-sm group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-2 left-2 z-10">
                  <span className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white bg-black/80 px-2 py-1">
                    {product.brand}
                  </span>
                </div>

                <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-mono text-[8px] font-bold text-white bg-[#C8A84B] px-2 py-1">
                    {product.discount} OFF
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-20">
                  <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-black hover:text-white" title="Add to Cart">
                    <ShoppingCart size={14} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-red-500 hover:text-white" title="Wishlist">
                    <Heart size={14} />
                  </button>
                </div>

                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              </div>

              <div className="space-y-1">
                <h4 className="text-[12px] md:text-[13px] font-sans font-medium text-black line-clamp-1 group-hover:text-[#8B6914] transition-colors uppercase tracking-tight">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2 font-mono text-[11px]">
                  <span className="text-black/30 line-through">{product.oldPrice}</span>
                  <span className="text-black font-black">{product.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
