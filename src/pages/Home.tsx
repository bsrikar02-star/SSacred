import { ArrowRight, Play, ChevronRight, ChevronLeft, ShoppingCart, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { InteractiveText } from '../components/InteractiveText';

const newArrivals = [
  { name: 'Brutalist Raw Jacket', brand: 'RAWCRAFT', price: '₹3,499', oldPrice: '₹4,999', discount: '30%', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800&auto=format&fit=crop' },
  { name: 'Void Knit Sweater', brand: 'VENOM INK', price: '₹2,199', oldPrice: '₹3,499', discount: '37%', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop' },
  { name: 'Grid Tech Shell', brand: 'GRIDLOCK', price: '₹4,799', oldPrice: '₹6,999', discount: '31%', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop' },
  { name: 'Silk Archival Scarf', brand: 'MOTH & SILK', price: '₹1,299', oldPrice: '₹1,999', discount: '35%', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=800&auto=format&fit=crop' },
  { name: 'Urban Cargo Drifters', brand: 'GRIDLOCK', price: '₹2,499', oldPrice: '₹3,799', discount: '34%', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=800&auto=format&fit=crop' },
  { name: 'Heavy Canvas Tote', brand: 'RAWCRAFT', price: '₹999', oldPrice: '₹1,499', discount: '33%', img: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=800&auto=format&fit=crop' },
];

const personalised = [
  { name: 'Midnight Puffer', brand: 'VENOM INK', price: '₹4,499', oldPrice: '₹6,999', discount: '35%', img: 'https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?q=80&w=800&auto=format&fit=crop' },
  { name: 'Silver Link Chain', brand: 'MOTH & SILK', price: '₹999', oldPrice: '₹1,499', discount: '33%', img: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop' },
  { name: 'Tactical Chest Rig', brand: 'GRIDLOCK', price: '₹1,899', oldPrice: '₹2,999', discount: '36%', img: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=800&auto=format&fit=crop' },
  { name: 'Velvet Evening Blazer', brand: 'RAWCRAFT', price: '₹5,999', oldPrice: '₹8,999', discount: '33%', img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop' },
  { name: 'Graphite Knit Sweater', brand: 'MOTH & SILK', price: '₹2,199', oldPrice: '₹3,299', discount: '33%', img: 'https://images.unsplash.com/photo-1614676471928-2ed0ad1061a4?q=80&w=800&auto=format&fit=crop' },
  { name: 'Cargo Sling Bag', brand: 'GRIDLOCK', price: '₹1,299', oldPrice: '₹1,999', discount: '35%', img: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop' },
];

const featuredBrands = [
  { name: 'RAWCRAFT', tag: 'Brutalist Streetwear' },
  { name: 'VENOM INK', tag: 'Dark Editorial Couture' },
  { name: 'GRIDLOCK', tag: 'Technical Futurism' },
  { name: 'MOTH & SILK', tag: 'Old Money Luxury' },
];

function ProductCard({ product, index }: { product: typeof newArrivals[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className="group min-w-[200px] md:min-w-[220px] max-w-[220px]"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-3 bg-[#F8F8F8] rounded-sm group-hover:shadow-lg transition-all duration-500">
        <img src={product.img} alt={product.name} className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" />
        <div className="absolute top-2 left-2 font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-white bg-black/80 px-2 py-1 z-10">
          {product.brand}
        </div>
        <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
          <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-black hover:text-white" title="Add to Cart">
            <ShoppingCart size={14} />
          </button>
          <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-black hover:text-white" title="Wishlist">
            <Heart size={14} />
          </button>
        </div>
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>
      <div className="space-y-1">
        <h4 className="font-sans text-[13px] text-black font-medium line-clamp-1 group-hover:text-[#8B6914] transition-colors">
          {product.name}
        </h4>
        <div className="flex items-center gap-2 font-mono text-[12px]">
          <span className="text-black/40 line-through">{product.oldPrice}</span>
          <span className="text-white bg-black px-1.5 py-0.5 font-bold">{product.price}</span>
          <span className="text-white bg-black px-1.5 py-0.5 font-bold">{product.discount}</span>
        </div>
      </div>
    </motion.div>
  );
}

function ProductStrip({ title, subtitle, products }: { title: string; subtitle: string; products: typeof newArrivals }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -300 : 300, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) setShowLeftArrow(scrollContainerRef.current.scrollLeft > 50);
  };

  return (
    <div className="px-6 max-w-[1400px] mx-auto py-4 md:py-6">
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-black/30 mb-2 block">{subtitle}</span>
          <h2 className="text-2xl md:text-3xl font-display text-black uppercase">{title}</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className={`w-8 h-8 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all ${!showLeftArrow ? 'opacity-20' : 'opacity-100'}`}
          >
            <ChevronLeft size={14} />
          </button>
          <button onClick={() => scroll('right')} className="w-8 h-8 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all">
            <ChevronRight size={14} />
          </button>
        </div>
      </div>
      <div ref={scrollContainerRef} onScroll={handleScroll} className="flex gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-4">
        {products.map((p, i) => (
          <ProductCard key={i} product={p} index={i} />
        ))}
        <div className="min-w-[80px] flex items-center justify-center">
          <Link to="/shop" className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all group">
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white selection:bg-black selection:text-white noise-grain relative overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex flex-col items-center overflow-hidden bg-black pt-28 md:pt-36">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover" poster="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop">
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent h-40 z-1" />
        </div>
        <div className="container-wide relative z-10 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center mb-6">
              <h1 className="text-[10px] md:text-[11px] font-mono font-black text-white/90 tracking-[0.8em] mb-1.5 uppercase">
                CHANGE YOUR CLOTHING WITH
              </h1>
              <Link to="/" className="text-6xl md:text-8xl lg:text-[7.5rem] font-branding leopard-permanent leading-[0.8] logo-hover-effect">
                SSacred
              </Link>
            </div>
            <div className="max-w-lg mb-8 px-6">
              <InteractiveText
                text="High-quality curated design from niche brands, made accessible for everyone who wants to dress better."
                hoverEffect="gold"
                className="text-[13px] md:text-[14px] font-medium text-white/70 leading-relaxed tracking-wide"
                delay={0.5}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-6 items-center mb-8">
              <Link to="/shop" className="px-12 py-4 bg-white text-black font-mono text-[11px] font-bold uppercase tracking-[0.25em] hover:bg-black hover:text-white hover:scale-105 active:scale-95 shadow-xl transition-all">
                Explore Collections
              </Link>
              <Link to="/story" className="flex items-center gap-3 px-12 py-4 border border-white/20 hover:border-white/60 bg-white/5 backdrop-blur-sm active:scale-95 transition-all">
                <Play size={12} fill="white" className="text-white" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-white">Watch Manifesto</span>
              </Link>
            </div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }} className="flex flex-col items-center gap-4">
              <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">Scroll</span>
              <div className="w-[1px] h-8 bg-white/10" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Product Strips */}
      <section className="bg-white border-b border-black/5 py-4">
        <ProductStrip title="HOT RIGHT NOW" subtitle="New Arrivals" products={newArrivals} />
        <ProductStrip title="PERSONALISED FOR YOU" subtitle="Curated Picks" products={personalised} />
      </section>

      {/* Editorial Split: Wardrobes & Accessories */}
      <section className="bg-white">
        <div className="flex flex-col xl:flex-row min-h-[500px]">
          {/* Wardrobes – Text Left, Photo Right */}
          <div className="flex-1 flex flex-col md:flex-row border-b xl:border-b-0 xl:border-r border-black/5 group">
            <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center bg-[#FAFAFA] group-hover:bg-white transition-colors order-2 md:order-1">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-6 block">THE CURATED UNIVERSE</span>
              <InteractiveText text="WARDROBES" hoverEffect="leopard" centered={false} className="text-3xl md:text-4xl font-display text-black mb-6 leading-none" />
              <p className="text-[12px] md:text-[13px] font-medium text-black/50 mb-8 leading-relaxed uppercase tracking-wider">
                Sculpt your identity with our seasonal capsules. Every piece is a chapter; every wardrobe is a story of uncompromising style.
              </p>
              <Link to="/wardrobes" className="inline-flex items-center gap-4 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#8B6914] group/link">
                VIEW CURATIONS <ArrowRight size={12} className="group-hover/link:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
            <div className="w-full md:w-1/2 relative overflow-hidden h-[350px] md:h-auto order-1 md:order-2">
              <img src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2000ms]" alt="Luxury Wardrobe" />
            </div>
          </div>

          {/* Accessories – Photo Left, Text Right */}
          <div className="flex-1 flex flex-col md:flex-row group">
            <div className="w-full md:w-1/2 relative overflow-hidden h-[350px] md:h-auto">
              <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[2000ms]" alt="Accessories" />
            </div>
            <div className="w-full md:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-6 block">THE SCULPTED DETAIL</span>
              <InteractiveText text="ACCESSORIES" hoverEffect="leopard" centered={false} className="text-3xl md:text-4xl font-display text-black mb-6 leading-none" />
              <p className="text-[12px] md:text-[13px] font-medium text-black/50 mb-8 leading-relaxed uppercase tracking-wider">
                Handcrafted to endure, designed to provoke. The finishing resonance for the individual who demands excellence in every stitch.
              </p>
              <Link to="/accessories" className="inline-flex items-center gap-4 font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-[#8B6914] group/link">
                SHOP THE DETAILS <ArrowRight size={12} className="group-hover/link:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Brands */}
      <section className="bg-black py-20 px-6 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-white/30 mb-4 block">CURATED COLLECTIVE</span>
              <InteractiveText
                text="FEATURED BRANDS"
                hoverEffect="gold"
                centered={false}
                className="text-4xl md:text-5xl lg:text-6xl font-branding text-white leading-none"
              />
            </div>
            <Link to="/brands" className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 border-b border-white/20 pb-1 hover:text-[#C8A84B] hover:border-[#C8A84B] transition-all whitespace-nowrap">
              EXPLORE ALL BRANDS →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {featuredBrands.map((brand) => (
              <Link
                key={brand.name}
                to={`/brand/${brand.name.toLowerCase().replace(' & ', '-').replace(/ /g, '-')}/story`}
                className="group relative bg-[#0a0a0a] p-12 lg:p-16 flex flex-col items-center justify-center gap-3 overflow-hidden min-h-[200px]"
              >
                {/* Gold fill wipe on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#C8A84B] to-[#8B6914] translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out" />
                {/* Default: leopard pattern name */}
                <span className="leopard-permanent text-2xl md:text-3xl font-branding relative z-10 group-hover:opacity-0 transition-opacity duration-200">
                  {brand.name}
                </span>
                <span className="font-mono text-[9px] text-white/30 uppercase tracking-[0.3em] relative z-10 group-hover:opacity-0 transition-opacity duration-200">
                  {brand.tag}
                </span>
                {/* Hover: black serif on gold */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 gap-2">
                  <span className="text-2xl md:text-3xl font-branding text-black">{brand.name}</span>
                  <span className="font-mono text-[9px] text-black/70 uppercase tracking-[0.3em]">{brand.tag}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 bg-black text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="container-wide max-w-4xl relative z-10">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-white/40 mb-10 block"
          >
            THE PHILOSOPHY
          </motion.span>
          <div className="mb-14">
            <h2 className="text-2xl md:text-4xl font-mono uppercase tracking-tight text-white/60 mb-6 font-bold">
              YOUR CLOTHES ARE LIKE FIRST WORDS.
            </h2>
            <div className="sacred-glow mb-10">
              <InteractiveText text="MAKE THEM COUNT." className="text-4xl md:text-6xl font-branding" centered={true} />
            </div>
            <div className="mt-12">
              <InteractiveText text="DRESS LIKE YOU MEAN IT." className="text-3xl md:text-5xl font-display text-white/40" hoverEffect="gold" centered={true} />
            </div>
          </div>
          <Link to="/story">
            <button className="px-12 py-5 border border-white/20 text-white font-mono text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-700 active:scale-95">
              Our Manifesto
            </button>
          </Link>
        </div>
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-[#8B6914]/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-[#8B6914]/10 blur-[120px] rounded-full" />
        </div>
      </section>
    </div>
  );
}
