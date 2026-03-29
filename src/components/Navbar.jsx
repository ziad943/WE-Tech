import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X, Laptop } from 'lucide-react';

export default function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-white blur-lg opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <Laptop className="h-7 w-7 text-white relative" />
            </div>
            <span className="text-xl font-bold tracking-[0.2em] uppercase text-white">WE Tech</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {['Products', 'About', 'Contact'].map((item) => (
              <Link 
                key={item}
                to={`/${item.toLowerCase()}`} 
                className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
              </Link>
            ))}
            <Link to="/cart" className="relative group p-2">
              <ShoppingCart className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-black h-4 w-4 flex items-center justify-center rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          <div className="md:hidden flex items-center space-x-6">
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-white" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-black text-[8px] font-black h-4 w-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center space-y-12">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-white">
            <X className="h-8 w-8" />
          </button>
          {['Products', 'About', 'Contact'].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="text-2xl font-bold uppercase tracking-[0.4em] text-white"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
