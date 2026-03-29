import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight, Minus, Plus } from 'lucide-react';

export default function Cart({ cartItems, onUpdateQuantity, onRemoveItem }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card rounded-[40px] p-12 md:p-24 text-center space-y-12 max-w-2xl w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mx-auto animate-float">
            <ShoppingBag className="h-10 w-10 text-white/20" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight">Your collection is <span className="italic opacity-50">empty</span></h2>
            <p className="text-white/40 text-sm font-light tracking-wide">Begin your journey into the future of hardware.</p>
          </div>
          <Link to="/products" className="btn-neon inline-block">
            Explore Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-48 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Cart Items */}
          <div className="flex-grow space-y-8">
            <div className="flex items-end justify-between mb-12">
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight">Your <span className="italic opacity-50">Collection</span></h1>
              <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em]">{cartItems.length} Items</p>
            </div>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="glass-card rounded-[32px] p-6 md:p-8 flex flex-col md:flex-row items-center gap-8 group">
                  <div className="w-32 h-32 rounded-2xl overflow-hidden glass-card shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  </div>
                  
                  <div className="flex-grow text-center md:text-left space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{item.category}</p>
                    <h3 className="text-xl font-serif tracking-tight">{item.name}</h3>
                    <p className="text-white/60 font-light">${item.price}</p>
                  </div>

                  <div className="flex items-center glass-card rounded-full p-1">
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="p-3 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-mono font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="p-3 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>

                  <button 
                    onClick={() => onRemoveItem(item.id)}
                    className="p-4 glass-card rounded-2xl text-white/20 hover:text-white hover:bg-red-500/20 transition-all"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="lg:w-96">
            <div className="glass-card rounded-[40px] p-10 space-y-10 sticky top-48">
              <h2 className="text-3xl font-serif italic tracking-tight">Summary</h2>
              
              <div className="space-y-6 text-sm font-light">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-white/60">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="pt-6 border-t border-white/10 flex justify-between text-xl font-serif">
                  <span>Total</span>
                  <span className="text-glow">${total.toFixed(2)}</span>
                </div>
              </div>

              <Link to="/checkout" className="btn-neon w-full text-center block">
                Proceed to Checkout
              </Link>

              <p className="text-[10px] text-center text-white/20 font-bold uppercase tracking-[0.2em]">
                Secure encrypted transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
