import { InteractiveText } from '../components/InteractiveText';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const faqs = [
    { q: 'HOW DO I TRACK MY ORDER?', a: 'Once your order ships, you will receive a tracking link via SMS and email within 24 hours of dispatch.' },
    { q: 'WHAT IS YOUR RETURN POLICY?', a: 'We offer 15-day hassle-free returns. Raise a request from your account or via the Support page. We handle everything.' },
    { q: 'HOW LONG DOES DELIVERY TAKE?', a: 'Standard delivery takes 4–7 business days. Expedited 2-day delivery is available at checkout for select pincodes.' },
    { q: 'ARE ALL BRANDS VERIFIED?', a: 'Yes. Every brand on SSacred is vetted for quality, authenticity, and story. We personally approve each brand partner.' },
    { q: 'CAN I CONTACT A BRAND DIRECTLY?', a: 'All customer communications go through SSacred. We are your sole point of contact to guarantee trust and accountability.' },
    { q: 'HOW DO I RAISE A QUALITY COMPLAINT?', a: 'Visit our Support page — it has a dedicated section for brand quality concerns and we guarantee a response within 24 hours.' },
];

export default function Help() {
    return (
        <div className="min-h-screen bg-white noise-grain">
            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
                <header className="mb-20">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">KNOWLEDGE BASE</span>
                    <InteractiveText text="HELP CENTER" centered={false} hoverEffect="gold" className="text-5xl md:text-7xl font-branding text-black leading-none" />
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    <div className="lg:col-span-2 space-y-0">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group border-b border-black/5 py-6 cursor-pointer list-none">
                                <summary className="flex items-center justify-between gap-4 list-none">
                                    <h3 className="font-mono text-[12px] font-black text-black uppercase tracking-widest group-open:text-[#8B6914] transition-colors">
                                        {faq.q}
                                    </h3>
                                    <ChevronRight size={16} className="text-black/20 flex-shrink-0 group-open:rotate-90 transition-transform" />
                                </summary>
                                <p className="mt-4 font-mono text-[11px] text-black/50 leading-relaxed tracking-wider">{faq.a}</p>
                            </details>
                        ))}
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-black text-white p-8">
                            <div className="text-3xl mb-4">🐆</div>
                            <h3 className="font-display text-xl uppercase mb-3">Still Stuck?</h3>
                            <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest leading-relaxed mb-6">Our curators are available 10am–7pm IST, Monday – Saturday.</p>
                            <Link to="/support">
                                <button className="w-full bg-[#C8A84B] text-black py-4 font-mono text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#8B6914] hover:text-white transition-all">
                                    CONTACT SUPPORT →
                                </button>
                            </Link>
                        </div>

                        <div className="border border-black/5 p-8">
                            <h3 className="font-display text-xl text-black uppercase mb-3">Quick Links</h3>
                            <div className="space-y-3">
                                {['/account', '/support', '/shop', '/brands'].map((path) => (
                                    <Link key={path} to={path} className="block font-mono text-[10px] uppercase tracking-widest text-black/40 hover:text-[#8B6914] transition-colors">
                                        → {path.replace('/', '').toUpperCase() || 'HOME'}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
