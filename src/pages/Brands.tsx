import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { InteractiveText } from '../components/InteractiveText';

const brands = [
  {
    id: 'rawcraft',
    name: 'RAWCRAFT',
    location: 'Delhi',
    style: 'Brutalist Streetwear',
    logo: 'https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=200&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'venom-ink',
    name: 'VENOM INK',
    location: 'Mumbai',
    style: 'Dark Editorial',
    logo: 'https://images.unsplash.com/photo-1560155016-bd4879ae8f21?q=80&w=200&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1519744346361-7a029b427a59?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gridlock',
    name: 'GRIDLOCK',
    location: 'Bangalore',
    style: 'Technical Futurism',
    logo: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=200&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'moth-silk',
    name: 'MOTH & SILK',
    location: 'Pune',
    style: 'Old Money Revived',
    logo: 'https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=200&auto=format&fit=crop',
    img: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=800&auto=format&fit=crop'
  },
];

export default function Brands() {
  return (
    <div className="bg-white min-h-screen noise-grain">
      <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
        <header className="mb-20">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.4em] text-black/30 mb-4 block">COLLECTIVE</span>
          <InteractiveText
            text="OUR BRAND PARTNERS"
            centered={true}
            hoverEffect="leopard"
            className="text-3xl md:text-5xl lg:text-7xl font-branding text-black leading-none mb-10"
          />
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-[#F9F9F9] mb-8 group-hover:shadow-2xl transition-all duration-700">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-[2000ms]"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white/10 group-hover:bg-transparent transition-all duration-700">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <InteractiveText
                      text={brand.name}
                      className="text-5xl md:text-7xl font-branding text-white mb-3"
                    />
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-white bg-black/50 px-3 py-1 backdrop-blur-sm">
                      {brand.location} // {brand.style}
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Link to="/shop" className="bg-white text-black px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    ← View Collection
                  </Link>
                  <Link to={`/brand/${brand.id}/story`} className="bg-white text-black px-6 py-3 font-mono text-[9px] font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all">
                    View Story →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
