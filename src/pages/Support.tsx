import { motion } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';
import { ShieldCheck, RefreshCcw, AlertTriangle, HelpCircle, MessageSquare, ArrowRight } from 'lucide-react';

export default function Support() {
    const supportCategories = [
        {
            title: 'RETURNS & EXCHANGES',
            icon: <RefreshCcw size={24} />,
            desc: 'Seamless reverse logistics for your peace of mind.'
        },
        {
            title: 'BRAND QUALITY CONCERNS',
            icon: <AlertTriangle size={24} />,
            desc: 'High standards only. Report any deviations from excellence.'
        },
        {
            title: 'ORDER TRACKING',
            icon: <HelpCircle size={24} />,
            desc: 'Where is your story? Track your shipment in real-time.'
        },
        {
            title: 'CONNECT WITH US',
            icon: <MessageSquare size={24} />,
            desc: 'Speak to our curators directly for any assistance.'
        },
    ];

    return (
        <div className="bg-white min-h-screen noise-grain selection:bg-black selection:text-white">
            <div className="pt-32 pb-20 px-6 max-w-[1400px] mx-auto">
                <header className="max-w-4xl mb-24">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-6 block underline decoration-[#C8A84B] underline-offset-8 uppercase">SSACRED RESPONSE UNIT</span>
                    <InteractiveText
                        text="WE HAVE YOUR BACK"
                        hoverEffect="gold"
                        centered={false}
                        className="text-5xl md:text-8xl font-branding text-black leading-none mb-10"
                    />
                    <p className="text-[14px] md:text-[16px] font-medium text-black/60 leading-relaxed max-w-2xl uppercase tracking-wider">
                        AT <span className="leopard-permanent">SSacred</span>, WE STAND AS THE VIGILANT MIDDLEMAN BETWEEN YOU AND THE BRANDS. OUR MISSION IS TO ENSURE THAT EVERY STITCH DELIVERED MEETS THE UNCOMPROMISING STANDARDS WE PROMISE.
                    </p>
                </header>

                {/* Transparency Message Section */}
                <section className="bg-black text-white p-12 md:p-20 mb-24 rounded-sm relative overflow-hidden group">
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <ShieldCheck size={28} className="text-[#C8A84B]" />
                                <h2 className="text-xl md:text-2xl font-mono font-black text-white uppercase tracking-[0.2em] drop-shadow-md">TRUST BY DESIGN</h2>
                            </div>
                            <p className="text-[13px] md:text-[14px] font-semibold text-white/70 leading-relaxed mb-10 uppercase tracking-widest max-w-[90%]">
                                YOU ARE NOT DEALING WITH MULTIPLE ENTITIES. YOU ARE DEALING WITH <span className="leopard-permanent text-white">SSacred</span>. IF A BRAND FAILS TO DELIVER QUALITY, WE TAKE THE BURDEN. WE GUARANTEE TRANSPARENCY, AUTHENTICITY, AND RECOURSE FOR EVERY SINGLE CUSTOMER.
                            </p>
                            <button className="px-10 py-4 border border-white/20 font-mono text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
                                RAISE A REQUEST
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <div className="w-[300px] h-[300px] border border-white/10 rounded-full flex items-center justify-center relative animate-pulse">
                                <div className="w-[200px] h-[200px] border border-white/20 rounded-full flex items-center justify-center">
                                    <div className="w-[100px] h-[100px] bg-[#C8A84B]/20 rounded-full flex items-center justify-center">
                                        <ShieldCheck size={48} className="text-[#C8A84B]" />
                                    </div>
                                </div>
                                {/* Orbital dots */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-[#C8A84B] rounded-full" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A84B]/5 blur-[100px] rounded-full pointer-events-none" />
                </section>

                {/* Support Categories grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px mt-12 bg-white/10 border border-white/5">
                    {supportCategories.map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ backgroundColor: '#111111' }}
                            className="p-10 lg:p-14 flex flex-col justify-between group cursor-pointer bg-[#0A0A0A] text-white relative overflow-hidden transition-colors"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8A84B]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            <div className="relative pb-6 mb-6 z-10">
                                <div className="text-white group-hover:text-[#C8A84B] transition-colors mb-6 drop-shadow-lg scale-110 origin-left inline-block">
                                    {cat.icon}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white uppercase tracking-wider">{cat.title}</h3>
                            </div>
                            <div className="relative z-10 flex flex-col gap-6 flex-grow">
                                <p className="text-[13px] font-mono font-bold text-white uppercase tracking-widest leading-relaxed">
                                    {cat.desc}
                                </p>
                                <div className="mt-auto flex items-center justify-between opacity-50 group-hover:opacity-100 transition-opacity">
                                    <span className="font-mono text-[10px] font-black uppercase tracking-[0.4em] text-[#C8A84B]">INITIATE REQUEST</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform text-[#C8A84B]" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ redirection or contact */}
                <footer className="mt-32 text-center pb-10 border-t border-black/5 pt-20">
                    <InteractiveText
                        text="STILL HAVE QUESTIONS?"
                        hoverEffect="gold"
                        className="text-3xl md:text-5xl font-branding text-black mb-10"
                    />
                    <button className="px-14 py-5 bg-black text-white font-mono text-[11px] font-black uppercase tracking-[0.4em] hover:bg-[#8B6914] transition-all active:scale-95 shadow-2xl">
                        CONTACT CURATOR SUPPORT
                    </button>
                </footer>
            </div>
        </div>
    );
}
