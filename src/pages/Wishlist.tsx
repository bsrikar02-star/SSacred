import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ShoppingCart, ArrowRight } from 'lucide-react';

const wishlistItems = [
    { brand: 'RAWCRAFT', name: 'Brutalist Raw Jacket', price: '₹3,499', img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=400&auto=format&fit=crop' },
    { brand: 'VENOM INK', name: 'Void Knit Sweater', price: '₹2,199', img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop' },
    { brand: 'MOTH & SILK', name: 'Silk Archival Scarf', price: '₹1,299', img: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=400&auto=format&fit=crop' },
];

export default function Wishlist() {
    return (
        <div className="min-h-screen bg-white noise-grain selection:bg-black selection:text-white">
            <div className="max-w-[1400px] mx-auto px-6 pt-32 pb-20">
                <header className="mb-16">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-[0.5em] text-black/30 mb-4 block underline decoration-[#C8A84B] underline-offset-8">YOUR ARSENAL</span>
                    <h1 className="text-5xl md:text-7xl font-branding text-black leading-none">WISHLIST</h1>
                </header>

                {wishlistItems.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {wishlistItems.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group cursor-pointer relative"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden bg-[#FAFAFA] mb-4">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Action buttons overlay */}
                                    <div className="absolute bottom-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20">
                                        <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:bg-black hover:text-white" title="Add to Cart">
                                            <ShoppingCart size={14} />
                                        </button>
                                    </div>

                                    {/* Remove from wishlist */}
                                    <button className="absolute top-3 right-3 text-black/40 hover:text-black font-mono text-[10px] uppercase font-bold tracking-wider z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Remove
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-black/40">{item.brand}</span>
                                            <h3 className="text-[13px] font-bold text-black uppercase tracking-wide mt-1">{item.name}</h3>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className="font-mono text-[11px] font-black">{item.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="py-20 flex flex-col items-center justify-center border border-black/10 border-dashed">
                        <p className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-black/40 mb-6">YOUR WISHLIST IS EMPTY</p>
                        <Link to="/shop" className="bg-black text-white px-8 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-[#8B6914] transition-colors flex items-center gap-3">
                            CONSTRUCT WARDROBE <ArrowRight size={14} />
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
