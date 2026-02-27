import { motion } from 'motion/react';
import { InteractiveText } from '../components/InteractiveText';
import { Package, Heart, MapPin, RefreshCcw, Settings, LogOut } from 'lucide-react';

const navItems = [
    { icon: <Package size={14} />, label: 'My Orders' },
    { icon: <Heart size={14} />, label: 'Wishlist' },
    { icon: <MapPin size={14} />, label: 'Addresses' },
    { icon: <RefreshCcw size={14} />, label: 'Returns' },
    { icon: <Settings size={14} />, label: 'Settings' },
    { icon: <LogOut size={14} />, label: 'Log Out' },
];

const orders = [
    { id: '#SSC001234', date: 'Feb 18, 2026', item: 'Brutalist Raw Jacket', total: '₹3,499', status: 'DELIVERED', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=200&auto=format&fit=crop' },
    { id: '#SSC001198', date: 'Feb 03, 2026', item: 'Grid Tech Shell', total: '₹4,799', status: 'SHIPPED', img: 'https://images.unsplash.com/photo-1548624149-f463364f20f0?q=80&w=200&auto=format&fit=crop' },
];

export default function Account() {
    return (
        <div className="min-h-screen bg-white noise-grain">
            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
                <header className="mb-16">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">YOUR PROFILE</span>
                    <InteractiveText text="MY ACCOUNT" centered={false} hoverEffect="gold" className="text-5xl md:text-7xl font-branding text-black leading-none" />
                </header>

                <div className="flex flex-col md:flex-row gap-16">
                    {/* Sidebar */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="flex items-center gap-4 mb-10 p-6 bg-[#FAFAFA] border border-black/5">
                            <div className="w-12 h-12 rounded-full bg-black text-white text-xl flex items-center justify-center">🐆</div>
                            <div>
                                <h2 className="font-mono font-black text-black text-[13px] uppercase">ARJUN MEHTA</h2>
                                <p className="font-mono text-[9px] text-black/40 uppercase tracking-wider">arjun@ssacred.in</p>
                            </div>
                        </div>
                        <nav className="space-y-1">
                            {navItems.map((item, i) => (
                                <button key={i} className="w-full flex items-center gap-3 text-left font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black hover:bg-[#FAFAFA] px-4 py-3 transition-colors group">
                                    <span className="text-black/20 group-hover:text-[#C8A84B] transition-colors">{item.icon}</span>
                                    {item.label}
                                </button>
                            ))}
                        </nav>
                    </aside>

                    {/* Main */}
                    <main className="flex-grow">
                        <h3 className="text-2xl font-display text-black uppercase mb-8">Recent Orders</h3>
                        <div className="space-y-4">
                            {orders.map((order, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="border border-black/5 p-6 flex gap-6 items-center hover:bg-[#FAFAFA] transition-colors group"
                                >
                                    <div className="w-16 aspect-[3/4] overflow-hidden bg-[#F8F8F8] flex-shrink-0">
                                        <img src={order.img} alt={order.item} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-mono text-[11px] font-black text-black uppercase">{order.id}</span>
                                            <span className={`font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-1 ${order.status === 'DELIVERED' ? 'text-green-700 bg-green-50' : 'text-[#8B6914] bg-[#C8A84B]/10'}`}>{order.status}</span>
                                        </div>
                                        <p className="font-mono text-[12px] text-black uppercase font-bold">{order.item}</p>
                                        <p className="font-mono text-[9px] text-black/40 uppercase tracking-wider mt-1">{order.date}</p>
                                    </div>
                                    <span className="font-mono text-[14px] font-black text-black">{order.total}</span>
                                </motion.div>
                            ))}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
}
