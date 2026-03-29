import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-48 pb-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Header */}
        <div className="space-y-8 max-w-4xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-white/40">Get in Touch</p>
          <h1 className="text-6xl md:text-9xl font-serif font-light tracking-tight leading-[0.85]">
            Let's Start a <span className="italic opacity-50">Conversation</span>.
          </h1>
          <p className="text-xl text-white/40 font-light leading-relaxed">
            Whether you have a question about our hardware or want to discuss a custom build, our team is here to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-[40px] p-10 md:p-16 space-y-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-12 py-12">
                  <div className="w-24 h-24 glass-card rounded-full flex items-center justify-center mx-auto text-white animate-pulse">
                    <MessageSquare className="h-10 w-10" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-4xl font-serif italic tracking-tight">Message Sent!</h3>
                    <p className="text-white/40 text-sm font-light tracking-wide">We've received your message and will get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="btn-neon inline-block"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full glass-card bg-transparent rounded-2xl p-5 outline-none focus:border-white/40 transition-colors font-light" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full glass-card bg-transparent rounded-2xl p-5 outline-none focus:border-white/40 transition-colors font-light" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Subject</label>
                    <input required type="text" placeholder="How can we help?" className="w-full glass-card bg-transparent rounded-2xl p-5 outline-none focus:border-white/40 transition-colors font-light" />
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 ml-4">Message</label>
                    <textarea required rows="6" placeholder="Tell us more about your inquiry..." className="w-full glass-card bg-transparent rounded-2xl p-5 outline-none focus:border-white/40 transition-colors font-light resize-none"></textarea>
                  </div>

                  <button type="submit" className="btn-neon w-full py-6 text-lg flex items-center justify-center gap-3 group">
                    <Send className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-card rounded-[40px] p-10 space-y-10">
              <h3 className="text-2xl font-serif italic tracking-tight">Contact Information</h3>
              
              <div className="space-y-8">
                {[
                  { icon: Mail, label: "Email", value: "support@wetech.edu.eg" },
                  { icon: Phone, label: "Phone", value: "+20 123 456 7890" },
                  { icon: MapPin, label: "Studio", value: "WE Applied Tech School, Cairo" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">{item.label}</p>
                      <p className="text-lg font-light">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-[40px] p-10 space-y-8">
              <h3 className="text-xl font-serif italic tracking-tight">Global Support</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/40">
                    <Clock className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Hours</span>
                  </div>
                  <p className="text-sm font-light">24/7 Digital Concierge</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-white/40">
                    <Globe className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Region</span>
                  </div>
                  <p className="text-sm font-light">Worldwide Delivery</p>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[40px] p-10 flex items-center justify-between group cursor-pointer hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-white/40 group-hover:text-white transition-colors">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-serif italic">Live Chat</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/20">Available Now</p>
                </div>
              </div>
              <div className="w-10 h-10 glass-card rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <Send className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
