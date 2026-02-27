import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const curations = [
  {
    id: 1,
    title: 'Curation One',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '30%', left: '45%', label: 'Heavyweight Hoodie', link: '/shop' },
      { top: '70%', left: '50%', label: 'Tech Cargo Pants', link: '/shop' }
    ]
  },
  {
    id: 2,
    title: 'Curation Two',
    img: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '35%', left: '48%', label: 'Linen Shirt', link: '/shop' },
      { top: '75%', left: '45%', label: 'Tailored Trousers', link: '/shop' }
    ]
  },
  {
    id: 3,
    title: 'Curation Three',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '25%', left: '50%', label: 'Cyber Shell', link: '/shop' },
      { top: '65%', left: '48%', label: 'Modular Vest', link: '/shop' }
    ]
  },
  {
    id: 4,
    title: 'Curation Four',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '30%', left: '45%', label: 'Silk Dress', link: '/shop' },
      { top: '70%', left: '50%', label: 'Leather Boots', link: '/shop' }
    ]
  },
  {
    id: 5,
    title: 'Curation Five',
    img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop',
    hotspots: [
      { top: '30%', left: '45%', label: 'Biker Jacket', link: '/shop' },
      { top: '70%', left: '50%', label: 'Distressed Denim', link: '/shop' }
    ]
  }
];

export default function Wardrobes() {
  return (
    <div className="pt-32 pb-20 px-6 bg-[#0A0A0A] min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16">
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-[#C8A84B]/60 mb-4 block underline decoration-[#C8A84B] underline-offset-8">THE CURATED UNIVERSE</span>
          <h1 className="text-5xl md:text-7xl font-branding text-[#F5F2ED] leading-none">Wardrobes</h1>
        </header>

        <div className="space-y-16">
          {curations.map((curation, i) => (
            <motion.div
              key={curation.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center group"
            >
              <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                <h2 className="text-4xl font-display text-[#F5F2ED] mb-4 hover:leopard-fill transition-all duration-500 cursor-pointer inline-block">
                  {curation.title}
                </h2>
                <p className="text-xs font-medium text-[#F5F2ED]/60 leading-relaxed max-w-sm mb-6 group-hover:text-[#F5F2ED] transition-colors duration-500">
                  A complete narrative captured in a single frame. Hover over the pieces to explore the individual components of this identity.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#F5F2ED] text-[#111111] px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#8B6914] hover:text-white transition-all duration-500 relative overflow-hidden"
                >
                  <span className="relative z-10">Shop Full Look</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-gold translate-y-full hover:translate-y-0 transition-transform duration-500"
                  />
                </motion.button>
              </div>

              <div className={`lg:col-span-7 relative group ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl bg-[#1A1A1A] max-w-sm mx-auto">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5 }}
                    src={curation.img}
                    alt={curation.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Hotspots */}
                  {curation.hotspots.map((spot, idx) => (
                    <Link
                      key={idx}
                      to={spot.link}
                      className="absolute w-8 h-8 flex items-center justify-center group/spot z-10"
                      style={{ top: spot.top, left: spot.left }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-3 h-3 bg-white rounded-full shadow-lg"
                      />
                      <div className="absolute left-10 bg-white px-3 py-2 whitespace-nowrap opacity-0 group-hover/spot:opacity-100 transition-opacity shadow-xl">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.1em] text-[#111111]">
                          {spot.label}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
