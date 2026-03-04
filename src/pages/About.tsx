import { motion } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';
import { ArrowDown } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white min-h-screen noise-grain selection:bg-black selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-end p-6 md:p-12 max-w-[1400px] mx-auto">
        <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1519744346361-7a029b427a59?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

        <div className="relative z-20 container-wide pb-20 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center"
          >
            <span className="font-mono text-[10px] font-bold uppercase tracking-[0.5em] text-[#C8A84B] mb-8 block underline decoration-[#C8A84B] underline-offset-8">THE MANIFESTO</span>
            <InteractiveText
              text="WE ARE FOR EVERYONE WHO WANTS TO DRESS BETTER."
              className="text-5xl md:text-6xl lg:text-8xl font-branding text-black leading-none mb-10 tracking-tight"
              hoverEffect="leopard"
              centered={true}
            />
            <p className="font-mono text-[14px] md:text-[16px] text-black/60 uppercase tracking-widest leading-relaxed max-w-2xl font-bold">
              SSacred was born to bridge the gap between niche visionaries and everyday wardrobes. We believe that for the exact same budget, you shouldn't have to settle for second-tier mainstream fabrics. You deserve high-quality, authentic design.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-12 right-12 z-20 animate-bounce">
          <ArrowDown size={32} className="text-[#C8A84B]" />
        </div>
      </section>

      {/* Philosophy Grid */}
      <section className="bg-black text-white px-6 py-32">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[3/4] md:aspect-square bg-[#111111] overflow-hidden group shadow-2xl">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop"
              alt="SSacred Philosophy"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-1000" />
            <div className="absolute bottom-10 left-10 overflow-hidden">
              <h2 className="text-6xl font-branding text-white mix-blend-difference">CURATED</h2>
            </div>
          </div>

          <div className="space-y-16">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <InteractiveText
                text="01 : ACCESSIBLE QUALITY"
                hoverEffect="gold"
                centered={false}
                className="text-5xl md:text-6xl font-display text-white mb-6 uppercase"
              />
              <p className="font-mono text-[13px] text-white/50 leading-relaxed max-w-lg uppercase tracking-widest">
                Every brand on <span className="leopard-permanent text-white">SSacred</span> is handpicked for story and craft. We bridge the gap between emerging independent designers and you, ensuring that instead of settling for mass-produced, second-tier garments, you can invest in superior craftsmanship and expressive, high-quality design without the luxury markup.
              </p>
            </motion.div>

            <div className="w-full h-px bg-white/10" />

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <InteractiveText
                text="02 : REBELLIOUS IDENTITY"
                hoverEffect="gold"
                centered={false}
                className="text-5xl md:text-6xl font-display text-white mb-6 uppercase"
              />
              <p className="font-mono text-[13px] text-white/50 leading-relaxed max-w-lg uppercase tracking-widest">
                We believe fashion is your first word. We find the brands that refuse to compromise, offering pieces that speak volumes without making a sound.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Leopard's Promise */}
      <section className="py-32 px-6 max-w-[1400px] mx-auto relative cursor-default">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A84B]/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="text-center max-w-4xl mx-auto">
          <div className="text-6xl mb-8 animate-pulse text-center w-full flex justify-center">🐆</div>
          <InteractiveText
            text="THE LEOPARD'S PROMISE"
            centered={true}
            className="text-5xl md:text-7xl font-display text-black mb-12 uppercase drop-shadow-sm"
          />
          <p className="font-mono text-[16px] md:text-[20px] font-black text-black/60 leading-relaxed uppercase tracking-[0.2em] mb-20">
            WE PROMISE TO NEVER BECOME ORDINARY.<br />
            WE PROMISE TO ALWAYS HUNT FOR THE UNIQUE.<br />
            WE STRICTLY GUARANTEE THE AUTHENTICITY OF EVERY THREAD.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-y border-black/10 py-16">
            <div className="group">
              <span className="block text-6xl md:text-8xl font-display text-black group-hover:text-[#C8A84B] transition-colors duration-500 mb-2">50+</span>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Curated Brands</span>
            </div>
            <div className="group border-y md:border-y-0 md:border-x border-black/10 py-8 md:py-0">
              <span className="block text-6xl md:text-8xl font-display text-black group-hover:text-[#C8A84B] transition-colors duration-500 mb-2">10K</span>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Rebels Dressed</span>
            </div>
            <div className="group">
              <span className="block text-6xl md:text-8xl font-display text-[#C8A84B] mb-2 drop-shadow-lg">100%</span>
              <span className="font-mono text-[10px] font-black uppercase tracking-[0.3em] text-black/40">Verified Quality</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
