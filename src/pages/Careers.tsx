import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';
import { Briefcase, Palette, Code, Megaphone, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

export default function Careers() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const jobRoles = [
        {
            category: 'CREATIVE',
            title: 'Fashion Design & Curation',
            icon: <Palette size={16} />,
            desc: 'Shape the aesthetic of the next generation. Curate and design pieces that define niche fashion.'
        },
        {
            category: 'TECH',
            title: 'AI ENGINEERING',
            icon: <Code size={16} />,
            desc: 'Optimize the digital experience. Build the engine behind the movement using Agentic AI.'
        },
        {
            category: 'MARKETING',
            title: 'Growth & Content Strategy',
            icon: <Megaphone size={16} />,
            desc: 'Tell the SSacred story. Grow our community of niche fashion enthusiasts across Bharat.'
        },
        {
            category: 'OPERATIONS',
            title: 'Supply Chain & Logistics',
            icon: <Briefcase size={16} />,
            desc: 'Ensure every stitch reaches its destination with uncompromising quality and speed.'
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => setFormStatus('success'), 1500);
    };

    if (formStatus === 'success') {
        return (
            <div className="bg-white min-h-screen noise-grain flex items-center justify-center px-6 selection:bg-[#C8A84B] selection:text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                >
                    <CheckCircle2 size={32} className="text-[#C8A84B] mx-auto mb-6" />
                    <InteractiveText
                        text="MANIFESTO RECEIVED"
                        hoverEffect="gold"
                        className="text-4xl md:text-6xl font-branding text-[#111111] mb-6"
                    />
                    <p className="font-sans text-[10px] uppercase tracking-[0.4em] text-[#111111] max-w-sm mx-auto leading-loose font-bold">
                        YOUR VIBES HAVE BEEN LOGGED. WE WILL BE IN TOUCH IF THE ALIGNMENT IS SACRED.
                    </p>
                    <button
                        onClick={() => setFormStatus('idle')}
                        className="mt-10 px-10 py-4 bg-[#111111] text-white font-sans text-[10px] font-black uppercase tracking-[0.4em] hover:bg-[#C8A84B] transition-all duration-500 shadow-xl active:scale-95"
                    >
                        BACK
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen noise-grain selection:bg-[#C8A84B] selection:text-white font-sans overflow-x-hidden">
            <div className="pt-32 pb-16 px-6 max-w-[1400px] mx-auto">
                {/* Hero Header */}
                <header className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="font-sans text-[9px] font-black uppercase tracking-[0.6em] text-[#C8A84B] mb-8 block">
                            COLLECTIVE RECRUITMENT
                        </span>
                        <InteractiveText
                            text="JOIN THE SSACRED ARCHIVE"
                            hoverEffect="leopard"
                            centered={false}
                            className="text-4xl md:text-7xl lg:text-8xl font-branding text-[#111111] mb-8 leading-[0.9] tracking-tight"
                        />
                        <div className="h-[2px] w-16 bg-[#C8A84B] mb-8" />
                        <p className="text-[12px] md:text-[14px] font-bold text-[#111111] leading-relaxed max-w-xl uppercase tracking-[0.1em]">
                            WE ARE RECRUITING CO-AUTHORS FOR THE NEXT CHAPTER OF <span className="leopard-permanent">SSacred</span>.
                            DISCARD THE ORDINARY. EMBRACE THE SACRED.
                        </p>
                    </motion.div>
                </header>

                {/* Role Grid - Staggered Reveal and Smooth Hover */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black border-y border-black mb-32 shadow-sm">
                    {jobRoles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="p-10 flex flex-col justify-between group cursor-pointer bg-[#111111] text-[#C8A84B] hover:bg-white hover:text-[#111111] min-h-[400px] transition-all duration-300 relative overflow-hidden"
                        >
                            {/* Decorative background element on hover */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A84B]/10 rounded-full -mr-16 -mt-16 group-hover:bg-[#111111]/10 transition-all duration-300 blur-3xl opacity-0 group-hover:opacity-100 pointer-events-none" />

                            <div className="space-y-10 relative z-10 pointer-events-none">
                                <div className="flex items-center justify-between">
                                    <span className="font-sans text-[8px] font-black tracking-[0.4em] uppercase text-white/50 group-hover:text-[#111111]/70 transition-colors duration-300">
                                        {role.category}
                                    </span>
                                    <div className="text-current transition-all duration-300 group-hover:rotate-12 group-hover:scale-110">
                                        {role.icon}
                                    </div>
                                </div>

                                <h3 className="text-2xl lg:text-[1.75rem] font-branding text-current uppercase leading-[1.1] transition-all duration-300 group-hover:tracking-wider">
                                    {role.title}
                                </h3>

                                <p className="text-[9px] font-sans font-black uppercase tracking-[0.15em] leading-relaxed text-white/70 group-hover:text-[#111111]/80 transition-colors duration-300">
                                    {role.desc}
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-12 transition-all duration-300 text-current relative z-10 pointer-events-none">
                                <span className="font-sans text-[8px] font-black uppercase tracking-[0.4em] group-hover:translate-x-2 transition-transform duration-300">EXPLORE</span>
                                <ArrowRight size={12} className="group-hover:translate-x-4 transition-transform duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Refined Manifesto Section - Left Black, Right White */}
                <section className="flex flex-col lg:flex-row border-2 border-[#111111] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden mb-24 min-h-[500px] rounded-sm">
                    {/* Left Column - Deep Black with Gold Text */}
                    <div className="w-full lg:w-1/2 bg-[#111111] p-12 md:p-16 flex flex-col justify-between relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#C8A84B]/10 to-transparent pointer-events-none" />
                        <div>
                            <span className="font-sans text-[8px] font-black uppercase tracking-[0.5em] text-[#C8A84B] mb-10 block">01 / THE MISSION</span>
                            <h2 className="text-3xl md:text-[4vw] font-branding text-[#C8A84B] leading-none mb-10 uppercase tracking-tighter">
                                SEND YOUR <br /> MANIFESTO
                            </h2>
                            <div className="space-y-10 mt-12 max-w-sm">
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                    <h4 className="font-branding text-lg mb-2 text-[#C8A84B] tracking-widest uppercase">THE OBSESSION</h4>
                                    <p className="text-[10px] font-sans text-white font-bold uppercase tracking-[0.15em] leading-relaxed">
                                        WE SEEK INDIVIDUALS WHO DON'T JUST FOLLOW TRENDS—THEY CRITIQUE THEM. WE VALUE DEPTH OVER SPEED.
                                    </p>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }}>
                                    <h4 className="font-branding text-lg mb-2 text-[#C8A84B] tracking-widest uppercase">THE REWARD</h4>
                                    <p className="text-[10px] font-sans text-white font-bold uppercase tracking-[0.15em] leading-relaxed">
                                        HIGH AUTONOMY. IMPACT-DRIVEN WORK. ELITE FASHION ARCHIVES. FOUNDING TEAM.
                                    </p>
                                </motion.div>
                            </div>
                        </div>
                        <div className="mt-16 pt-8 border-t border-[#C8A84B]/20 flex justify-between items-center relative z-10">
                            <p className="font-mono text-[7px] text-[#C8A84B] font-bold uppercase tracking-[0.3em]">EST. 2024 / SSACRED BEYOND</p>
                            <div className="w-2 h-2 bg-[#C8A84B] rounded-full animate-ping" />
                        </div>
                    </div>

                    {/* Right Column - White Form with Black Text */}
                    <div className="w-full lg:w-1/2 bg-white p-12 md:p-16">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="font-sans text-[8px] font-black uppercase tracking-[0.4em] text-[#111111]">IDENTITY</label>
                                    <input required type="text" className="w-full bg-transparent border-b-2 border-[#111111] py-3 font-sans text-[11px] font-black focus:border-[#C8A84B] outline-none transition-colors placeholder:text-[#111111]/20" placeholder="FULL NAME" />
                                </div>
                                <div className="space-y-2">
                                    <label className="font-sans text-[8px] font-black uppercase tracking-[0.4em] text-[#111111]">UPLINK</label>
                                    <input required type="email" className="w-full bg-transparent border-b-2 border-[#111111] py-3 font-sans text-[11px] font-black focus:border-[#C8A84B] outline-none transition-colors placeholder:text-[#111111]/20" placeholder="EMAIL ADDRESS" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[8px] font-black uppercase tracking-[0.4em] text-[#111111]">SPECIALIZATION</label>
                                <div className="relative">
                                    <select required className="w-full bg-transparent border-b-2 border-[#111111] py-3 font-sans text-[11px] font-black focus:border-[#C8A84B] outline-none transition-colors appearance-none cursor-pointer">
                                        <option value="">SELECT ROLE</option>
                                        <option value="creative">CREATIVE ARCHITECTURE</option>
                                        <option value="tech">TECHNOLOGICAL STACK</option>
                                        <option value="marketing">GROWTH ENGINES</option>
                                        <option value="ops">CORE OPERATIONS</option>
                                    </select>
                                    <ArrowRight size={10} className="absolute right-0 bottom-4 rotate-90 text-[#111111] pointer-events-none" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[8px] font-black uppercase tracking-[0.4em] text-[#111111]">PROOF OF WORK</label>
                                <input type="url" className="w-full bg-transparent border-b-2 border-[#111111] py-3 font-sans text-[11px] font-black focus:border-[#C8A84B] outline-none transition-colors placeholder:text-[#111111]/20" placeholder="PORTFOLIO / LINKEDIN" />
                            </div>

                            <div className="space-y-2">
                                <label className="font-sans text-[8px] font-black uppercase tracking-[0.4em] text-[#111111]">MANIFESTO</label>
                                <textarea required rows={2} className="w-full bg-transparent border-2 border-[#111111] p-5 font-sans text-[11px] font-black focus:border-[#C8A84B] outline-none transition-colors placeholder:text-[#111111]/20 resize-none uppercase leading-relaxed" placeholder="WHY THE SACRED?" />
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: '#C8A84B', color: '#FFFFFF' }}
                                whileTap={{ scale: 0.98 }}
                                disabled={formStatus === 'submitting'}
                                className="w-full py-5 bg-[#111111] text-white font-sans text-[9px] font-black uppercase tracking-[0.5em] transition-all duration-300 flex items-center justify-center gap-6 group disabled:opacity-50"
                            >
                                {formStatus === 'submitting' ? 'SYNCHRONIZING...' : 'SUBMIT MANIFESTO'}
                                <Send size={12} className="group-hover:translate-x-3 group-hover:-translate-y-2 transition-transform duration-500" />
                            </motion.button>
                        </form>
                    </div>
                </section>

                {/* Improved Compact Footer */}
                <footer className="text-center pt-24 pb-12 border-t border-[#111111]/10">
                    <motion.div
                        className="inline-block cursor-default mb-12"
                        whileHover={{ color: '#C8A84B', scale: 1.05 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <InteractiveText
                            text="DRESS LIKE YOU MEAN IT"
                            hoverEffect="gold"
                            className="text-4xl md:text-[8vw] font-branding leading-none text-[#111111] opacity-100"
                        />
                    </motion.div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 pt-12">
                        <div className="group cursor-pointer">
                            <span className="font-sans text-[8px] uppercase tracking-[0.5em] text-[#C8A84B] mb-1 block font-black">INQUIRIES</span>
                            <span className="font-sans text-[11px] font-black tracking-widest text-[#111111] border-b-2 border-[#C8A84B] pb-1 hover:bg-[#C8A84B] hover:text-white transition-all">CAREERS@SSACRED.COM</span>
                        </div>
                        <div className="group cursor-pointer">
                            <span className="font-sans text-[8px] uppercase tracking-[0.5em] text-[#C8A84B] mb-1 block font-black">HEADQUARTERS</span>
                            <span className="font-sans text-[11px] font-black tracking-widest text-[#111111]">PILANI, RAJASTHAN</span>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
