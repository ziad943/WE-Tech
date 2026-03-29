import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Globe, Cpu, Laptop } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { motion } from 'motion/react';

export default function Home({ products, onAddToCart }) {
  return (
    <div className="space-y-32 pb-32">
      {/* Cinematic Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-12"
          >
            <div className="inline-flex items-center space-x-3 px-4 py-2 glass-card rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/70">Next Gen Hardware</span>
            </div>

            <h1 className="text-6xl md:text-9xl font-serif font-light tracking-tighter leading-[0.9] text-glow">
              THE FUTURE <br />
              <span className="italic font-thin opacity-60">OF TECH</span>
            </h1>

            <p className="max-w-xl mx-auto text-sm md:text-base text-white/40 font-light leading-relaxed tracking-wide">
              Experience the pinnacle of engineering. Curated high-performance gear for the modern visionary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <Link to="/products" className="btn-neon group">
                Explore Collection
                <ArrowRight className="inline-block ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/about" className="btn-neon-outline">
                Our Vision
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight">Featured <span className="italic opacity-50">Gear</span></h2>
            <p className="text-white/40 text-sm tracking-widest uppercase">Handpicked for performance</p>
          </div>
          <Link to="/products" className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40 hover:text-white transition-colors flex items-center group">
            View All Products
            <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02] -skew-y-3"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { icon: Zap, title: "Velocity", desc: "Optimized for speed and high-intensity workflows." },
              { icon: Shield, title: "Integrity", desc: "Built to last with premium materials and warranty." },
              { icon: Globe, title: "Ecosystem", desc: "Seamless integration across all your devices." }
            ].map((feature, i) => (
              <div key={i} className="space-y-6 group">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-serif italic tracking-tight">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed font-light">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-[40px] p-12 md:p-24 text-center space-y-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight">Join the <span className="italic opacity-50">Inner Circle</span></h2>
            <p className="text-white/40 text-sm max-w-md mx-auto font-light">Get exclusive access to limited drops and technical insights.</p>
          </div>

          <form className="max-w-md mx-auto relative group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="w-full bg-white/[0.03] border border-white/10 rounded-full px-8 py-5 text-[10px] font-bold tracking-[0.3em] uppercase focus:outline-none focus:border-white/30 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 px-8 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-white/90 transition-colors">
              Join
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
