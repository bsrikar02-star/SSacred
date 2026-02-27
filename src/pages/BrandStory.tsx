import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';

const brandStories = {
  'rawcraft': {
    name: 'RAWCRAFT',
    tagline: 'Brutalist Streetwear from the heart of Delhi',
    story: 'Founded in 2019, RAWCRAFT was born from the concrete jungles of New Delhi. Inspired by brutalist architecture and the raw energy of the streets, every piece is a statement of resilience. We use heavyweight fabrics and industrial techniques to create clothing that lasts as long as the stories they tell.',
    img1: 'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?q=80&w=800&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop'
  },
  'venom-ink': {
    name: 'VENOM INK',
    tagline: 'Dark Editorial Couture from Mumbai',
    story: 'VENOM INK is the intersection of high fashion and the occult. Based in Mumbai, we explore the darker side of the human psyche through intricate embroidery, avant-garde silhouettes, and a palette of absolute void. Our clothing is for those who find beauty in the shadows.',
    img1: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=800&auto=format&fit=crop'
  },
  'gridlock': {
    name: 'GRIDLOCK',
    tagline: 'Technical Futurism for the Urban Nomad',
    story: 'GRIDLOCK is built for the hyper-connected world. Our Bangalore-based studio focuses on technical fabrics, modular designs, and utility that doesn\'t compromise on aesthetic. We create gear for the urban nomad who navigates the digital and physical grids simultaneously.',
    img1: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop'
  },
  'moth-silk': {
    name: 'MOTH & SILK',
    tagline: 'Old Money Revived for the New Generation',
    story: 'MOTH & SILK brings the elegance of the past into the present. Based in Pune, we source the finest silks and linens to create timeless pieces that speak of quiet luxury. We believe in the "Old Money" aesthetic — refined, understated, and eternally stylish.',
    img1: 'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=800&auto=format&fit=crop',
    img2: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800&auto=format&fit=crop'
  }
};

export default function BrandStory() {
  const { brandId } = useParams();
  const brand = brandStories[brandId as keyof typeof brandStories];

  if (!brand) return <div className="pt-32 px-6 text-center">Brand not found</div>;

  return (
    <div className="pt-32 pb-20 px-6 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#8B6914] mb-4 block">The Story</span>
          <h1 className="text-7xl md:text-9xl font-display text-[#F5F2ED] mb-6">{brand.name}</h1>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#F5F2ED]/40">{brand.tagline}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={brand.img1}
              alt={brand.name}
              className="w-full aspect-square object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-display text-[#F5F2ED]">Our Origin</h2>
            <p className="text-lg font-medium text-[#F5F2ED]/70 leading-relaxed">
              {brand.story}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-2"
          >
            <img
              src={brand.img2}
              alt={brand.name}
              className="w-full aspect-[4/5] object-cover grayscale"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:order-1 space-y-8"
          >
            <h2 className="text-4xl font-display text-[#F5F2ED]">The Craft</h2>
            <p className="text-lg font-medium text-[#F5F2ED]/70 leading-relaxed">
              We don't just make clothes; we build identities. Every stitch is considered, every fabric is tested, and every design is refined until it meets the <span className="leopard-permanent">SSacred</span> standard of excellence.
            </p>
            <button className="bg-[#F5F2ED] text-[#111111] px-10 py-5 font-mono text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#8B6914] hover:text-white transition-colors">
              Explore Collection
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
