import { InteractiveText } from '../components/InteractiveText';
import { CreditCard, Package, Truck, CheckCircle, ArrowRight } from 'lucide-react';

export default function Checkout() {
    return (
        <div className="min-h-screen bg-white noise-grain">
            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
                <header className="mb-16">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">FINAL STEP</span>
                    <InteractiveText text="CHECKOUT" centered={false} hoverEffect="gold" className="text-5xl md:text-7xl font-branding text-black leading-none" />
                </header>

                {/* Progress steps */}
                <div className="flex items-center gap-4 mb-16">
                    {[{ icon: <Package size={14} />, label: 'Cart' }, { icon: <Truck size={14} />, label: 'Shipping' }, { icon: <CreditCard size={14} />, label: 'Payment' }, { icon: <CheckCircle size={14} />, label: 'Confirm' }].map((step, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className={`w-8 h-8 flex items-center justify-center font-mono text-[10px] font-bold ${i === 0 ? 'bg-black text-white' : 'border border-black/10 text-black/30'}`}>
                                {step.icon}
                            </div>
                            <span className={`font-mono text-[9px] uppercase tracking-widest hidden md:block ${i === 0 ? 'text-black font-bold' : 'text-black/30'}`}>{step.label}</span>
                            {i < 3 && <div className="w-8 h-px bg-black/10 mx-2 hidden md:block" />}
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Shipping form */}
                    <div>
                        <h2 className="text-2xl font-display text-black uppercase mb-8">Shipping Details</h2>
                        <div className="space-y-4">
                            {['FULL NAME', 'EMAIL ADDRESS', 'PHONE NUMBER', 'STREET ADDRESS', 'CITY', 'PINCODE'].map((field) => (
                                <input
                                    key={field}
                                    type="text"
                                    placeholder={field}
                                    className="w-full border border-black/10 px-4 py-4 font-mono text-[11px] uppercase tracking-widest outline-none focus:border-black transition-colors bg-transparent"
                                />
                            ))}
                        </div>

                        <h2 className="text-2xl font-display text-black uppercase mt-12 mb-8">Payment</h2>
                        <div className="space-y-4">
                            {['CARD NUMBER', 'NAME ON CARD', 'EXPIRY DATE', 'CVV'].map((field) => (
                                <input key={field} type="text" placeholder={field} className="w-full border border-black/10 px-4 py-4 font-mono text-[11px] uppercase tracking-widest outline-none focus:border-black transition-colors bg-transparent" />
                            ))}
                        </div>

                        <button className="w-full mt-8 bg-black text-white py-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#8B6914] transition-all flex items-center justify-center gap-3 active:scale-95">
                            PLACE ORDER <ArrowRight size={14} />
                        </button>
                    </div>

                    {/* Order summary */}
                    <aside>
                        <h2 className="text-2xl font-display text-black uppercase mb-8">Order Summary</h2>
                        <div className="space-y-4 mb-8">
                            {[
                                { name: 'Brutalist Raw Jacket', brand: 'RAWCRAFT', price: '₹3,499', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200&auto=format&fit=crop' },
                                { name: 'Grid Tech Shell', brand: 'GRIDLOCK', price: '₹4,799', img: 'https://images.unsplash.com/photo-1548624149-f463364f20f0?q=80&w=200&auto=format&fit=crop' },
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4 border-b border-black/5 pb-4">
                                    <div className="w-16 aspect-[3/4] overflow-hidden bg-[#F8F8F8]">
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                    </div>
                                    <div className="flex-grow">
                                        <span className="font-mono text-[9px] text-black/30 uppercase tracking-wider">{item.brand}</span>
                                        <p className="font-mono text-[11px] font-bold text-black uppercase">{item.name}</p>
                                    </div>
                                    <span className="font-mono text-[12px] font-black text-black">{item.price}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-[#FAFAFA] border border-black/5 p-6 space-y-3 font-mono text-[11px] uppercase tracking-widest">
                            <div className="flex justify-between"><span className="text-black/50">Subtotal</span><span className="font-bold">₹8,298</span></div>
                            <div className="flex justify-between"><span className="text-black/50">Shipping</span><span className="text-[#8B6914] font-bold">FREE</span></div>
                            <div className="border-t border-black/10 pt-3 flex justify-between font-black text-[14px]"><span>Total</span><span>₹8,298</span></div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
