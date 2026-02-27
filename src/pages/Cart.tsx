import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

const cartItems = [
    { brand: 'RAWCRAFT', name: 'Brutalist Raw Jacket', size: 'M', price: '₹3,499', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&auto=format&fit=crop' },
    { brand: 'GRIDLOCK', name: 'Grid Tech Shell', size: 'L', price: '₹4,799', img: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=800&auto=format&fit=crop' },
    { brand: 'MOTH & SILK', name: 'Silk Archival Scarf', size: 'ONE SIZE', price: '₹1,299', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop' },
];

export default function Cart() {
    const total = '₹9,597';

    return (
        <div className="min-h-screen bg-white noise-grain">
            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
                <header className="mb-16">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">YOUR SELECTION</span>
                    <h1 className="text-5xl md:text-7xl font-branding text-black leading-none">MY CART</h1>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* Items */}
                    <div className="lg:col-span-2 space-y-8">
                        {cartItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-6 border-b border-black/5 pb-8 group"
                            >
                                <div className="w-24 md:w-32 aspect-[3/4] overflow-hidden bg-[#F8F8F8] flex-shrink-0">
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                                </div>
                                <div className="flex-grow">
                                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-black/30">{item.brand}</span>
                                    <h3 className="text-[16px] font-display text-black font-bold uppercase mt-1 mb-2">{item.name}</h3>
                                    <p className="font-mono text-[10px] text-black/40 uppercase tracking-widest mb-4">SIZE: {item.size}</p>
                                    <div className="flex items-center gap-3">
                                        <button className="w-8 h-8 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all font-mono text-sm">−</button>
                                        <span className="font-mono text-sm font-bold">1</span>
                                        <button className="w-8 h-8 border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all font-mono text-sm">+</button>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end justify-between">
                                    <span className="text-[18px] font-mono font-black text-black">{item.price}</span>
                                    <button className="text-black/20 hover:text-red-500 transition-colors">
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Summary */}
                    <aside className="lg:col-span-1">
                        <div className="bg-[#FAFAFA] border border-black/5 p-8 sticky top-28">
                            <h2 className="text-2xl font-display text-black mb-8 uppercase">Order Summary</h2>
                            <div className="space-y-4 font-mono text-[11px] uppercase tracking-widest mb-8">
                                <div className="flex justify-between"><span className="text-black/50">Subtotal</span><span className="font-bold">₹9,597</span></div>
                                <div className="flex justify-between"><span className="text-black/50">Shipping</span><span className="text-[#8B6914] font-bold">FREE</span></div>
                                <div className="flex justify-between"><span className="text-black/50">Discount</span><span className="text-green-600 font-bold">−₹0</span></div>
                                <div className="border-t border-black/10 pt-4 flex justify-between text-[14px] font-black">
                                    <span>Total</span><span>{total}</span>
                                </div>
                            </div>
                            <Link to="/checkout">
                                <button className="w-full bg-black text-white py-5 font-mono text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-[#8B6914] transition-all flex items-center justify-center gap-3 active:scale-95">
                                    Proceed to Checkout <ArrowRight size={14} />
                                </button>
                            </Link>
                            <Link to="/shop" className="block text-center mt-4 font-mono text-[9px] uppercase tracking-[0.3em] text-black/30 hover:text-black transition-colors">
                                Continue Shopping
                            </Link>
                        </div>
                    </aside>
                </div>

                {/* Empty state fallback icon */}
                {cartItems.length === 0 && (
                    <div className="text-center py-32">
                        <ShoppingBag size={48} className="mx-auto text-black/10 mb-6" />
                        <h3 className="text-2xl font-display text-black/30 uppercase mb-4">Your Cart is Empty</h3>
                        <Link to="/shop" className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#8B6914] hover:text-black transition-colors">
                            Start Shopping →
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
