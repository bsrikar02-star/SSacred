import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { InteractiveText } from '../components/InteractiveText';
import { Lock, User, ArrowRight } from 'lucide-react';

export default function Auth() {
    return (
        <div className="min-h-screen bg-white noise-grain flex items-center justify-center px-6 py-32">
            <div className="w-full max-w-[480px]">
                <div className="text-center mb-16">
                    <Link to="/" className="text-4xl font-branding leopard-permanent mb-8 inline-block">SSacred</Link>
                    <InteractiveText
                        text="WELCOME BACK"
                        className="text-4xl md:text-5xl font-branding text-black mt-4 leading-none"
                        centered={true}
                    />
                    <p className="font-mono text-[10px] text-black/40 uppercase tracking-[0.3em] mt-4">Sign in to your account or create one</p>
                </div>

                <div className="space-y-4 mb-8">
                    <div className="relative">
                        <User size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" />
                        <input type="email" placeholder="YOUR EMAIL" className="w-full border border-black/10 pl-10 pr-4 py-4 font-mono text-[11px] uppercase tracking-widest outline-none focus:border-black transition-colors bg-transparent" />
                    </div>
                    <div className="relative">
                        <Lock size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/20" />
                        <input type="password" placeholder="PASSWORD" className="w-full border border-black/10 pl-10 pr-4 py-4 font-mono text-[11px] uppercase tracking-widest outline-none focus:border-black transition-colors bg-transparent" />
                    </div>
                </div>

                <button className="w-full bg-black text-white py-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#8B6914] transition-all flex items-center justify-center gap-3 mb-4 active:scale-95">
                    SIGN IN <ArrowRight size={14} />
                </button>
                <button className="w-full border border-black/10 py-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] hover:border-black hover:bg-black hover:text-white transition-all active:scale-95">
                    CREATE ACCOUNT
                </button>

                <p className="text-center mt-8 font-mono text-[9px] text-black/30 uppercase tracking-widest">
                    Forgot password? <span className="text-[#8B6914] cursor-pointer hover:underline">Reset here</span>
                </p>

                <div className="mt-16 pt-8 border-t border-black/5">
                    <div className="flex items-center gap-4 mb-4">
                        <div className="text-3xl">🐆</div>
                        <p className="font-mono text-[9px] text-black/40 uppercase tracking-wider leading-relaxed">
                            Members get early access to drops, exclusive discounts, and curated picks.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
