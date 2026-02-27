import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Brands from './pages/Brands';
import About from './pages/About';
import Wardrobes from './pages/Wardrobes';
import Accessories from './pages/Accessories';
import BrandStory from './pages/BrandStory';
import LoadingScreen from './components/LoadingScreen';
import { motion, AnimatePresence } from 'motion/react';
import { ReactNode, useState, useEffect, useRef } from 'react';

import Account from './pages/Account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Help from './pages/Help';
import Auth from './pages/Auth';
import Support from './pages/Support';
import Wishlist from './pages/Wishlist';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <ScrollToTop />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
              <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
              <Route path="/brands" element={<PageWrapper><Brands /></PageWrapper>} />
              <Route path="/brand/:brandId/story" element={<PageWrapper><BrandStory /></PageWrapper>} />
              <Route path="/wardrobes" element={<PageWrapper><Wardrobes /></PageWrapper>} />
              <Route path="/accessories" element={<PageWrapper><Accessories /></PageWrapper>} />
              <Route path="/story" element={<PageWrapper><About /></PageWrapper>} />
              <Route path="/account" element={<PageWrapper><Account /></PageWrapper>} />
              <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
              <Route path="/checkout" element={<PageWrapper><Checkout /></PageWrapper>} />
              <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
              <Route path="/help" element={<PageWrapper><Help /></PageWrapper>} />
              <Route path="/login" element={<PageWrapper><Auth /></PageWrapper>} />
              <Route path="/support" element={<PageWrapper><Support /></PageWrapper>} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  const originalTitle = useRef(document.title);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const messages = [
      "🐆 don't leave us...",
      "👀 come back...",
      "🖤 SSacred misses you",
      "✨ your fit is waiting",
      "🛍️ cart is getting lonely",
      "🔥 new drops just landed",
      "💀 your style is suffering",
      "🐆 the leopard needs you"
    ];
    let index = 0;
    let titleInterval: any;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        titleInterval = setInterval(() => {
          document.title = messages[index % messages.length];
          index++;
        }, 2000);
      } else {
        clearInterval(titleInterval);
        document.title = originalTitle.current;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      clearInterval(titleInterval);
    };
  }, []);

  return null;
}

function PageWrapper({ children }: { children: ReactNode }) {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative"
    >
      {/* Gradient Wipe Transition - Only for Home Page */}
      {location.pathname === '/' && (
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{
            duration: 1,
            times: [0, 0.5, 1],
            ease: [0.76, 0, 0.24, 1]
          }}
          className="fixed inset-0 z-[100] bg-gradient-to-r from-[#8B6914] via-[#C8A84B] to-[#8B6914] origin-left pointer-events-none"
        />
      )}
      {children}
    </motion.div>
  );
}
