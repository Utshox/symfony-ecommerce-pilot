import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Cart } from './pages/Cart';
import { useStore } from './store/useStore';

function App() {
  const { theme } = useStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/category/:slug" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<div className="min-h-screen flex items-center justify-center"><p className="text-xl">Product Detail Page - Coming Soon</p></div>} />
            <Route path="/wishlist" element={<div className="min-h-screen flex items-center justify-center"><p className="text-xl">Wishlist Page - Coming Soon</p></div>} />
            <Route path="/login" element={<div className="min-h-screen flex items-center justify-center"><p className="text-xl">Login Page - Coming Soon</p></div>} />
            <Route path="/register" element={<div className="min-h-screen flex items-center justify-center"><p className="text-xl">Register Page - Coming Soon</p></div>} />
            <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><p className="text-xl">Page Not Found</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;