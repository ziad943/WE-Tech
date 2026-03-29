import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, CreditCard, Truck, ShieldCheck } from 'lucide-react';

export default function Checkout({ cartItems, onClearCart }) {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderId, setOrderId] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          total,
          customer: {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value
          }
        })
      });

      const data = await response.json();
      if (data.success) {
        setOrderId(data.orderId);
        setOrderComplete(true);
        onClearCart();
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (orderComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="glass-card rounded-[40px] p-12 md:p-24 text-center space-y-12 max-w-2xl w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mx-auto text-white animate-pulse">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-serif font-light tracking-tight">Order <span className="italic opacity-50">Confirmed</span></h2>
            <p className="text-white/40 text-sm font-light tracking-wide">
              Your selection is being prepared. Order ID: <span className="text-white">{orderId}</span>
            </p>
          </div>
          <Link to="/" className="btn-neon inline-block">
            Return to Store
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-48 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={() => navigate(-1)} 
          className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors mb-12 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Back to Collection</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight">Finalize <span className="italic opacity-50">Order</span></h1>
              <p className="text-white/40 text-sm font-light tracking-wide">Enter your details to complete the transaction.</p>
            </div>

            <form onSubmit={handleCheckout} className="space-y-12">
              <section className="space-y-8">
                <div className="flex items-center gap-4 text-white/40">
                  <Truck className="h-5 w-5" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em]">Shipping Information</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input name="name" required type="text" placeholder="Full Name" className="glass-card bg-transparent rounded-2xl p-5 w-full outline-none focus:border-white/40 transition-colors font-light" />
                  <input name="email" required type="email" placeholder="Email Address" className="glass-card bg-transparent rounded-2xl p-5 w-full outline-none focus:border-white/40 transition-colors font-light" />
                  <input name="address" required type="text" placeholder="Shipping Address" className="glass-card bg-transparent rounded-2xl p-5 w-full md:col-span-2 outline-none focus:border-white/40 transition-colors font-light" />
                </div>
              </section>

              <section className="space-y-8">
                <div className="flex items-center gap-4 text-white/40">
                  <CreditCard className="h-5 w-5" />
                  <h2 className="text-[10px] font-bold uppercase tracking-[0.3em]">Payment Method</h2>
                </div>
                
                <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">
                  Payment will be processed securely via our concierge service.
                </p>
              </section>

              <button 
                type="submit"
                disabled={isProcessing}
                className="btn-neon w-full py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-3">
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-2 h-2 bg-black rounded-full animate-bounce"></span>
                  </span>
                ) : (
                  'Complete Transaction'
                )}
              </button>
            </form>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card rounded-[40px] p-10 space-y-10 sticky top-48">
              <h2 className="text-3xl font-serif italic tracking-tight">Order Overview</h2>
              
              <div className="space-y-6 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-xl overflow-hidden glass-card shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-sm font-serif tracking-tight">{item.name}</h4>
                      <p className="text-[10px] text-white/40 uppercase tracking-widest">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-light">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6 pt-10 border-t border-white/10">
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-light text-white/60">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="pt-6 flex justify-between text-2xl font-serif">
                  <span>Total</span>
                  <span className="text-glow">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-6 glass-card rounded-2xl text-white/40">
                <ShieldCheck className="h-5 w-5 shrink-0" />
                <p className="text-[10px] font-bold uppercase tracking-widest leading-relaxed">
                  Your data is protected by military-grade encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
