import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github, Mail, ArrowUpRight, Laptop } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-24 pb-12 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 glass-card rounded-xl flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                <Laptop className="h-5 w-5" />
              </div>
              <span className="text-3xl font-serif italic tracking-tighter text-glow">WE Tech.</span>
            </Link>
            <p className="text-white/40 font-light leading-relaxed max-w-sm">
              Providing high-quality tech gear for students and professionals. Built for the WE Applied Technology Schools final project.
            </p>
            <div className="flex gap-4">
              {[Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Navigation</h4>
              <ul className="space-y-4">
                {['Home', 'Products', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-sm font-light text-white/40 hover:text-white transition-colors flex items-center gap-1 group">
                      {item}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Collection</h4>
              <ul className="space-y-4">
                {['Laptops', 'Accessories', 'Components', 'Networking'].map((item) => (
                  <li key={item}>
                    <Link to="/products" className="text-sm font-light text-white/40 hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 col-span-2 sm:col-span-1">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">Newsletter</h4>
              <div className="relative group">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-white/10 py-2 text-sm font-light outline-none focus:border-white/40 transition-colors"
                />
                <button className="absolute right-0 bottom-2 text-white/40 hover:text-white transition-colors">
                  <Mail className="h-4 w-4" />
                </button>
              </div>
              <p className="text-[10px] text-white/20 font-light italic">Join our elite circle.</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-12 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex gap-8">
            <Link to="/privacy" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Privacy Policy</Link>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-white/20 hover:text-white transition-colors">Terms of Service</a>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">
            &copy; {currentYear} WE Tech Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
