import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, Minus, Plus, Shield, Truck, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';

export default function ProductDetails({ products, onAddToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card rounded-[40px] p-12 text-center space-y-8 max-w-lg w-full">
          <h2 className="text-4xl font-serif italic tracking-tight">Product not found</h2>
          <button 
            onClick={() => navigate('/products')} 
            className="btn-neon inline-block"
          >
            Back to Selection
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-48 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-16 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Selection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
          {/* Product Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-white/5 to-transparent rounded-[60px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="glass-card rounded-[60px] overflow-hidden relative aspect-[4/5]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          </motion.div>

          {/* Product Info */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">{product.category}</span>
                <div className="h-px w-8 bg-white/20"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">In Stock</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif font-light tracking-tight leading-[0.9]">{product.name}</h1>
              <p className="text-3xl font-light text-white/60">${product.price}</p>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-white/40 font-light leading-relaxed">
                {product.description}
              </p>

              <div className="space-y-8">
                <div className="flex items-center glass-card rounded-full p-1 w-fit">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-4 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-16 text-center font-mono font-bold text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-4 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button 
                  onClick={() => onAddToCart(product, quantity)}
                  className="btn-neon w-full py-6 text-lg flex items-center justify-center gap-3 group"
                >
                  <ShoppingBag className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  Add to Collection
                </button>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12 border-t border-white/10">
              <div className="space-y-3">
                <Truck className="h-5 w-5 text-white/40" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">Global Shipping</h4>
                <p className="text-[10px] text-white/20 font-medium">Priority delivery within 48h.</p>
              </div>
              <div className="space-y-3">
                <Shield className="h-5 w-5 text-white/40" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">2Y Warranty</h4>
                <p className="text-[10px] text-white/20 font-medium">Full hardware protection.</p>
              </div>
              <div className="space-y-3">
                <RotateCcw className="h-5 w-5 text-white/40" />
                <h4 className="text-[10px] font-bold uppercase tracking-widest">Easy Returns</h4>
                <p className="text-[10px] text-white/20 font-medium">30-day seamless exchange.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
